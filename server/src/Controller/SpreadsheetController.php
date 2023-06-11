<?php

namespace App\Controller;

use App\Service\SpreadsheetService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\Exception\FileException;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use PhpOffice\PhpSpreadsheet\Writer\Xlsx;

class SpreadsheetController extends AbstractController
{
    /**
     * @Route("/api/import_spreadsheet", name="import_spreadsheet")
     */
    public function import_spreadsheet(Request $request, SpreadsheetService $SpreadsheetService)
    {
        $file = $request->files->get('spreadSheet'); // get the file from the sent request
        $className = $request->request->get('className');
        $addNonExAssoc = filter_var($request->request->get('addNonExAssoc'), FILTER_VALIDATE_BOOLEAN)?:false;
        $uniqueColumns = $request->request->get('uniqueColumns')?:null;
        $updateIfExist = filter_var($request->request->get('updateIfExist'), FILTER_VALIDATE_BOOLEAN)?:false;
        // dd($updateIfExist);
        

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
            $uniqueColumns,
            $updateIfExist
        );
    }


    /**
     * @Route("/api/export_spreadsheet", name="export_spreadsheet", methods={"POST"})
     */
    public function export_spreadsheet(Request $request, SpreadsheetService $SpreadsheetService): Response
    {
        $params = json_decode($request->getContent(), true);
        $writer = new Xlsx($SpreadsheetService->export($params["className"], $params["filter"]));

        // Save the spreadsheet to a temporary file
        $tempFilePath = tempnam(sys_get_temp_dir(), 'spread_sheet');
        $writer->save($tempFilePath);

        // Create the Symfony response and set the appropriate headers
        $response = new Response(file_get_contents($tempFilePath));
        $dispositionHeader = $response->headers->makeDisposition(
            ResponseHeaderBag::DISPOSITION_ATTACHMENT,
            'spread_sheet.xlsx'
        );
        $response->headers->set('Content-Disposition', $dispositionHeader);
        $response->headers->set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

        // Remove the temporary file
        unlink($tempFilePath);

        return $response;
    }

    
}