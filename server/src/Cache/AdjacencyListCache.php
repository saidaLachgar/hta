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
    public function getAdjacencyList($departmentId, $reset = false):array
    {
        if (count($this->adjacencyList) === 0) {
            $cacheItem = $this->cache->getItem('adjacency_list_'.$departmentId);

            if ($cacheItem->isHit() && !$reset) {
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

        // Create the Graph
        foreach ($nodes as $node) {
            $this->addNode($node->getId());
        }
        // dump(array_map(fn($node) => $node->getId(), $nodes));
        // dd(array_map(fn($edge) => $edge->getNodeA()->getId().$edge->getNodeB()->getId(), $edges));
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
        // try {
            array_push($this->adjacencyList["data"][$origin], $destination);
            array_push($this->adjacencyList["data"][$destination], $origin);
        // } catch (\Throwable $th) {
        //     dump($origin);
        //     dump($destination);
        //     dd($this->adjacencyList["data"]);
        // }
        
    }
}