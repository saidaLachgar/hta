<?php
namespace App\Service;
use App\Entity\Anomaly;
use App\Entity\Visite;
use App\Entity\Edge;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\EntityCopyService;
class JourneyAnomalyService 
{
    private $em;
    private $entityCopyService;
    public function __construct(EntityManagerInterface $em, EntityCopyService $entityCopyService)
    {
        $this->em = $em;
        $this->entityCopyService = $entityCopyService;
    }

    public function setTotalAnomalies($journey, $output)
    {
        $anomalyRepository = $this->em->getRepository(Anomaly::class);
        $anomalies = $anomalyRepository->getTotalAnomalies($journey);

        $this->entityCopyService->copyAttributes($journey, $output);

        $output->setTotalAnomalies($anomalies ? $anomalies["total"] : null);
        $output->setUndoneAnomalies($anomalies ? $anomalies["undone"] : null);
    }
   
}
