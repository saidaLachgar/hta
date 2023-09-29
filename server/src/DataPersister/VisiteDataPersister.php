<?php

namespace App\DataPersister;

use ApiPlatform\Core\DataPersister\DataPersisterInterface;
use App\Entity\Edge;
use App\Entity\Visite;
use App\Entity\Objective;
use App\Entity\Goal;
use Doctrine\ORM\EntityManagerInterface;

class VisiteDataPersister implements DataPersisterInterface
{
    private $em;
    public function __construct(EntityManagerInterface $entityManager)
    {
        $this->em = $entityManager;
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
        // check if there is a no previous state of the entity
        if (!$prevVisite) {
            // Visite au sol (Km) -> all visites of this year
            $action = $this->em->getRepository(Goal::class)->getTarget("ANNUAL_VISIT_COUNT");
            $action && $this->em->getRepository(Objective::class)->UpdateAchievement([$action],false, $Visite->getDate(), $Visite->getNbSupport() / 100);
        } else {
            // Compare the current and new states of the entity
            $MajorChanges =  $prevVisite->getNodeA() !== $Visite->getNodeA() || $this->compareCollections($prevVisite->getNodeB(), $Visite->getNodeB());
        }

        // set length when it is empty or there is major changes (vertices update)
        if (is_null($Visite->getEdgeSetLength()) or $MajorChanges) {
            $edgeRepo = $this->em->getRepository(Edge::class);

            // set length of a set of edges between two given vertices (nodes)
            $length = $edgeRepo->getLengthBetweenNodes(
                $Visite->getNodeA()->getDepartment()->getId(),
                $Visite->getNodeA()->getId(),
                implode(',', $Visite->getNodeB()->map(fn($node) => $node->getId())->toArray())
            );
            $length && $Visite->setEdgeSetLength((float) $length);
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
        $action = $this->em->getRepository(Goal::class)->getTarget("ANNUAL_VISIT_COUNT",$date);
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