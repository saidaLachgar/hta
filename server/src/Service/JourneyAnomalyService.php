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
        $edgeRepository = $this->em->getRepository(Edge::class);
        $anomalyRepository = $this->em->getRepository(Anomaly::class);
        $edgesIds = $edgeRepository->getEdgesByRange(
            $journey->getNodeA()->getDepartment()->getId(),
            $journey->getNodeA()->getId(),
            $journey->getNodeB() ? implode(',', $journey->getNodeB()->map(fn($node) => $node->getId())->toArray()) : null
        );
        if ($edgesIds) {
            $date = $journey instanceof Visite ? $journey->getDate() : $journey->getDateStart();
            $anomalies = $anomalyRepository->getTotalAnomalies($edgesIds, $date);
        }

        $this->entityCopyService->copyAttributes($journey, $output);
        $output->setTotalAnomalies(isset($anomalies) ? $anomalies["total"] : null);
        $output->setUndoneAnomalies(isset($anomalies) ? $anomalies["undone"] : null);
    }
   
}
