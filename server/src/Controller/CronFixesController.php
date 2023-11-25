<?php

namespace App\Controller;

use App\Entity\Commune;
use App\Entity\MissionCommune;
use App\Entity\Poste;
use App\Entity\Mission;
use App\Entity\Visite;
use App\Service\GraphSearch;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Doctrine\ORM\EntityManagerInterface;

class CronFixesController extends AbstractController
{

  private $em;
  private $GraphSearch;

  public function __construct(EntityManagerInterface $em, GraphSearch $GraphSearch)
  {
    $this->em = $em;
    $this->GraphSearch = $GraphSearch;
  }

  /**
   * @Route("/api/fix-journey-data", name="FixJourneyData", options={"expose"=true})
   */
  public function getFixJourneyData()
  {
    // this code was added cuz the concept of storing related Communes and postes wasn't before, 
    // so it's lik a fix for data that hasn't these values

    $MissionRepo = $this->em->getRepository(Mission::class);
    $CommuneRepo = $this->em->getRepository(Commune::class);
    $PosteRepo = $this->em->getRepository(Poste::class);
    $VisiteRepo = $this->em->getRepository(Visite::class);


    // > Missions Fix
    $Missions = $MissionRepo->findAll();
    foreach ($Missions as $Mission) {
      $NodeB = $Mission->getNodeB();
      $NodeA = $Mission->getNodeA();
      $Depar = $NodeA->getDepartment();

      if ((is_null($NodeA) and $NodeB->isEmpty()) || is_null($Depar)) {
        continue;
      }

      // get related nodes
      $Destinations = $NodeB->isEmpty() ? [] : $NodeB->map(fn($obj) => (string) $obj->getId())->getValues();
      $nodesInRange = $this->GraphSearch->bfsNodesInRange($Depar->getId(), $NodeA->getId(), $Destinations);

      // add related communes
      $Communes = $CommuneRepo->getCommunesByRange($nodesInRange);
      $Mission->getMissionCommunes()->clear();
      foreach ($Communes as $Commune) {
        $clientCount = $PosteRepo->ClientTotalByCommune($Commune->getId());
        $obj = new MissionCommune();
        $obj->setCommune($Commune);
        $obj->setClientCount($clientCount);
        $Mission->addMissionCommune($obj);
      }

      // if($Depar->getTeam()->getTitre()=="DEMO équipe") {
      //   dump($Communes);
      // }

      // add all related postes
      $Postes = $PosteRepo->getPostesByRange($nodesInRange);
      $Mission->getPostes()->clear();
      foreach ($Postes as $Poste) {
        $Mission->addPoste($Poste);
      }


      // set prev value of b nodes (used becouse previous_data doesn't work on collection)
      $Mission->setPrevNodes($Destinations);

      $this->em->persist($Mission);
    }
    
    // > Missions Fix
    $Visites = $VisiteRepo->findAll();
    foreach ($Visites as $Visite) {
      $NodeB = $Visite->getNodeB();
      $NodeA = $Visite->getNodeA();
      $Depar = $NodeA->getDepartment();

      if ((is_null($NodeA) and $NodeB->isEmpty()) || is_null($Depar)) {
        continue;
      }
      // get related nodes
      $Destinations = $NodeB->isEmpty() ? [] : $NodeB->map(fn($obj) => (string) $obj->getId())->getValues();
      $nodesInRange = $this->GraphSearch->bfsNodesInRange($Depar->getId(), $NodeA->getId(), $Destinations);

      // add related communes
      $Communes = $CommuneRepo->getCommunesByRange($nodesInRange);
      $Visite->getCommunes()->clear();
      foreach ($Communes as $Commune) {
        $Visite->addCommune($Commune);
      }

      $this->em->persist($Visite);
    }
    // exit;
    $this->em->flush();

    return new JsonResponse(["status" => "done"]);
  }
}