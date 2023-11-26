<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Commune;
use App\Entity\Edge;
use App\Entity\Visite;
use App\Entity\Objective;
use App\Entity\Goal;
use App\Service\GraphSearch;
use Doctrine\ORM\EntityManagerInterface;

class VisiteDataPersister implements DataPersisterInterface
{
    private $GraphSearch;
    private $em;
    public function __construct(EntityManagerInterface $entityManager, GraphSearch $GraphSearch)
    {
        $this->em = $entityManager;
        $this->GraphSearch = $GraphSearch;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($data): bool
    {
        return $data instanceof Visite;
    }

    /**
     * @param Visite $Visite
     */
    public function persist($Visite, array $context = [])
    {
        $prevVisite = $context['previous_data'] ?? null;
        $BNodes = $Visite->getNodeB()->isEmpty() ? [] : $Visite->getNodeB()->map(fn($obj) => (string)$obj->getId())->getValues();

        // check if there is a no previous state of the entity
        if (!$prevVisite) {
            // Visite au sol (Km) -> all visites of this year
            $action = $this->em->getRepository(Goal::class)->getTarget("ANNUAL_VISIT_COUNT");
            $action && $this->em->getRepository(Objective::class)->UpdateAchievement([$action], false, $Visite->getDate(), $Visite->getNbSupport() / 100);
        } else {
            // Compare the current and new states of the entity
            $MajorChanges =
                $prevVisite->getNodeA() !== $Visite->getNodeA() ||
                count($BNodes) !== count($Visite->getPrevNodes()) ||
                array_diff($BNodes, $Visite->getPrevNodes());
        }
        
        // set prev nodes, related communes and length when it is empty or there is major changes (nodes update)
        if (is_null($Visite->getEdgeSetLength()) or $MajorChanges) {
            $CommuneRepo = $this->em->getRepository(Commune::class);
            $edgeRepo = $this->em->getRepository(Edge::class);
            $NodeA = $Visite->getNodeA();
            $Depar = $NodeA->getDepartment();

            // set length of a set of edges between two given vertices (nodes)
            $length = $edgeRepo->getLengthBetweenNodes(
                $Depar->getId(),
                $NodeA->getId(),
                implode(',', $Visite->getNodeB()->map(fn($node) => $node->getId())->toArray())
            );
            $length && $Visite->setEdgeSetLength((float) $length);

            
            // get related nodes
            $nodesInRange = $this->GraphSearch->bfsNodesInRange($Depar->getId(), $NodeA->getId(), $BNodes);
            // add related communes
            $Communes = $CommuneRepo->getCommunesByRange($nodesInRange);
            $Visite->getCommunes()->clear();
            foreach ($Communes as $Commune) {
                $Visite->addCommune($Commune);
            }
            // set prev value of b nodes (used becouse previous_data doesn't work on collection)
            $Visite->setPrevNodes($BNodes);
        }

        $this->em->persist($Visite);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($Visite, array $context = [])
    {
        $date = $Visite->getDate();
        $action = $this->em->getRepository(Goal::class)->getTarget("ANNUAL_VISIT_COUNT", $date);
        $this->em->getRepository(Objective::class)->UpdateAchievement([$action], true, $Visite->getDate(), $Visite->getNbSupport() * 100);

        $this->em->remove($Visite);
        $this->em->flush();
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