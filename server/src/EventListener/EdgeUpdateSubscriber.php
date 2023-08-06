<?php
// src/EventListener/EdgeUpdateSubscriber.php
namespace App\EventListener;

use App\Cache\AdjacencyListCache;
use Doctrine\Common\EventSubscriber;
use Doctrine\ORM\Events;
use Doctrine\Persistence\Event\LifecycleEventArgs;
use App\Entity\Edge;

class EdgeUpdateSubscriber implements EventSubscriber
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
        if ($entity instanceof Edge) {
            $this->persistence($args, "Update");
        }
    }
   
    public function postPersist(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Edge) {
            $this->persistence($args, "Create");
        }
    }
    public function persistence(LifecycleEventArgs $args, $eventType)
    {
        $entity = $args->getObject();
        if ($entity instanceof Edge) {

            $em = $args->getObjectManager();
            $changeSet = $em->getUnitOfWork()->getEntityChangeSet($entity);
            // update nodes commune
            $cloneData = ["Commune", "Department"];
            foreach ($cloneData as $field) {
                $getter = "get" . $field;
                $setter = "set" . $field;
                if (
                    $eventType == "Create" || // if Edge is new
                    isset($changeSet[strtolower($field)])  // or not new but field updated
                ) {
                    $entity->getNodeA()->$setter($entity->$getter());
                    $entity->getNodeB()->$setter($entity->$getter());
                }
            }

            $em->persist($entity);
            $em->flush();

            // Update the adjacency list in the cache with the new department entity data
            $this->adjacencyListCache->getAdjacencyList($entity->getDepartment()->getId(), true);
        }
    }


    public function preRemove(LifecycleEventArgs $args)
    {
        $entity = $args->getObject();
        if ($entity instanceof Edge) {
            // executed before the Edge entity is removed
            $this->adjacencyListCache->getAdjacencyList($entity->getDepartment()->getId(), true);
        }
    }
}