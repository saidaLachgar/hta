<?php

namespace App\DataPersister;

use App\Entity\Anomaly;
use App\Entity\Goal;
use App\Entity\Objective;
use App\Entity\Visite;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\Query\Expr;
class AnomalyDataPersister implements ContextAwareDataPersisterInterface
{
    private $em;
    private $security;

    public function __construct ( EntityManagerInterface $entityManager, Security $security)
    {
        $this->em = $entityManager;
        $this->security = $security;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($data, array $context = []): bool
    {
        return $data instanceof Anomaly;
    }

    /**
     * @param Anomaly $anomaly
     */
    public function persist($anomaly, array $context = [])
    {
        $anomaly->setCreatedBy($this->security->getUser());

        // if this anomaly is associated to a visit 
        // and is done and old value not done
        // update the year achievements (add/remove 1 to the ANOMALY_VISIT_COUNT of the same date)
        if (
            $this->has_associated_visit($anomaly) && 
            (
                ($anomaly->isStatus() && !$this->was_done($context)) // is done and old value not done
                ||( !$anomaly->isStatus() && $this->was_done($context)) // is not done and old value is done
            )
        ) {
            $action = $this->em->getRepository(Goal::class)->findOneBy(['calc' => 'ANOMALY_VISIT_COUNT']);
            $action && $this->em->getRepository(Objective::class)
                ->UpdateAchievement([$action], !$anomaly->isStatus(), $anomaly->getCreatedAt() ? $anomaly->getCreatedAt() : new \DateTime());
        }

        $this->em->persist($anomaly);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($anomaly, array $context = [])
    {
        // if this anomaly is associated to a visit and was done update the year achievements
        if (
            $this->has_associated_visit($anomaly) && 
            $anomaly->isStatus()) 
        {
            $action = $this->em->getRepository(Goal::class)->findOneBy(['calc' => 'ANOMALY_VISIT_COUNT']);
            $this->em->getRepository(Objective::class)->UpdateAchievement([$action], true, $anomaly->getCreatedAt());
        }
        $this->em->remove($anomaly);
        $this->em->flush();
    }

    function has_associated_visit($anomaly) {
        return $this->em->getRepository(Visite::class)->checkAnomalyAssociatedVisit($anomaly);
    }
    function was_done($context) {
        return array_key_exists('previous_data', $context) ? $context['previous_data']->isStatus() : false;
    }
}