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
            $action && $this->em->getRepository(Objective::class)->UpdateAchievement([$action],false, $Visite->getDate());
        }

        $this->em->persist($Visite);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {
        $date = $data->getDate();
        $action = $this->em->getRepository(Goal::class)->getTarget("ANNUAL_VISIT_COUNT",$date);
        $this->em->getRepository(Objective::class)->UpdateAchievement([$action], true, $data->getDate());

        $this->em->remove($data);
        $this->em->flush();
    }

}