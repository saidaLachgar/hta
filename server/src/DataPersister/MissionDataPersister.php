<?php
// src/DataPersister/UserDataPersister.php

namespace App\DataPersister;

// use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
// use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
// use ApiPlatform\Core\DataProvider\ItemDataProviderInterface;
use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use Doctrine\Common\Collections\ArrayCollection;
use App\Entity\Mission;
use App\Repository\PosteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use App\Entity\Poste;
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
        $NodeB = $Mission->getNodeB();
        $NodeA = $Mission->getNodeA();

        // add one day if date start smaller than date end
        if (!empty($DateEnd) && !empty($DateStart) && $this->dateToTime($DateEnd) < $this->dateToTime($DateStart)) {
            $DateEnd->modify('+1 day');
            $Mission->setDateEnd($DateEnd);
        }

        // CALC DMS IFS nbClients ---
        // -> update only dms duration with the old CC && CI

        // Get the previous state of the entity
        $previousData = $context['previous_data'] ?? null;
        if ($previousData) {
            // Compare the current and new states of the entity
            $changes = $this->HasChanges($previousData, $Mission);
        }

        if (is_null($Mission->getDMS()) or ($changes && $changes["major"])) { //  major change ||  Nodes / dates changed

            /** @var PosteRepository $PostRepo */
            $PostRepo = $this->em->getRepository(Poste::class);
            // Get Depar id
            $DeparId = $NodeA->getDepartment()->getId();
            // Get clients connectés
            $CC = $PostRepo->ClientTotalInDepart($DeparId);
            // Get Clients interrompus 
            if (is_null($NodeA) and $NodeB->isEmpty()) {
                // source IS NULL & ps IS NULL
                $CI = $CC;
            } else {

                // get IDs of selected destinations
                $Destinations = $NodeB->isEmpty() ? [] : $NodeB->map(function ($obj) {
                    return $obj->getId();
                })->getValues();

                
                $nodesInRange = $this->GraphSearch->bfsNodesInRange($DeparId, $NodeA->getId(), $Destinations);
                $CI = $PostRepo->ClientTotalByNodes($nodesInRange);
            }

            // set DMS value depending if date end exists or not
            if (!is_null($DateEnd)) {
                $Mission->setDMS($this->calcDMS($DateEnd, $DateStart, $CI, $CC));
            } else {
                $Mission->setDMS(null);
            }

            $Mission->setNbClients($CI . "/" . $CC);
            $Mission->setIFS(round(($CI / $CC), 3));

        } elseif ( $changes && $changes["time"] ) { // duration changed
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
        }

        $this->em->persist($Mission);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {
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

    private function compareCollections(ArrayCollection $collection1, ArrayCollection $collection2): bool
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