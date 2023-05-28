<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;
use Symfony\Component\HttpFoundation\JsonResponse;

class SpreadsheetService
{
    private $em;
    const SHEET_HEAD =  2;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function import(
        bool $addNonExAssoc,
        string $filePath,
        string $className,
        string $uniqueColumns
    ) {
        $errorMessages = [];
        $canceledEntities = [];
        $missingData = [];

        try {
            $spreadsheet = IOFactory::load($filePath); // Here we are able to read from the excel file 
            $workSheet = $spreadsheet->getActiveSheet();
            $data = $workSheet->toArray(null, true, true, true);
            // $workSheet->removeRow(1); // skip the first row 

            $entityClass = "App\Entity\\".ucfirst($className);
            $getterName = 'get' . $className . "Fields";
            $Fields = $this->$getterName($data[2], $entityClass);
            $repository = $this->em->getRepository($entityClass);

            // Map the data to the entity properties
            // dump($metadata->getFieldNames());
            // dump($Fields);
            // exit;

            foreach ($data as $key => $row) {
                $entity = new $entityClass();
                if (
                    $key <= self::SHEET_HEAD || // skip sheet head (columns name and the title)
                    // Skip the empty row
                    empty(array_filter($row, function ($value) {
                        return !empty($value);
                    }))
                ) continue;



                foreach ($Fields as $column => $field) {
                    // dd($row);
                    $value = $row[$column];
                    if (is_null($value))
                        continue;

                    // $fieldName = $field["name"];
                    $setterName = $field["setter"];
                    $fieldType = $field["type"];

                    // dump($field);
                    // dd( $field->getValue());

                    if ($fieldType === "association") {
                        // Handle related entity
                        $relatedEntityName = $field["entity"];
                        $relatedRepository = $this->em->getRepository($relatedEntityName);
                        $searchBy = $field["searchBy"] ? $field["searchBy"] : 'id';
                        $obj = $relatedRepository->findOneBy([
                            $searchBy => trim($value)
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
                            // $this->em->flush();
                            // todo $this->em->flush();
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

                    $searchArgs = array_map(function ($field) use ($entity) {
                        $field = explode(':', $field);
                        $getter = "get" . $field[0];
                        return [$field[1] => $entity->$getter()];
                    }, explode(',', $uniqueColumns));

                    // dump($uniqueColumns);
                    // dd($searchArgs);
                    // todo : $obj = $repository->findOneBy($searchArgs);

                    if ($obj) {
                        $canceledEntities[] = $row; // store canceled rows
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
            // dump($canceledEntities);
            // dd($missingData);

            if (!empty($canceledEntities)) {
                $url = $this->generateSpreadsheet($canceledEntities,$className."-template");
                $errorMessages[] = `Erreur d'insertion de données : Des doublons ont été détectés. Certaines données n'ont pas pu être insérées dans la base de données car elles existent déjà. Veuillez consulter <a class="link" target="_blank" href="$url" download>ce fichier</a> pour obtenir la liste des lignes annulées.`;
            }

            if (!empty($missingData)) {
                foreach ($missingData as $key => $value) {
                    $url = $this->generateSpreadsheet($value,$key."-template");
                    $errorMessages[] = `Erreur de données manquantes : Certains champs associés ont des données manquantes. Veuillez vous référer à <a class="link" target="_blank" href="$url" download>ce fichier</a> pour compléter les informations requises et importer le fichier modifié dans la table désignée de la demande.`;
                }
            }

            // todo - remove create spreadsheet from upload

            // todo $this->em->flush();

        } catch (\Exception $e) {
            $errorMessages[] = $e->getMessage();
        }

        // Create a JSON response 
        $response = new JsonResponse([ 'messages' => $errorMessages ]);
        return $response;
    }


    private function getFieldData($fieldName, $entityClass)
    {
        $fieldName = preg_replace('/\s+/', '', $fieldName);
        $setterName = 'set' . ucfirst($fieldName);
        $entity = new $entityClass();
        $fieldData = [];
        // dump($setterName);
        if (!method_exists($entity, $setterName))
            return false;
        $metadata = $this->em->getClassMetadata($entityClass);
        $reflectionClass = $metadata->getReflectionClass();
        $properties = $reflectionClass->getProperties();
        // dump($properties);exit;
        $fieldType = array_reduce($properties, function ($carry, $property) use ($fieldName, $metadata, &$fieldData) {
            $propertyName = strtolower(str_replace('_', '', $property->getName()));
            if ($propertyName === strtolower($fieldName)) {
                if ($metadata->hasAssociation($property->getName())) {
                    $fieldData["entity"] = $metadata->getAssociationTargetClass($property->getName());
                    return "association";
                }

                $fieldMapping = $metadata->getFieldMapping($property->getName());
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
            "setter" => $setterName
        ]);

        return $fieldData;
    }

    private function getFieldColumn($fieldColumn, $fieldName, $rowData)
    {
        $column = array_search(trim($fieldColumn), $rowData);
        return $column ? [$column => $fieldName] : null;
    }

    public function generateSpreadsheet($data, $template)
    {
        $fileFolder = __DIR__ . '/../../public/';
        $templateFile = $fileFolder . "templates/" . $template. '.xlsx';

        // Load the template spreadsheet
        $spreadsheet = IOFactory::load($templateFile);

        // Get the active sheet
        $sheet = $spreadsheet->getActiveSheet();

        // Set the data from your array to the spreadsheet
        $sheet->fromArray($data, null, "A". (self::SHEET_HEAD+1));

        // Save the spreadsheet to a file
        $filename = md5(uniqid()) . "-" . 'spreadsheet.xlsx';
        $filePath = $fileFolder. "uploads/" . $filename;

        $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        $writer->save($filePath);

        return $filePath;
    }


    // this was made to keep the spread sheet columns name readable for the clients
    function getEdgeFields($rowData, $entityClass)
    {
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
    function getPosteFields($rowData, $entityClass)
    {
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
                $fieldData = array_merge($fieldData, ["searchBy" => "identifier", "store" => ["department",null,null,"node",null, "longueur", "section","commune"]]);
            // todo [,"marque"] wach marque lifiha dik MET.. nzidha ftableux dyal les appareils yak machi tronçon omachi poste?

            $fieldData && $fields[$column] = $fieldData;
        }
        // dd($fields);
        return $fields;
    }


    function restructureData($data, $columns, $newColumns) {
        $result = [];
        
        foreach ($newColumns as $column) {
            if ($column === null) {
                $result[] = ""; // Add an empty value for null columns
            } elseif (in_array($column, $columns)) {
                $columnIndex = array_search($column, $columns);
                $result[] = $data[$columnIndex];
            }
        }
        
        return $result;
    }
}