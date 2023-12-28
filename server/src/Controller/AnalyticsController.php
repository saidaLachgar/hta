<?php

namespace App\Controller;

use App\Entity\Team;
use App\Entity\Visite;
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
   * @Route("/api/analytics/teams-data/{month}", name="getTeamsData", options={"expose"=true})
   */
  public function getTeamsData($month)
  {
    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $data = $TeamRepo->getTeamsData($month);

    return new JsonResponse($data);
  }

  /**
   * @Route("/api/analytics/by-team", name="getAnalyticsByTeam", options={"expose"=true})
   */
  public function getAnalyticsByTeam(Request $request)
  {
    $q = json_decode($request->getContent(), true);
    $dateStart = $q['dateStart'];
    $dateEnd = $q['dateEnd'];
    $team = $q['team'];
    $stats = $q['stats'];

    // * getTotalActivity -> Total des interruptions -  Total des Vistes -  Total des anomalies
    // * getCausesAndType -> Causes des interruptions + Interruptions par type
    // * getInterruptionsPerformance -> DMS, IFS, END
    // * getAnomalyCorrection -> Taux de correction des anomalies
    // * getKMVisitedPerCommune -> Nombre de kilomètres visités par commune
    // * getClientCutsByCommune -> Le nombre de clients coupés par communauté
    // * getPostInterruptionInfo -> Le nombre des fois un post copée + nb des hours

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
    $q = $request->query;
    /** @var \App\Repository\TeamRepository $TeamRepo */
    $TeamRepo = $this->em->getRepository(Team::class);

    $data = $TeamRepo->getTeamsMonthlyData($q->get('property'),$q->get('type'));

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
   * @Route("/api/analytics/visits-stats/{type}", name="getVisitsStats", options={"expose"=true})
   */
  public function getVisitsStats(Request $request, $type)
  {
    $q = $request->query;
    // stats-per-month
    // total-covered-distance
    // team-covered-distance
    // visits-per-communes

    // AKA.
    // Vistes par communes 
    // Distance parcourue (Année courante + Mois en cours) + objectif annuel (km) 
    // Total des visites (par objectif annuel) (78%)

    /** @var \App\Repository\VisiteRepository $VisiteRepo */
    $VisiteRepo = $this->em->getRepository(Visite::class);

    $data = $VisiteRepo->getVisitsStats($type, $q->get('m'));

    return new JsonResponse($data);
  }
}