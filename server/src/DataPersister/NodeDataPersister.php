<?php

namespace App\DataPersister;

use App\Cache\AdjacencyListCache;
use App\Entity\Node;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;

class NodeDataPersister implements ContextAwareDataPersisterInterface
{
    private $adjacencyListCache;
    private $em;

    public function __construct(EntityManagerInterface $entityManager, AdjacencyListCache $adjacencyListCache)
    {
        $this->adjacencyListCache = $adjacencyListCache;
        $this->em = $entityManager;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($data, array $context = []): bool
    {
        // dump($data);dump($context);exit;
        return $data instanceof Node;
    }

    /**
     * @param Node $data
     */
    public function persist($data, array $context = [])
    {
        // Update the adjacency list in the cache with the new department entity data
        $this->adjacencyListCache->getAdjacencyList($data->getDepartment()->getId(), true);
        $this->em->remove($data);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {
        // Update the adjacency list in the cache with the new department entity data
        $this->adjacencyListCache->getAdjacencyList($data->getDepartment()->getId(), true);
        $this->em->remove($data);
        $this->em->flush();
    }
}