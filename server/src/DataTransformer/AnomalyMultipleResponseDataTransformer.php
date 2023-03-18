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
        return array_key_exists("anomalies", $data) || array_key_exists("ids", $data);
    }
}