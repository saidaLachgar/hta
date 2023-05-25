<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use App\Entity\Edge;
use App\Repository\EdgeRepository;

class EdgeDataProvider implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface
{
    private $edgeRepository;

    public function __construct(EdgeRepository $edgeRepository)
    {
        $this->edgeRepository = $edgeRepository;
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
    {
        return Edge::class === $resourceClass && $operationName === 'by_range';
    }


    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
    {
        if ($operationName === 'by_range') {
            $depar = $context['filters']['depar'];
            $node_a = $context['filters']['node_a'];
            $node_b = $context['filters']['node_b'] ?? null;
            $edges = $this->edgeRepository->getEdgesByRange($depar, $node_a, $node_b);

            return $edges;
        }
        return $this->edgeRepository->findAll();
    }
}
