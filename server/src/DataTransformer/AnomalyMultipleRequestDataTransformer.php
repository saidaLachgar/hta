<?php

namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;
use ApiPlatform\Validator\ValidatorInterface;
use App\Dto\AnomalyMultipleRequest;
use App\Entity\Anomaly;

/**
 * Class AnomalyMultipleRequestDataTransformer.
 *
 * Data transformer for the AnomalyMultipleRequest DTO.
 */ 
final class AnomalyMultipleRequestDataTransformer implements DataTransformerInterface
{

    protected $validator;
    public function __construct( ValidatorInterface $validator ) {
        $this->validator = $validator;
    }

    /**
     * {@inheritdoc}
     */
    public function transform($data, string $to, array $context = [])
    {
        // /** @var AnomalyMultipleRequest $data */
        // $this->validator->validate($data, $context);

        return $data;
    }

    /**
     * {@inheritdoc}
     */
    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        // in the case of an input, the value given here is an array (the JSON decoded).
        // if it's a media object we transformed the data already
        if(!is_iterable($data["anomalies"])) return false;

        foreach ($data["anomalies"] as $anomaly) {
            if (!$anomaly instanceof Anomaly) return false;
        }

        return AnomalyMultipleResponse::class === $to && AnomalyMultipleResponse::class === ($context['output']['class'] ?? null);
    }
}