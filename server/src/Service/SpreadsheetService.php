<?php

namespace App\Service;

use Doctrine\ORM\EntityManagerInterface;
use PhpOffice\PhpSpreadsheet\IOFactory;
use PhpOffice\PhpSpreadsheet\Spreadsheet;

class SpreadsheetService
{
    private $em;

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function import(
        bool $addNonExAssoc,
        string $filePath,
        string $entityClass,
        string $uniqueColumn = null
    ) {
        $spreadsheet = IOFactory::load($filePath); // Here we are able to read from the excel file 
        $workSheet = $spreadsheet->getActiveSheet();
        $data = $workSheet->toArray(null, true, true, true);
        // $workSheet->removeRow(1); // skip the first row 

        $getterName = 'get' . basename(str_replace('\\', '/', $entityClass)) . "Fields";
        $Fields = $this->$getterName($workSheet, $entityClass);
        
        $canceledEntities = [];
        $missingDataObjs = [];

        // Map the data to the entity properties
        // $repository = $this->em->getRepository($entityClass);
        // dump($metadata->getFieldNames());
        // dump($getterName);
        // exit;

        foreach ($data as $key => $row) {
            $entity = new $entityClass();
            if (
                $key<=2 || // skip 1st two rows (columns name and the title)
                // Skip the empty row
                empty(array_filter($row, function ($value) {return !empty($value);}))
            ) continue; 

            foreach ($Fields as $column => $field) {
                $value = $row[$column];
                if(is_null($value)) continue;
                
                $fieldName = $field["name"];
                $setterName = $field["setter"];
                $fieldType = $field["type"];
                
                // dump($field);
                // dd( $field->getValue());
                
                // todo check if a nested $fieldName e.g NSerie is gonna be added or i will need to have it in this format n_serie
                if ($fieldType === "association") {
                    // Handle related entity
                    $relatedEntityName = $field["entity"];
                    $relatedRepository = $this->em->getRepository($relatedEntityName);
                    $searchBy = $field["searchBy"] ? $field["searchBy"] : 'id';
                    $obj = $relatedRepository->findOneBy([
                        $searchBy => trim($value)
                    ]);

                    if ($obj) {
                        $entity->$setterName($obj);
                    } elseif($addNonExAssoc) {
                        $missingDataObjs[] = $row; // store unfounded Association eg: nodes (app. cp)
                        // add new nested association e.g : node with no name
                        $nestedEntityClass = 'App\Entity\\' . ucfirst($fieldName);
                        $nestedEntity = new $nestedEntityClass();
                        
                        if($searchBy != "id"){
                            $nestedSetterName = 'set' . ucfirst($searchBy);
                            $nestedEntity->$nestedSetterName($value);
                        }
                        
                        // This field was added to prevent having to interact with 
                        // the object (like using the Adjacency List) until it has the missing data
                        if (method_exists($nestedEntity, "setTemp")) 
                            $nestedEntity->setTemp(true);


                        $this->em->persist($nestedEntity);
                        $this->em->flush();
                        $entity->$setterName($nestedEntity);
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
            // dd($fieldType);
            // exit;

            $this->em->persist($entity);
        }

        // todo : make testes before presist the data


        $unitOfWork = $this->em->getUnitOfWork();
        $persistedEntities = $unitOfWork->getScheduledEntityInsertions();
        // Dump the persisted entities for debugging
        dump($persistedEntities);
        // Dump missingDataObjs
        // dump($missingDataObjs);
        exit;

        $this->em->flush();

        // todo : create a excel file base on the fields key in $associationFields
        // create an array of non excepted rows e.g a node(app.) that has the same identifier ($uniqueColumn)

        return $this->json('users registered', 200);
    }

    public function export(string $entityClass, array $fields): void
    {
        // $entityManager = $this->getDoctrine()->getManager();
        // $repository = $entityManager->getRepository($entityClass);
        // $metadata = $entityManager->getClassMetadata($entityClass);

        // $data = [];

        // foreach ($repository->findAll() as $entity) {
        //     $rowData = [];

        //     foreach ($fields as $fieldName) {
        //         $getterName = 'get' . ucfirst($fieldName);

        //         if (method_exists($entity, $getterName)) {
        //             $rowData[] = $entity->$getterName();
        //         }
        //     }

        //     $data[] = $rowData;
        // }

        // $spreadsheet = new Spreadsheet();
        // $workSheet = $spreadsheet->getActiveSheet();

        // foreach ($data as $rowIndex => $rowData) {
        //     foreach ($rowData as $columnIndex => $value) {
        //         $workSheet->setCellValueByColumnAndRow($columnIndex + 1, $rowIndex + 1, $value);
        //     }
        // }

        // $writer = IOFactory::createWriter($spreadsheet, 'Xlsx');
        // $writer->save($filePath);
    }

    // this was made to keep the spread sheet columns name readable for the clients
    function getPosteFields($workSheet, $entityClass)
    {
        $firstRowCells = $workSheet->getRowIterator(2)->current()->getCellIterator();
        $posteFields = [];
        foreach ($firstRowCells as $column => $cell) {
            $cellValue = trim($cell->getValue());
            // dump($cellValue);
            if ($cellValue === 'N° serie') {
                $cell->setValue("NSerie");
            } elseif ($cellValue === 'P KVA') {
                $cell->setValue("PKVA");
            } elseif ($cellValue === 'nbr client BT') {
                $cell->setValue("NbClients");
            } elseif ($cellValue === 'DATE MST') {
                $cell->setValue("DateMst");
            } elseif ($cellValue === 'Départ') {
                $cell->setValue("Department");
            } elseif ($cellValue === 'CR') {
                $cell->setValue("Commune");
            } elseif ($cellValue === 'LCLCLC') {
                $cell->setValue("node");
            } elseif ($cellValue === 'Sect MM2') {
                $cell->setValue("section");
            } elseif ($cellValue === 'Long aérien') {
                $cell->setValue("longueur");
            }
            // dump($cell->getValue());
            $fieldData = $this->getFieldData($cell->getValue(), $entityClass);
            
            $cellValue === 'LCLCLC' && 
                $fieldData = array_merge($fieldData, ["searchBy" =>"identifier", "fields" => ["commune","department","section", "longueur"]]) ;
            // todo [,"marque"] wach marque lifiha dik MET.. nzidha ftableux dyal les appareils yak machi tronçon omachi poste?

            $fieldData && $posteFields[$column] = $fieldData;
        }

        // dd($posteFields);
        return $posteFields;
    }


    private function getFieldData($fieldName, $entityClass){
        $fieldName = preg_replace('/\s+/', '', $fieldName);
        $setterName = 'set' . ucfirst($fieldName);
        $entity = new $entityClass();
        if (!method_exists($entity, $setterName)) return false;
        $metadata = $this->em->getClassMetadata($entityClass);
        $reflectionClass = $metadata->getReflectionClass();
        $properties = $reflectionClass->getProperties();

        $fieldType = array_reduce($properties, function($carry, $property) use ($fieldName, $metadata) {
            $propertyName = strtolower(str_replace('_', '', $property->getName()));
            if ($propertyName === strtolower($fieldName)) {
                
                if($metadata->hasAssociation($fieldName)) return "association";

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
        $fieldData =[
            "name" => $fieldName,
            "type" => $fieldType,
            "setter" => $setterName
        ];

        $fieldData["type"] === "association" && 
            $fieldData["entity"] = $metadata->getAssociationTargetClass($fieldName);

        return $fieldData;
    }
}