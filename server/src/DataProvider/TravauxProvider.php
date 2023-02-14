<?php
namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Travaux;

// https://stackoverflow.com/questions/66053948/api-plateform-custom-get-operation
// https://api-platform.com/docs/core/data-providers/#custom-item-data-provider
// https://symfonycasts.com/screencast/api-platform-extending/data-provider
class TravauxProvider implements ContextAwareCollectionDataProviderInterface, DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $em;


    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
    {
        return Travaux::class === $resourceClass;
    }

    public function getItem(string $resourceClass, $id, string $operationName = null, array $context = [])
    {
        // implement logic for cloning the existing data and persisting the new data
        if ("clone" === $operationName) {
            $repository = $this->em->getRepository(Travaux::class);
            // retrieve the existing data to clone
            $Travaux = $repository->find($id["id"]);
            // $Travaux = $repository->find($context['id']);
            $clonedData = clone $Travaux;
            $clonedData->unsetId();
            $this->em->persist($clonedData);
            $this->em->flush();

            return $clonedData;
        }
    }


    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
    {
        if ('get' === $operationName) {
            $queryBuilder = $this->em->getRepository(Travaux::class)->createQueryBuilder('t');
            $queryBuilder
                ->leftJoin('t.departement', "d")
                ->addOrderBy('DATE_FORMAT(t.dateStart, \'%d-%m-%Y\')', 'DESC')
                ->addOrderBy("d.id", 'ASC')
                ->addOrderBy('DATE_FORMAT(t.dateStart, \'%H:%i:%s\')', 'DESC');

            return $queryBuilder->getQuery()->getResult();
        }
    }
}