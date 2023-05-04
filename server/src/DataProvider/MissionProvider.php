<?php
namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Mission;


use ApiPlatform\Core\Bridge\Doctrine\Orm\Util\QueryNameGenerator;
use ApiPlatform\Doctrine\Orm\Extension\QueryResultCollectionExtensionInterface;
use Doctrine\Persistence\ManagerRegistry;

// https://stackoverflow.com/questions/66053948/api-plateform-custom-get-operation
// https://api-platform.com/docs/core/data-providers/#custom-item-data-provider
// https://symfonycasts.com/screencast/api-platform-extending/data-provider
class MissionProvider implements
    ContextAwareCollectionDataProviderInterface,
    DenormalizedIdentifiersAwareItemDataProviderInterface,
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
        return Mission::class === $resourceClass;
    }

    public function getItem(string $resourceClass, $id, string $operationName = null, array $context = [])
    {
        $repository = $this->em->getRepository(Mission::class);
        $Mission = $repository->find($id["id"]);
        // implement logic for cloning the existing data and persisting the new data
        if ("clone" === $operationName) {
            // retrieve the existing data to clone
            $clonedData = new Mission();
            $clonedData->setDateStart($Mission->getDateEnd());
            $clonedData->setType($Mission->isType());
            $clonedData->setCauses($Mission->getCauses());
            // $clonedData->setDepartment($Mission->getDepartment());
            // dd($clonedData);

            $this->em->persist($clonedData);
            $this->em->flush();

            return $clonedData;
        }
        return $Mission;
    }


    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): ?iterable
    {
        if ('get' === $operationName) {

            $manager = $this->managerRegistry->getManagerForClass($resourceClass);
            $repository = $manager->getRepository($resourceClass);
            $queryBuilder = $repository->createQueryBuilder('o');

            /*
            Then we will add to all extensions our queryBuilder updated.
            We could inject only the extension we needs but I wanted to show them all to you.
            */
            $queryNameGenerator = new QueryNameGenerator();
            foreach ($this->collectionExtensions as $extension) {
                /*
                 * Extensions are (in this order)
                 * - "ApiPlatform\Doctrine\Orm\Extension\FilterExtension"
                 * - "ApiPlatform\Doctrine\Orm\Extension\FilterEagerLoadingExtension"
                 * - "ApiPlatform\Doctrine\Orm\Extension\EagerLoadingExtension"
                 * - "ApiPlatform\Doctrine\Orm\Extension\OrderExtension"
                 * - "ApiPlatform\Doctrine\Orm\Extension\PaginationExtension"
                 */
                $extension->applyToCollection(
                    $queryBuilder,
                    $queryNameGenerator,
                    $resourceClass,
                    null,
                    $context
                );

                /*
                This next condition check if we have the pagination activated (by default is yes) and the result is returned
                */
                if (
                    $extension instanceof QueryResultCollectionExtensionInterface
                    &&
                    $extension->supportsResult($resourceClass, null, $context)
                ) {
                    return $extension->getResult($queryBuilder, $resourceClass, null, $context);
                }
            }

            // we are here only if we have deactivate the pagination
            return $queryBuilder->getQuery()->getResult();


        }
        // $repository = $this->em->getRepository(Mission::class);
        // if ('get' === $operationName) {
        //     $query = $repository->createQueryBuilder('t')
        //         ->innerJoin('t.node_a', "n")
        //         ->leftJoin('n.department', "d")
        //         ->orderBy('DATE(t.dateStart)', 'DESC')
        //         ->addOrderBy("d.id", 'DESC')
        //         ->addOrderBy("t.type", 'DESC')
        //         ->addOrderBy("TIME(t.dateStart)", 'ASC'); 
        //         // ->addOrderBy('DATE_FORMAT(t.dateStart, \'%H:%i:%s\')', 'DESC');
        //     return $query->getQuery()->getResult();
        // } 
        // // delegate to the default behavior for other operations
        // return [];
    }


}