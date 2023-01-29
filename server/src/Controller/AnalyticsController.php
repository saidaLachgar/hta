<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Travaux;

class AnalyticsController extends AbstractController
{
  
  private $em;

  public function __construct( EntityManagerInterface $em) 
  {
    $this->em = $em;
  }

    /**
     * @Route("/api/analytics/dms-total/{period}", requirements={"period"="year|month"}, name="getDMS", options={"expose"=true})
     */
    public function getDMS(Request $request, $period)
    {
        /** @var \App\Repository\TravauxRepository $TravauxRepo */
        $TravauxRepo = $this->em->getRepository(Travaux::class);

        $data = $TravauxRepo->getDMS(strtoupper($period));

        return new JsonResponse($data);
    }
}
