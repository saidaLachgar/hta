<?php

namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use App\Entity\Goal;
use App\Repository\GoalRepository;

class GoalDataProvider implements ContextAwareCollectionDataProviderInterface, DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface
{
    private $goalRepository;

    public function __construct(GoalRepository $goalRepository)
    {
        $this->goalRepository = $goalRepository;
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
    {
        return Goal::class === $resourceClass && $operationName === 'grouped_goals';
    }


    public function getItem(string $resourceClass, $id, string $operationName = null, array $context = [])
    {
        // not used for other itemOperations
        return null;
    }


    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
    {
        if ($operationName === 'grouped_goals')
            return $this->goalRepository->getGoals();
        return $this->goalRepository->findAll();
    }
}
