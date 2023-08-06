<?php

namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;

use App\Dto\VisiteOutput;
use App\Entity\Visite;
use App\Repository\EdgeRepository;
use App\Service\JourneyAnomalyService;

class VisiteOutputDataTransformer implements DataTransformerInterface
{
    private $journeyAnomalyService;
    private $edgeRepository;

    public function __construct(JourneyAnomalyService $journeyAnomalyService, EdgeRepository $edgeRepository)
    {
        $this->journeyAnomalyService = $journeyAnomalyService;
        $this->edgeRepository = $edgeRepository;
    }

    /**
     * @param Visite $visite
     */
    public function transform($visite, string $to, array $context = [])
    {
        $output = new VisiteOutput();
        // set total anomalies
        $this->journeyAnomalyService->setTotalAnomalies($visite, $output);
        
        // set length of a set of edges between two given vertices (nodes)
        $length = $this->edgeRepository->getLengthBetweenNodes(
            $visite->getNodeA()->getDepartment()->getId(),
            $visite->getNodeA()->getId(),
            implode(',', $visite->getNodeB()->map(fn($node) => $node->getId())->toArray())
        );
        $length && $output->setEdgeSetLength((float) $length);

        return $output;
    }

    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        return $data instanceof Visite && $to === VisiteOutput::class;
    }
}