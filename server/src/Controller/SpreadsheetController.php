<?php

namespace App\Controller;

use App\Service\SpreadsheetService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;

class SpreadsheetController extends AbstractController
{
    /**
     * @Route("/api/upload_spreadsheet", name="upload_spreadsheet")
     */
    public function upload_spreadsheet(Request $request, SpreadsheetService $SpreadsheetService)
    {
        $file = $request->files->get('spreadSheet'); // get the file from the sent request
        $className = $request->request->get('className');
        $addNonExAssoc = $request->request->get('addNonExAssoc')?:null;
        $uniqueColumns = $request->request->get('uniqueColumns')?:null;
        

        $fileFolder = __DIR__ . '/../../public/uploads/'; //choose the folder in which the uploaded file will be stored
        $filePathName = md5(uniqid()). "-" . $file->getClientOriginalName(); // apply md5 function to generate an unique identifier for the file and concat it with the file extension  
        try {
            $file->move($fileFolder, $filePathName);
        } catch (FileException $e) {
            dd($e);
        }

        return $SpreadsheetService->import(
            $addNonExAssoc,
            $fileFolder . $filePathName,
            $className,
            $uniqueColumns
        );
    }
    /**
     * @Route("/export-excel", name="export")
     */
    public function export(SpreadsheetService $SpreadsheetService)
    {
        // $data = $this->getDoctrine()->getRepository(Department::class)->findAll();

        // // Transform the data as needed for exporting to Excel
        // $excelData = [];

        // foreach ($data as $department) {
        //     $excelData[] = [
        //         $department->getId(),
        //         $department->getName(),
        //         $department->getManager(),
        //         // ...
        //     ];
        // }

        // $departmentExcelService->writeData($excelData);

        // // Return a response to download the Excel file
        // $response = new Response();
        // $response->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
        // $response->headers->set('Content-Disposition', 'attachment;filename=departments.xlsx');
        // $response->setContent(file_get_contents($departmentExcelService->getExcelFile()));

        // return $response;
    }
}