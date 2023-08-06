<?php
namespace App\Cache;

use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Cache\Adapter\AdapterInterface;
use App\Entity\Node;
use App\Entity\Edge;
use App\Entity\Department;

class AdjacencyListCache
{
    private $cache;
    private $em;

    public function __construct(AdapterInterface $cache, EntityManagerInterface $em)
    {
        $this->cache = $cache;
        $this->em = $em;
    }
    
    // get adjacencyList from cache (if found)
    public function getAdjacencyList($departmentId, $reset = false):array
    {
        $cacheKey = 'adjacency_list_' . $departmentId;
        $adjacencyList = $this->cache->getItem($cacheKey);

        if (!$adjacencyList->isHit() || $reset) {
            // Retrieve the adjacency list from the database and store it in the cache
            $adjacencyListData = $this->retrieveAdjacencyList($departmentId);
            $adjacencyList->set($adjacencyListData);
            // $cacheItem->expiresAfter(3600); // Cache for 1 hour
            $this->cache->save($adjacencyList);
        }

        return $adjacencyList->get();
    }

    // retrieve AdjacencyList
    private function retrieveAdjacencyList($departmentId): array
    {
        $department = $this->em->getReference(Department::class, $departmentId);
        // Retrieve the adjacency list from the database and return it
        $nodes = $this->em->getRepository(Node::class)->findBy(['department' => $department]);
        $edges = $this->em->getRepository(Edge::class)->findBy(['department' => $department]);
        $adjacencyList = [];

        // Create the Graph
        foreach ($nodes as $node) {
            $adjacencyList["data"][$node->getId()] = [];
        }
        // dump(array_map(fn($node) => $node->getId(), $nodes));
        // dd(array_map(fn($edge) => $edge->getNodeA()->getId().$edge->getNodeB()->getId(), $edges));

        foreach ($edges as $edge) {
            $origin = $edge->getNodeA()->getId();
            $destination = $edge->getNodeB()->getId();
            $adjacencyList["data"][$origin][] = $destination;
            $adjacencyList["data"][$destination][] = $origin;
            $adjacencyList["edges"][] = $origin.$destination;
        }
        return $adjacencyList;
    }
}