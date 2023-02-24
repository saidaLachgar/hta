<?php

namespace App\DataPersister;

use App\Entity\Anomaly;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use Symfony\Component\Security\Core\Security;

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
     * @param Anomaly $data
     */
    public function persist($data, array $context = [])
    {
        $data->setCreatedBy($this->security->getUser());
        $this->em->persist($data);
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
}