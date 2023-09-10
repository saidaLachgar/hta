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
            $action && $this->em->getRepository(Objective::class)->UpdateAchievement([$action],false, $Visite->getDate(), $Visite->getNbSupport() * 100);
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

}