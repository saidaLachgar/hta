<?php

namespace App\Service;

use App\Cache\AdjacencyListCache;

class GraphSearch
{
    private $adjacencyListCache;

    public function __construct(AdjacencyListCache $adjacencyListCache)
    {
        $this->adjacencyListCache = $adjacencyListCache;
    }


    /**
     * Perform a Breadth-First Search (BFS) on a directed graph and return all edges between the start and end nodes.
     * 
     * @param string $start The starting node in the graph.
     * @param array $ends An array of end nodes to search for. If null, all nodes in the graph are considered end nodes.
     * @return array An array of nodes that are reachable from the start node and lead to any of the given end nodes.
     */
    function bfsNodesInRange(int $department, string $start, ?array $ends = null): array
    {
        // Get the adjacency list of the graph.
        $cachedData = $this->adjacencyListCache->getAdjacencyList($department);
        // dd($cachedData);
        $adjacencyList = $cachedData["data"];
        $edges = $cachedData["edges"];

        // echo json_encode($cachedData);
        // exit;
        
        // Initialize the BFS algorithm.
        $visited = [];
        $queue = [(int)$start];

        // Perform the BFS algorithm until the queue is empty.
        while (count($queue) > 0) {

            // remove 1st item from queue then return it
            $node = array_shift($queue);

            // If the end node is not reached
            if ($ends == null || !in_array($node, $ends)) {

                // Mark the node as visited and add its unvisited neighbors to the BFS queue.
                $visited[] = $node;

                // get node neighbors && remove visted ones
                // try {
                    $neighbors = array_diff($adjacencyList[$node], $visited);
                // } catch (\Throwable $th) {
                //     echo json_encode($this->adjacencyListCache->getAdjacencyList(16));
                //     dump($node);
                //     dd($department);
                // }

                // Filter out neighbors that are not connected in the right direction
                count($neighbors) && $neighbors = array_filter($neighbors, function($neighbor) use ($node, $edges) {
                    return in_array($node.$neighbor,$edges);
                });

                // merge the queue and neighbors arrays then remove duplicates
                count($neighbors) && $queue = array_unique(array_merge($queue, $neighbors));
            }
        }

        // Return all nodes between the start and end nodes.
        return $visited;
    }

   
}

// Eg. A->[E]

// nodes = [B, A, C, D, E, F, J, G];
// edges = {
//     [A,B]
//     [B,C]
//     [C,D]
//     [D,E]
//     [B,F]
//     [B,J]
//     [J, G]
// }
// A -> B
// B -> A, C, F, J
// C -> B, D
// D -> C, E
// E -> D
// F -> B
// J -> B, G
// G -> J


// $visited = []; $queue = [[A]]; $Nodes = [];

// $node = A; $queue = [];
// $visited[] = A; $neighbors = B; $queue = B;
// $visited = A;

// $node = B; $queue = [];
// $visited[] = B; $neighbors = A, C, F, J; $queue = C, F, J;
// $visited = A, B;

// $node = C; $queue = [F, J];
// $visited[] = C; $neighbors = B, D; $queue = F, J, D;
// $visited = A, B, C;

// $node = F; $queue = [J, D];
// $visited[] = F; $neighbors = B; $queue = J, D;
// $visited = A, B, C, F;

// $node = J; $queue = [D];
// $visited[] = J; $neighbors = B, G; $queue = D, G;
// $visited = A, B, C, F, J;

// $node = D; $queue = [G];
// $visited[] = D; $neighbors = C, E; $queue = G, E;
// $visited = A, B, C, F, J, D;

// $node = G; $queue = [E];
// $visited[] = G; $neighbors = J; $queue = E;
// $visited = A, B, C, F, J, D, G;

// $node = E; $queue = [];
// $visited[] = G; $neighbors = J; $queue = E;
// $visited = A, B, C, F, J, D, G;

