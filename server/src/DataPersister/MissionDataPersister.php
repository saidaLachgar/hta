<?php
// src/DataPersister/UserDataPersister.php

namespace App\DataPersister;

// use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
// use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
// use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Department;
use Doctrine\Common\Collections\ArrayCollection;
use App\Entity\Mission;
use App\Repository\PosteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Proxies\__CG__\App\Entity\Dps;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Poste;
use App\Entity\Objective;
use App\Service\GraphSearch;

class MissionDataPersister implements DataPersisterInterface
{
    private $em;
    private $serializer;
    private $GraphSearch;

    public function __construct(EntityManagerInterface $entityManager, SerializerInterface $serializer, GraphSearch $GraphSearch)
    {
        $this->em = $entityManager;
        $this->serializer = $serializer;
        $this->GraphSearch = $GraphSearch;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($data): bool
    {
        return $data instanceof Mission;
    }

    /**
     * @param Mission $Mission
     */
    public function persist($Mission, array $context = [])
    {

        $DateStart = $Mission->getDateStart();
        $DateEnd = $Mission->getDateEnd();
       

        // add one day if date start smaller than date end
        if (!empty($DateEnd) && !empty($DateStart) && $this->dateToTime($DateEnd) < $this->dateToTime($DateStart)) {
            $DateEnd->modify('+1 day');
            $Mission->setDateEnd($DateEnd);
        }

        // CALC DMS IFS nbClients ---

        // Get the previous state of the entity
        $previousData = $context['previous_data'] ?? null;
        if ($previousData) {
            // Compare the current and new states of the entity
            $changes = $this->HasChanges($previousData, $Mission);
        }
        if(is_null($Mission->getDMS()) or ($changes && ($changes["major"] or $changes["time"]))) {
            $NodeB = $Mission->getNodeB();
            $NodeA = $Mission->getNodeA();
            $Depar = $NodeA->getDepartment();
            $nodesInRange = $this->nodesInRange($NodeB, $NodeA, $Depar);
            // dd($nodesInRange);
        }

        if (is_null($Mission->getDMS()) or ($changes && $changes["major"])) { // dms is null or major change ->  Nodes

            /** @var PosteRepository $PostRepo */
            $PostRepo = $this->em->getRepository(Poste::class);
            $DpRepo = $this->em->getRepository(Dps::class);

            // Get clients connectés
            $CC = $DpRepo->ClientTotalInDp($Depar->getTeam()->getDps()->getId());
            // Get Clients interrompus : source IS NULL & ps IS NULL CI is CC else CI is ClientTotalByNodes
            $CI = $nodesInRange ? ($PostRepo->ClientTotalByNodes($nodesInRange) ?: 0) : $CC;

            // set DMS/END value depending if date end exists or not
            if (!is_null($DateEnd)) {
                $Mission->setDMS($this->calcDMS($DateEnd, $DateStart, $CI, $CC));
                // set END value depending if nodes in a range were found
                if ($nodesInRange) {
                    $Mission->setEND($this->calcEND($DateEnd, $DateStart, $nodesInRange, $Depar->getId()));
                }
            } else {
                $Mission->setDMS(null);
                $Mission->setEND(null);
            }

            $Mission->setNbClients($CI . "/" . $CC);
            $Mission->setIFS(round(($CI / $CC), 3));

        } elseif ($changes && $changes["time"]) { // minor change -> duration changed
            // dd("timeChange");
            // calc DMS with the old clients count
            $NbClients = preg_split("#/#", $Mission->getNbClients());
            $Mission->setDMS(
                $this->calcDMS(
                    $DateEnd,
                    $DateStart,
                    $NbClients[0],
                    $NbClients[1]
                )
            );
            // set END value depending if nodes in a range were found
            if ($nodesInRange) {
                $Mission->setEND($this->calcEND(
                    $DateEnd, 
                    $DateStart, 
                    $nodesInRange,
                    $Depar->getId()
                ));
            }
        }

        // update objectives 
        $newActions = $Mission->getActions() ?: [];
        $removedActions = [];
        if ($previousData) {
            $oldActions = $previousData->getActions();
            // Get the gloas that were removed from the old mission
            $removedActions = array_diff($oldActions, $newActions);
            // Get the gloas that were added to the new mission
            $newActions = array_diff($newActions, $oldActions);
        }

        $objectivesRepo = $this->em->getRepository(Objective::class);
        count($removedActions) && $objectivesRepo->UpdateAchievement($removedActions, true, $Mission->getDateStart());
        count($newActions) && $objectivesRepo->UpdateAchievement($newActions, false, $Mission->getDateStart());


        $this->em->persist($Mission);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {

        // update objectives 
        $this->em->getRepository(Objective::class)->UpdateAchievement($data->getActions(), true, $data->getDateStart());

        $this->em->remove($data);
        $this->em->flush();
    }
    public function calcDMS($dateEnd, $dateStart, $CI, $CC)
    {
        $differenceInSeconds =
            $this->dateToTime($dateEnd) -
            $this->dateToTime($dateStart);

        $DMS = $differenceInSeconds * $CI / ($CC * 3600);
        return round($DMS, 3);
    }

    public function calcEND($DateEnd, $DateStart, $nodesInRange, $Depar)
    {
        $PosteRepo = $this->em->getRepository(Poste::class);
        $differenceInSeconds =
            $this->dateToTime($DateEnd) -
            $this->dateToTime($DateStart);

        $END = $PosteRepo->getPostesPuissance($nodesInRange, $Depar) *
            ($differenceInSeconds / 3600) * 0.9;

        return round($END, 4);

    }

    function nodesInRange($NodeB, $NodeA, $Depar){
        if (is_null($NodeA) and $NodeB->isEmpty()) {
            return false;
        }
        // get IDs of selected destinations
        $Destinations = $NodeB->isEmpty() ? [] : $NodeB->map(function ($obj) {
            return $obj->getId();
        })->getValues();


        return $this->GraphSearch->bfsNodesInRange($Depar->getId(), $NodeA->getId(), $Destinations);

    }
    
    private function dateToTime($date)
    {
        return strtotime($date->format('Y-m-d H:i:s'));
    }

    public function HasChanges(Mission $old, Mission $new): array
    {
        if (
            $old->getNodeA() !== $new->getNodeA() ||
            $this->compareCollections($old->getNodeB(), $new->getNodeB())
        ) {
            $Major = true;
        }
        if (
            $old->getDateStart() !== $new->getDateStart() ||
            $old->getDateEnd() !== $new->getDateEnd()
        ) {
            $Time = true;
        }
        return [
            "major" => $Major ?? false,
            "time" => $Time ?? false,
        ];
    }

    private function compareCollections($collection1, $collection2): bool
    {
        if ($collection1->count() !== $collection2->count()) {
            return true;
        }

        $ids1 = $collection1->map(fn($entity) => $entity->getId())->getValues();
        $ids2 = $collection2->map(fn($entity) => $entity->getId())->getValues();
        if (count(array_diff($ids1, $ids2)) === 0 && count(array_diff($ids2, $ids1)) === 0) {
            // The two ArrayCollection objects have the same set of IDs.
            return false;
        }

        return true;
    }

}