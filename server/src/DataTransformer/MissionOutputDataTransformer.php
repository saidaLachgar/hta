<?php

namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;

use App\Dto\MissionOutput;
use App\Entity\Mission;
use App\Service\JourneyAnomalyService;

class MissionOutputDataTransformer implements DataTransformerInterface
{
    private $journeyAnomalyService;

    public function __construct(JourneyAnomalyService $journeyAnomalyService)
    {
        $this->journeyAnomalyService = $journeyAnomalyService;
    }

    /**
     * @param Mission $mission
     */
    public function transform($mission, string $to, array $context = [])
    {
        $output = new MissionOutput();
        $this->journeyAnomalyService->setTotalAnomalies($mission, $output);
        return $output;
    }

    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        return $data instanceof Mission && $to === MissionOutput::class;
    }
}