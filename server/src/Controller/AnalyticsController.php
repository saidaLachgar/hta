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

  public function __construct(EntityManagerInterface $em)
  {
    $this->em = $em;
  }

  /**
   * @Route("/api/test-route", name="testes", options={"expose"=true})
   */
  public function testes(Request $request)
  {
    /** @var \App\Repository\TravauxRepository $TravauxRepo */
    $TravauxRepo = $this->em->getRepository(Travaux::class);

    $data = $TravauxRepo->test();

    return new JsonResponse($data);
  }
  /**
   * @Route("/api/analytics/dms-total", name="getTotalDMS", options={"expose"=true})
   */
  public function getTotalDMS(Request $request)
  {
    /** @var \App\Repository\TravauxRepository $TravauxRepo */
    $TravauxRepo = $this->em->getRepository(Travaux::class);

    $data = $TravauxRepo->getTotalDMS();

    return new JsonResponse($data);
  }
  /**
   * @Route("/api/analytics/interruptions-par-type", name="getInterruptionsParType", options={"expose"=true})
   */
  public function getInterruptionsParType(Request $request)
  {
    /** @var \App\Repository\TravauxRepository $TravauxRepo */
    $TravauxRepo = $this->em->getRepository(Travaux::class);

    $data = $TravauxRepo->getInterruptionsParType();

    return new JsonResponse($data);
  }
}