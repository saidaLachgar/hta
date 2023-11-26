<?php

namespace App\EventListener;

use App\Entity\Log;
use App\Entity\MediaObject;
use App\Entity\MissionCommune;
use App\Entity\RefreshToken;
use Doctrine\ORM\Events;
use Psr\Log\LoggerInterface;
use Doctrine\Common\EventSubscriber;
use Doctrine\Persistence\Event\LifecycleEventArgs;
class DoctrineSubscriber implements EventSubscriber
{
    private $logger;
    public const CREATE = "Ajouté";
    public const UPDATE = "Modifé";
    public const DELETE = "Supprimé";

    public function __construct(LoggerInterface $dbLogger)
    {
        $this->logger = $dbLogger;
    }

    public function getSubscribedEvents()
    {
        return [
            Events::postPersist,
            Events::postUpdate,
            Events::postRemove
        ];
    }

    public function postPersist(LifecycleEventArgs $args)
    {
        $this->log($args,self::CREATE);
    }

    public function postUpdate(LifecycleEventArgs $args)
    {
        $this->log($args,self::UPDATE);
        // prevent token updates from logging
        // if (($args->getObject() instanceof User)) {
            // $changeArray = $args->getObjectManager()->getUnitOfWork()->getEntityChangeSet($args->getObject());
            // if (!isset($changeArray["password"])){
                // dd($changeArray);
            // }

        // }
    }
    
    public function postRemove(LifecycleEventArgs $args)
    {
        $this->log($args,self::DELETE);
    }

    public function log($args, $eventType)
    {
        $object = $args->getObject();
        // if (false) {
        if (!($object instanceof Log || $object instanceof RefreshToken || $object instanceof MediaObject || $object instanceof MissionCommune)) {
            $objectString = (string)$object; // ex : fullName
            $className = get_class($object); // returns fully-qualified class name
            $class = strtolower(basename(str_replace('\\', '/', $className))); // Get the class "basename" of the given object / class
            $instance = new $className(); // Creating class instance
            $translatedName = $instance::$TRANSLATED_NAME; // ex: utilisateur
            if( $eventType !== self::DELETE ){
                $objectId = $object->getId(); // ex : 190
                $url = $_ENV['FRONTEND_URL']. // ex : "http://localhost/"
                    (
                    $class == "UserPermissions" ? "autorisation" :
                    ($class == "Objective" ? "objectives" :
                    $class."/details/".$objectId)
                    ); // ex : "users/details/:id"
                $urlHtml =  '<p class="mb-1">URL : <b><a href="'.$url.'">'.$url.'</a></b></p>';
            } else  $urlHtml="";

            switch ($eventType) {
                case self::CREATE:
                    $badge = "success";
                    $title = "Création";
                    break;
                case self::UPDATE:
                    $badge = "warning";
                    $title = "modification";
                    break;
                case self::DELETE:
                    $badge = "danger";
                    $title = "Suppression";
                    break;
            }

            $message = '<p class="mb-1">'.$eventType.' '.$translatedName. ' : <b>'.$objectString.'</b></p>'.$urlHtml.
                '<p class="mb-0 d-block mt-3">Type d\'événement : <span class="badge rounded-pill badge-soft-'.$badge.'">'.$title.'</span></p>';
            $this->logger->info($message);

            
        }
    }
}
// User "users"
// Team "teams"
// Department "departments"
// Edge "edges"
// Node "nodes"
// Poste "postes"
// Commune "communes"
// Missio "mission"
// Visite "visites"
// UserPermissions = "autorisation";
