<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use PhpOffice\PhpSpreadsheet\Style\Border;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\Normalizer\AbstractNormalizer;
use Symfony\Component\Serializer\SerializerInterface;
use Doctrine\Common\Annotations\AnnotationReader;

class SpreadsheetService
{
    private $em;
    private $annotationReader;
    private $serializer;
    const SHEET_HEAD = 2;

    public function __construct(EntityManagerInterface $em, SerializerInterface $serializer)
    {
        $this->serializer = $serializer;
        $this->annotationReader = new AnnotationReader();
        $this->em = $em;
    }

    public function export($className, array $filterCriteria = []) : Spreadsheet 
    {
        $entityClass = "App\Entity\\" . ucfirst($className);
        $fieldsGetter = 'get' . $className . "Fields";
        $repository = $this->em->getRepository($entityClass);
        $queryBuilder = $repository->createQueryBuilder("e");
        $entityFields = $this->$fieldsGetter([],"", true);
         // Apply filter criteria to the query builder
         foreach ($filterCriteria as $field => $value) {
            
            $fieldData = $this->getFieldData(
                strpos($field, '.id') !== false ? explode('.id', $field)[0] : $field,
                $entityClass
            );
            if (!$fieldData) continue;

            $column = $fieldData['name'];
            $alias = 'e';
            $assoc = $fieldData["type"] === "association";

            if ($assoc) {
                // Add join and apply filter conditions
                $queryBuilder->join($alias.".".$column, $column."_alias"); // e.department, department_alias
                $alias = $column."_alias"; // department_alias
            }
            $where = 
                $alias.".".
                ($assoc ? "id" : $column).
                (is_array($value) ? " IN (" : "=").
                ":{$column}_parm".
                (is_array($value) ? ")" : "");
            
            $queryBuilder->andWhere($where);
            $queryBuilder->setParameter($column."_parm", $value);
        }

        // Normalize the entities based on the normalizationContext
        $normalizationContext = $this->getNormalizationContext($entityClass);
        $sheetData = $this->serializer->normalize(
            $queryBuilder->getQuery()->getResult(),
            null,
            [AbstractNormalizer::GROUPS => $normalizationContext]
        );

        // restructure data
        foreach ($sheetData as &$row) {
            $flattenArray = $this->flattenArray($row);
            // dd($flattenArray);
            $row = $this->restructureData(
                array_values($flattenArray), array_keys($flattenArray), $entityFields["fields"]
            );
        }
        // dd($sheetData);
        $spreadsheet = $this->generateSpreadsheet(
            $sheetData, 
            $className . "-template", 
            array_key_exists("ignore",$entityFields) ? $entityFields["ignore"] : [], 
            false
        );

        return $spreadsheet;
    }

    function flattenArray($array, $prefix = '') {
        $result = [];
        foreach ($array as $key => $value) {
            $newKey = ($prefix !== '') ? $prefix . "_" . $key : $key;
            if (is_array($value)) {
                $result = array_merge($result, $this->flattenArray($value, $newKey));
            } else {
                $result[$newKey] = $value;
            }
        }
        return $result;
    }

    private function getNormalizationContext(string $entityName): array
    {
        $reflectionClass = new \ReflectionClass($entityName);
        $classAnnotations = $this->annotationReader->getClassAnnotations($reflectionClass);
        foreach ($classAnnotations as $annotation) {
            if (array_key_exists('normalization_context', $annotation->attributes)) {
                return $annotation->attributes["normalization_context"]['groups'];
            }
        }

        return [];
    }

    public function import(
        bool $addNonExAssoc,
        string $filePath,
        string $className,
        string $uniqueColumns,
        bool $updateIfExist
    ) {
        $errorMessages = [];
        $duplicatedEntities = [];
        $requiredFields = [];
        $missingData = [];

        try {
            $spreadsheet = IOFactory::load($filePath); // Here we are able to read from the excel file 
            $workSheet = $spreadsheet->getActiveSheet();
            $data = $workSheet->toArray(null, true, true, true);
            // $workSheet->removeRow(1); // skip the first row 

            $entityClass = "App\Entity\\" . ucfirst($className);
            $entityFields = 'get' . $className . "Fields";
            $Fields = $this->$entityFields($data[2], $entityClass);
            $repository = $this->em->getRepository($entityClass);

            // Map the data to the entity properties
            // dump($metadata->getFieldNames());
            // dd($Fields);
            // exit;

            foreach ($data as $key => $row) {
                $entity = new $entityClass();
                if (
                    $key <= self::SHEET_HEAD || // skip sheet head (columns name and the title)
                    // Skip the empty row
                    empty(array_filter($row, function ($value) {
                        return !empty($value);
                    }))
                )
                    continue;



                foreach ($Fields as $column => $field) {
                    // dd($row);
                    $value = trim($row[$column]);
                    if ($value == "") $value = null;

                    // $fieldName = $field["name"];
                    $setterName = $field["setter"];
                    $fieldType = $field["type"];
                    $fieldRequired = !$field["nullable"];


                    if ($fieldRequired && is_null($value)) {
                        // dd($field);
                        $requiredFields[] = $row; // store canceled rows
                        continue 2;
                    } 

                    // dump($field);
                    // dd( $field->getValue());

                    if ($fieldType === "association") {
                        // Handle related entity
                        $relatedEntityName = $field["entity"];
                        $relatedRepository = $this->em->getRepository($relatedEntityName);
                        $searchBy = $field["searchBy"] ? $field["searchBy"] : 'id';
                        $obj = $relatedRepository->findOneBy([
                            $searchBy => $value
                        ]);
                        // dump($value);

                        if ($obj) {
                            $entity->$setterName($obj);
                        } elseif ($addNonExAssoc) {

                            // add new nested association e.g : node with no name
                            $nestedEntity = new $relatedEntityName();

                            if ($searchBy != "id") {
                                $nestedSetterName = 'set' . ucfirst($searchBy);
                                $nestedEntity->$nestedSetterName($value);
                            }


                            if (array_key_exists("fields", $field)) {
                                foreach ($field["fields"] as $nestedField) {
                                    $nestedSetterName = 'set' . ucfirst(reset($nestedField));
                                    $nestedEntity->$nestedSetterName($row[key($nestedField)]);
                                }
                            }
                            // This field was added to prevent having to interact with 
                            // the object (like using the Adjacency List) until it has the missing data
                            if (method_exists($nestedEntity, "setTemp"))
                                $nestedEntity->setTemp(true);


                            $this->em->persist($nestedEntity);
                            $this->em->flush();
                            $entity->$setterName($nestedEntity);
                            // dump($nestedEntity);


                            // store unfounded Association eg: nodes (app. cp)
                            array_key_exists("store", $field) && 
                                $missingData[$relatedEntityName][] = 
                                $this->restructureData($row, array_column($Fields, 'name'), $field["store"]); 

                        }
                    } else {
                        // Handle normal field
                        // if date and not null convert to DateTimeInterface
                        if ($fieldType === 'datetime' || $fieldType === 'date' || $fieldType === 'time') {
                            $value = \DateTime::createFromFormat('d/m/y', $value);

                        }
                        $entity->$setterName($value);
                        // try {
                        //     //code...
                        // } catch (\Throwable $th) {
                        //     //throw $th;
                        //     dump($value);
                        //     dd($fieldType);
                        // }

                    }
                }
                // dump($entity);
                // exit;

                if ($uniqueColumns) {
                    $queryBuilder = $repository->createQueryBuilder("e");
                    foreach (explode(',', $uniqueColumns) as $uniqueColumn) {

                        foreach ($Fields as $storedField) {
                            if ($storedField["name"] === $uniqueColumn) {
                                $column = $storedField;
                                break;
                            }
                        }

                        if (!isset($column)) {
                            $column = $this->getFieldData($uniqueColumn, $entityClass);

                        }

                        $getter = $column["getter"];
                        $attr = $column["attr"];
                        $is_association = $column["type"] == "association";
                        $value = $is_association ? $entity->$getter()->getId() : $entity->$getter();
                        $selector = $is_association ? $attr . ".id" : $attr;

                        $queryBuilder
                            ->innerJoin('e.' . $attr, $attr)
                            ->andWhere($selector . ' = :' . $attr . '_var')
                            ->setParameter($attr . '_var', $value);
                    }

                    $foundedDuplicate = $queryBuilder->getQuery()->getOneOrNullResult();

                    if ($foundedDuplicate) {
                        // dd($updateIfExist);
                        if (!$updateIfExist) {
                            $duplicatedEntities[] = $row; // store canceled rows
                        } else {
                            // Create a property accessor
                            $propertyAccessor = PropertyAccess::createPropertyAccessor();

                            // Get the properties of the new instance
                            $metadata = $this->em->getClassMetadata($entityClass);
                            $reflectionClass = $metadata->getReflectionClass();
                            $properties = $reflectionClass->getProperties();

                            // Update the attributes of the found book using the new book instance
                            foreach ($properties as $property) {
                                $propertyName = $property->getName();
                                if (!in_array($propertyName, ["TRANSLATED_NAME", "id"])) { // Skip the 'id' property
                                    $newPropertyValue = $propertyAccessor->getValue($entity, $propertyName);
                                    $foundPropertyValue = $propertyAccessor->getValue($foundedDuplicate, $propertyName);

                                    // Compare the values and skip update if they are the same
                                    if ($newPropertyValue !== $foundPropertyValue) {
                                        $propertyAccessor->setValue($foundedDuplicate, $propertyName, $newPropertyValue);
                                    }
                                }
                            }
                            // Persist the changes only if there were updates
                            if ($this->em->getUnitOfWork()->isEntityScheduled($foundedDuplicate)) {
                                $this->em->persist($foundedDuplicate);
                            }

                        }

                        continue;
                    }
                }

                $this->em->persist($entity);

            }

            // exit;
            // $unitOfWork = $this->em->getUnitOfWork();
            // $persistedEntities = $unitOfWork->getScheduledEntityInsertions();
            // Dump the persisted entities for debugging
            // dump($persistedEntities);
            // Dump missingData
            // dump($duplicatedEntities);
            // dd($duplicatedEntities);

            if (!empty($requiredFields)) {
                $url = $this->generateSpreadsheet($requiredFields, $className . "-template");
                $errorMessages[] = 'Erreur d\'insertion de données : champs obligatoires manquants. Certaines données n\'ont pas pu être insérées dans la base de données car elles comportent des données manquantes. Veuillez consulter <a class="link" target="_blank" href="' . $url . '" download>ce fichier</a> pour obtenir la liste des lignes annulées.';
            }
            if (!empty($duplicatedEntities)) {
                $url = $this->generateSpreadsheet($duplicatedEntities, $className . "-template");
                $errorMessages[] = 'Erreur d\'insertion de données : Des doublons ont été détectés. Certaines données n\'ont pas pu être insérées dans la base de données car elles existent déjà. Veuillez consulter <a class="link" target="_blank" href="' . $url . '" download>ce fichier</a> pour obtenir la liste des lignes annulées.';
            }

            if (!empty($missingData)) {
                foreach ($missingData as $key => $value) {
                    $url = $this->generateSpreadsheet($value, $key . "-template");
                    $errorMessages[] = 'Erreur de données manquantes : Certains champs associés ont des données manquantes. Veuillez vous référer à <a class="link" target="_blank" href="' . $url . '" download>ce fichier</a> pour compléter les informations requises et importer le fichier modifié dans la table désignée de la demande.';
                }
            }
            // dd($errorMessages);
            // dd($missingData);

            // todo - remove create spreadsheet from upload

            $this->em->flush();

        } catch (\Exception $e) {
            $errorMessages[] = $e->getMessage();
        }

        // Create a JSON response 
        $response = new JsonResponse(['messages' => $errorMessages]);
        return $response;
    }


    private function getFieldData($fieldName, $entityClass)
    {
        $fieldName = preg_replace('/\s+/', '', $fieldName);
        $setterName = 'set' . ucfirst($fieldName);
        $getterName = 'get' . ucfirst($fieldName);
        $entity = new $entityClass();
        $fieldData = [];
        // dump($setterName);
        if (!method_exists($entity, $setterName))
            return false;
        $metadata = $this->em->getClassMetadata($entityClass);
        $reflectionClass = $metadata->getReflectionClass();
        $properties = $reflectionClass->getProperties();
        // dump($properties);exit;
        $fieldType = array_reduce($properties, function ($carry, $property) use ($fieldName, $metadata,$reflectionClass, &$fieldData) {
            $propertyName = strtolower(str_replace('_', '', $property->getName()));
            if ($propertyName === strtolower($fieldName)) {
                $fieldData["attr"] = $property->getName();

                if ($metadata->hasAssociation($property->getName())) {
                    $fieldData["entity"] = $metadata->getAssociationTargetClass($property->getName());

                     // Check if the property is nullable
                    $reflectionProperty = $reflectionClass->getProperty($property->getName());
                    $fieldData["nullable"] = $reflectionProperty->hasType() && $reflectionProperty->getType()->allowsNull();

                    return "association";
                }
                
                $fieldMapping = $metadata->getFieldMapping($property->getName());
                $fieldData["nullable"] = $fieldMapping['nullable'];
                return $fieldMapping['type'];
            }
            return $carry;
        }, null);

        // dump("fieldName : ".$fieldName);
        // $fieldName == "DateMst" && dump([
        //     "name" => $fieldName,
        //     "type" => $fieldType,
        //     "setter" => $setterName
        // ]);

        $fieldData = array_merge($fieldData, [
            "name" => $fieldName,
            "type" => $fieldType,
            "setter" => $setterName,
            "getter" => $getterName,
        ]);

        return $fieldData;
    }

    private function getFieldColumn($fieldColumn, $fieldName, $rowData)
    {
        $column = array_search(trim($fieldColumn), $rowData);
        return $column ? [$column => $fieldName] : null;
    }

    public function generateSpreadsheet($data, $template, $ignore = [], $url = true)
    {
        // dump($template);
        // dd($data);
        $fileFolder = __DIR__ . '/../../public/';
        $templateFile = $fileFolder . "templates/" . $template . '.xlsx';

        // Load the template spreadsheet
        $spreadsheet = IOFactory::load($templateFile);

        // Get the active sheet
        $sheet = $spreadsheet->getActiveSheet();

        // ignore template columns
        foreach ($ignore as $column) {
            $sheet->removeColumn($column);
        }

        // Set the data from your array to the spreadsheet
        $sheet->fromArray($data, null, "A" . (self::SHEET_HEAD + 1), true);
        // true : preserving null values

        
        // Apply border style to the range of cells
        $highestColumn = $sheet->getHighestColumn();
        $highestRow = count($data) + self::SHEET_HEAD;
        // Define the range of cells to apply borders
        $range = 'A1:' . $highestColumn . $highestRow;
        $style = $sheet->getStyle($range);
        $style->getBorders()->getAllBorders()->setBorderStyle(Border::BORDER_THIN);
        
        // export without storing file on the server 
        if(!$url) return $spreadsheet;

        // Save the spreadsheet to a file
        $filename = md5(uniqid()) . "-" . 'spreadsheet.xlsx';
        $filePath = $fileFolder . "uploads/" . $filename;

        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save($filePath);
        // dd($filePath);

        return "//" . $_SERVER['HTTP_HOST'] . "/api/files/" . $filename;
    }

    // this was made to keep the spread sheet columns name readable for the clients
    function getEdgeFields($rowData = [], $entityClass = "", $sort = false)
    {
        if($sort) {
            return ["fields" =>["department_titre", "node_a_titre", "node_b_titre", "node_a_identifier", "node_b_identifier", "longueur", "section", "commune_titre"]];
        }
        $fields = [];
        foreach ($rowData as $column => $cell) {
            $cellValue = trim($cell);
            // dump($cellValue);
            if ($cellValue === 'ID source') {
                $rowData[$column] = "NodeA";
            } elseif ($cellValue === 'ID charge') {
                $rowData[$column] = "NodeB";
            } elseif ($cellValue === 'Départ') {
                $rowData[$column] = "Department";
            }
            // dump($cell);
            $fieldData = $this->getFieldData($rowData[$column], $entityClass);
            if (!$fieldData)
                continue;

            $cellValue === 'ID source' &&
                $fieldData = array_merge($fieldData, ["searchBy" => "identifier", "fields" => [$this->getFieldColumn("Nom source", "Titre", $rowData)]]);
            $cellValue === 'ID charge' &&
                $fieldData = array_merge($fieldData, ["searchBy" => "identifier", "fields" => [$this->getFieldColumn("Nom charge", "Titre", $rowData)]]);
            $cellValue === 'Commune' &&
                $fieldData = array_merge($fieldData, ["searchBy" => "titre"]);
            $cellValue === 'Départ' &&
                $fieldData = array_merge($fieldData, ["searchBy" => "titre"]);

            $fields[$column] = $fieldData;
        }

        // dd($fields);
        return $fields;
    }
    function getPosteFields($rowData = [], $entityClass = "", $sort = false)
    {
        if($sort) {
            return [
                "ignore" => ["G", "G"], // shifts the subsequent columns 
                "fields" => ["node_department_titre", "designation", "origine", "MLE", "date_mst", "PKVA", "type","node_identifier", "poste", "marque", "n_serie","node_commune_titre", "nb_clients"]
            ];
        }
        // @todo Long aérien Sect MM2 CR Départ

        $fields = [];
        foreach ($rowData as $column => $cell) {
            $cellValue = trim($cell);
            if ($cellValue === 'N° serie') {
                $rowData[$column] = "NSerie";
            } elseif ($cellValue === 'P KVA') {
                $rowData[$column] = "PKVA";
            } elseif ($cellValue === 'nbr client BT') {
                $rowData[$column] = "NbClients";
            } elseif ($cellValue === 'DATE MST') {
                $rowData[$column] = "DateMst";
            } elseif ($cellValue === 'Départ') {
                $rowData[$column] = "Department";
            } elseif ($cellValue === 'CR') {
                $rowData[$column] = "Commune";
            } elseif ($cellValue === 'LCLCLC') {
                $rowData[$column] = "node";
            } elseif ($cellValue === 'Sect MM2') {
                $rowData[$column] = "section";
            } elseif ($cellValue === 'Long aérien') {
                $rowData[$column] = "longueur";
            }
            // dump($rowData[$column]);
            $fieldData = $this->getFieldData($rowData[$column], $entityClass);

            $cellValue === 'LCLCLC' &&
                $fieldData = array_merge($fieldData, ["searchBy" => "identifier", "sort" => ["department",null,null,"node",null, "longueur", "section","commune"]]);
            // todo [,"marque"] wach marque lifiha dik MET.. nzidha ftableux dyal les appareils yak machi tronçon omachi poste?

            $fieldData && $fields[$column] = $fieldData;
        }
        // dd($fields);
        return $fields;
    }

    function restructureData($data, $columns, $newColumns)
    {
        $result = [];
        // dump($columns);
        // dd($newColumns);
        foreach ($newColumns as $column) {
            if (in_array($column, $columns)) {
                $columnIndex = array_search($column, $columns);
                $value = $data[$columnIndex];
                $result[] = $value;
            } else {
                $result[] = null; // Add an empty value for null columns
            }
        }
        // dd($result);
        return $result;
    }
}