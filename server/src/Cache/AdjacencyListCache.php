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
    private $adjacencyList = array();

    public function __construct(AdapterInterface $cache, EntityManagerInterface $em)
    {
        $this->cache = $cache;
        $this->em = $em;
    }
    
    // get adjacencyList from cache (if found)
    public function getAdjacencyList($departmentId):array
    {
        // dump("getAdjacencyList ------------------");
        // dump(count($this->adjacencyList));
        if (count($this->adjacencyList) === 0) {
            $cacheItem = $this->cache->getItem('adjacency_list_'.$departmentId);

            if ($cacheItem->isHit()) {
                $this->adjacencyList = $cacheItem->get();
            } else {
                // Retrieve the adjacency list from the database and store it in the cache
                $this->retrieveAdjacencyList($departmentId);
                $cacheItem->set($this->adjacencyList);
                // $cacheItem->expiresAfter(3600); // Cache for 1 hour
                $this->cache->save($cacheItem);
            }
        }

        

        return $this->adjacencyList;
    }

    // retrieve AdjacencyList
    private function retrieveAdjacencyList($departmentId)
    {
        $department = $this->em->getReference(Department::class, $departmentId);
        // Retrieve the adjacency list from the database and return it
        $nodes = $this->em->getRepository(Node::class)->findBy(['department' => $department]);
        $edges = $this->em->getRepository(Edge::class)->findBy(['department' => $department]);

        // dump("nodes");dump(array_map(fn($entity) => $entity->getId(), $nodes));
        // dump("edges");dump(array_map(fn($entity) => $entity->getId(), $edges));

        // Create the Graph
        foreach ($nodes as $node) {
            $this->addNode($node->getId());
        }
        foreach ($edges as $edge) {
            $this->addEdge($edge->getNodeA()->getId(), $edge->getNodeB()->getId());
        }

        $this->adjacencyList["edges"] = array_map(fn($edge) => $edge->getNodeA()->getId().$edge->getNodeB()->getId(), $edges);
    }

    // Add node
    function addNode($node)
    {
        $this->adjacencyList["data"][$node] = array();
    }

    // Add edge, undirected
    function addEdge($origin, $destination)
    {
        array_push($this->adjacencyList["data"][$origin], $destination);
        array_push($this->adjacencyList["data"][$destination], $origin);
    }
}