<?php

namespace App\Utility;

use App\Entity\Log;
use Doctrine\ORM\EntityManagerInterface;
use Monolog\Handler\AbstractProcessingHandler;
use Symfony\Component\Security\Core\Security;

class DbHandler extends AbstractProcessingHandler
{
    private $security;
    private $manager;

    public function __construct(EntityManagerInterface $manager, Security $security)
    {
        parent::__construct();
        $this->manager = $manager;
        $this->security = $security;
    }

    protected function write(array $record): void
    {
        // on envoi le log dans la db
        $log = new Log();

        $log->setContext($record['context']);
        $log->setLevel($record['level']);
        $log->setLevelName($record['level_name']);
        $log->setMessage($record['message']);
        $log->setExtra($record['extra']);
        $log->setUser($this->security->getUser());

        $this->manager->persist($log);
        $this->manager->flush();
    }
}