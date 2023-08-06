<?php
namespace App\EventListener;

use App\Cache\AdjacencyListCache;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Node;

class NodeUpdateSubscriber implements EventSubscriber
{
    private $adjacencyListCache;

    public function __construct(AdjacencyListCache $adjacencyListCache)
    {
        $this->adjacencyListCache = $adjacencyListCache;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::preRemove,
            Events::postUpdate,
            Events::postPersist
        ];
    }

    public function postUpdate(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Node) {
            $this->persistence($args, "Update");
        }
    }
   
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Node) {
            $this->persistence($args, "Create");
        }
    }
    public function persistence(LifecycleEventArgs $args, $eventType)
    {
        $entity = $args->getObject();
        if ($entity instanceof Node) {
            // Update the adjacency list in the cache with the new department entity data
            $entity->isTemp() !== true && $this->adjacencyListCache->getAdjacencyList($entity->getDepartment()->getId(), true);
        }
    }


    public function preRemove(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Node) {
            // executed before the Node entity is removed
            // Update the adjacency list in the cache with the new department entity data
            $entity->isTemp() !== true &&  $this->adjacencyListCache->getAdjacencyList($entity->getDepartment()->getId(), true);
        }
    }
}