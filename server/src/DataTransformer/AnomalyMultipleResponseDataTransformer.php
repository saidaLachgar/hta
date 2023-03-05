<?php

namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;
use ApiPlatform\Validator\ValidatorInterface;
use App\Dto\AnomalyMultipleResponse;
use App\Entity\Anomaly;

/**
 * Class AnomalyMultipleResponseDataTransformer.
 *
 * Data transformer for the AnomalyMultipleResponse DTO.
 */
final class AnomalyMultipleResponseDataTransformer implements DataTransformerInterface
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
        // /** @var AnomalyMultipleResponse $data */
        // $this->validator->validate($data);
        
        return $data;
    }

    /**
     * {@inheritdoc}
     */
    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        // in the case of an input, the value given here is an array (the JSON decoded).
        // if it's a media object we transformed the data already
        if(!is_iterable($data["anomalies"]) && !is_iterable($data["ids"])) return false;

        if($data["anomalies"]){
            foreach ($data["anomalies"] as $anomaly) {
                if (!$anomaly instanceof Anomaly) return false;
            }
        }

        return AnomalyMultipleResponse::class === $to && AnomalyMultipleResponse::class === ($context['output']['class'] ?? null);
    }
}