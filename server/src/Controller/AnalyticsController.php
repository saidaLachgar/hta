<?php

namespace App\Controller;

use App\Entity\Team;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Mission;

class AnalyticsController extends AbstractController
{

  private $em;

  public function __construct(EntityManagerInterface $em)
  {
    $this->em = $em;
  }

  /**
   * @Route("/api/analytics/dms-total", name="getTotalDMS", options={"expose"=true})
   */
  public function getTotalDMS(Request $request)
  {
    /** @var \App\Repository\MissionRepository $MissionRepo */
    $MissionRepo = $this->em->getRepository(Mission::class);

    $data = $MissionRepo->getTotalDMS();

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/interruptions-par-type", name="getInterruptionsParType", options={"expose"=true})
   */
  public function getInterruptionsParType(Request $request)
  {
    /** @var \App\Repository\MissionRepository $MissionRepo */
    $MissionRepo = $this->em->getRepository(Mission::class);

    $data = $MissionRepo->getInterruptionsParType();

    return new JsonResponse($data);
  }
  
  /**
   * @Route("/api/analytics/teams-data", name="getTeamsData", options={"expose"=true})
   */
  public function getTeamsData(Request $request)
  {
    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $data = $TeamRepo->getTeamsData();

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/by-team", name="getAnalyticsByTeam", options={"expose"=true})
   */
  public function getAnalyticsByTeam(Request $request)
  {
    $q = $request->request;
    $dateStart =  $q->get('date-start');
    $dateEnd =  $q->get('date-end');
    $team =  $q->get('team');
    $stats =  $q->get('stats');

    // * getTotalActivity -> Total des interruptions -  Total des Vistes -  Total des anomalies
    // * CausesAndType -> Causes des interruptions + Interruptions par type
    // * getInterruptionsPerformance -> DMS, IFS, END
    // * getAnomalyCorrection -> Taux de correction des anomalies
    // * getKMVisitedPerCommune -> Nombre de kilomètres visités par commune
    // * getClientCutsByCommune -> Le nombre de clients coupés par communauté

    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $functionName = "get" . $stats;
    if (method_exists($TeamRepo, $functionName)) {
      $data = $TeamRepo->$functionName($dateStart, $dateEnd, $team);
    } else {
      $data = null;
    }

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/teams-anomalies", name="getTeamsAnomalies", options={"expose"=true})
   */
  public function getTeamsAnomalies(Request $request)
  {
    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $data = $TeamRepo->getTeamsAnomalies();

    return new JsonResponse($data);
  }
  
  /**
   * @Route("/api/analytics/teams-monthly-data", name="getTeamsMonthlyData", options={"expose"=true})
   */
  public function getTeamsMonthlyData(Request $request)
  {
    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $data = $TeamRepo->getTeamsMonthlyData();

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/teams-dms/{timeframe}", name="getTeamsDMS", options={"expose"=true})
   */
  public function getTeamsDMS($timeframe = "year")
  {
    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $data = $TeamRepo->getTeamsDMS($timeframe);

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/mission-stats/{month}", name="getMissionsStats", options={"expose"=true})
   */
  public function getMissionsStats($month)
  {
    // causes - type - Total - Average duration - last Average duration
    /** @var \App\Repository\MissionRepository $MissionRepo */
    $MissionRepo = $this->em->getRepository(Mission::class);

    $data = $MissionRepo->getMissionsStats($month);

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/anomalies-stats", name="getAnomaliesStats", options={"expose"=true})
   */
  public function getAnomaliesStats()
  {

    // Anomalies (mois en cours) + la période précédente
    /** @var \App\Repository\AnomalyRepository $AnomalyRepo */
    $AnomalyRepo = $this->em->getRepository(Anomaly::class);

    $data = $AnomalyRepo->getAnomaliesStats();

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/visits-stats", name="getVisitsStats", options={"expose"=true})
   */
  public function getVisitsStats()
  {
    // Vistes par communes 
    // Distance parcourue (Année courante + Mois en cours) + objectif annuel (km) 
    // Total des visites (par objectif annuel) (78%)

    /** @var \App\Repository\VisiteRepository $VisiteRepo */
    $VisiteRepo = $this->em->getRepository(Visite::class);

    $data = $VisiteRepo->getVisitsStats();

    return new JsonResponse($data);
  }
}