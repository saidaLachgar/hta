<?php

namespace App\DataPersister;

use App\Cache\AdjacencyListCache;
use App\Entity\Edge;
use Doctrine\ORM\EntityManagerInterface;
use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;

class EdgeDataPersister implements ContextAwareDataPersisterInterface
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
        return $data instanceof Edge;
    }

    /**
     * @param Edge $data
     */
    public function persist($Edge, array $context = [])
    {
        // Update the adjacency list in the cache with the new department entity data
        $this->adjacencyListCache->getAdjacencyList($Edge->getDepartment()->getId(), true);

        // update nodes commune
        $prevEdge = $context['previous_data'] ?? null;
        if (
            !$prevEdge || // if Edge is new
            ($prevEdge && $prevEdge->getCommune() !== $Edge->getCommune())// or not new but Commune updated
        ) {
            $Edge->getNodeA()->setCommune($Edge->getCommune());
            $Edge->getNodeB()->setCommune($Edge->getCommune());
        }

        $this->em->persist($Edge);
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