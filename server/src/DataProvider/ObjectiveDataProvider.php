<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use App\Entity\Objective;
use App\Repository\GoalRepository;

class ObjectiveDataProvider implements ContextAwareCollectionDataProviderInterface, DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface
{
    private $goalRepository;

    public function __construct(GoalRepository $goalRepository)
    {
        $this->goalRepository = $goalRepository;
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
    {
        return Objective::class === $resourceClass && $operationName === 'achievements';
    }


    public function getItem(string $resourceClass, $id, string $operationName = null, array $context = [])
    {
        // not used for other itemOperations
        return null;
    }


    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
    {
        if ($operationName === 'achievements') {
            $year = $context['filters']['year'];
            $objectives = $this->goalRepository->getObjectivesByYear($year);

            return $objectives;
        }
        return $this->goalRepository->findAll();
    }
}
