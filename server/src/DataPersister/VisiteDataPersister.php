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
            $action = $this->em->getRepository(Goal::class)->findOneBy(['calc' => 'ANNUAL_VISIT_COUNT']);
            $action && $this->em->getRepository(Objective::class)->UpdateAchievement([$action],false, $Visite->getDate());
        }


        // calculate nb Support = longueur edges between two nodes
        if (
            !$prevVisite || // if visite is new
            ($prevVisite && // or not new but nodes updated
            ($prevVisite->getNodeA() !== $Visite->getNodeA() ||
            $this->compareCollections($prevVisite->getNodeB(), $Visite->getNodeB())))

        ) {
            $length = $this->em->getRepository(Edge::class)->getEdgesLengthByRange(
                $Visite->getNodeA()->getDepartment()->getId(),
                $Visite->getNodeA()->getId(),
                implode(',', $Visite->getNodeB()->map(fn($node) => $node->getId())->toArray())
            );
            $length && $Visite->setNbSupport((float)$length);
        }

        $this->em->persist($Visite);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {
        $action = $this->em->getRepository(Goal::class)->findOneBy(['calc' => 'ANNUAL_VISIT_COUNT']);
        $this->em->getRepository(Objective::class)->UpdateAchievement([$action], true, $data->getDate());

        $this->em->remove($data);
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