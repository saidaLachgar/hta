<?php
namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Visite;


use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGenerator;
use ApiPlatform\Doctrine\Orm\Extension\QueryResultCollectionExtensionInterface;
use Doctrine\Persistence\ManagerRegistry;

class VisiteProvider implements
    ContextAwareCollectionDataProviderInterface,
    RestrictedDataProviderInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $em;
    private $managerRegistry;
    private $collectionExtensions;


    public function __construct(
        EntityManagerInterface $em,
        ManagerRegistry $managerRegistry,
        $collectionExtensions
    ) {
        $this->em = $em;
        $this->managerRegistry = $managerRegistry;
        $this->collectionExtensions = $collectionExtensions;
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
    {
        return Visite::class === $resourceClass;
    }

   

    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): ?iterable
    {
        if ('get' === $operationName) {

            $manager = $this->managerRegistry->getManagerForClass($resourceClass);
            $repository = $manager->getRepository($resourceClass);
            $queryBuilder = $repository->createQueryBuilder('o');
            $queryNameGenerator = new QueryNameGenerator();
            foreach ($this->collectionExtensions as $extension) {
                $extension->applyToCollection($queryBuilder, $queryNameGenerator, $resourceClass, null, $context);
            }
            // dump($visites);exit;

            return  $queryBuilder->getQuery()->getResult();

        }
    }


}