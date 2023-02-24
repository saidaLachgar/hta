<?php
namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Mission;

// https://stackoverflow.com/questions/66053948/api-plateform-custom-get-operation
// https://api-platform.com/docs/core/data-providers/#custom-item-data-provider
// https://symfonycasts.com/screencast/api-platform-extending/data-provider
class MissionProvider implements ContextAwareCollectionDataProviderInterface, DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface
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
        return Mission::class === $resourceClass;
    }

    public function getItem(string $resourceClass, $id, string $operationName = null, array $context = [])
    {
        $repository = $this->em->getRepository(Mission::class);
        $Mission = $repository->find($id["id"]);
        // implement logic for cloning the existing data and persisting the new data
        // if ("clone" === $operationName) {
        //     // retrieve the existing data to clone
        //     $clonedData = new Mission();
        //     $clonedData->setDateStart($Mission->getDateEnd());
        //     $clonedData->setType($Mission->isType());
        //     $clonedData->setCauses($Mission->getCauses());
        //     $clonedData->setDepartment($Mission->getDepartment());
        //     // dd($clonedData);

        //     $this->em->persist($clonedData);
        //     $this->em->flush();

        //     return $clonedData;
        // }
        return $Mission;
    }


    public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
    {
        $repository = $this->em->getRepository(Mission::class);
        // if ('get' === $operationName) {
        //     $query = $repository->createQueryBuilder('t')
        //         ->leftJoin('t.department', "d")
        //         // ->orderBy('DATE_FORMAT(t.dateStart, \'%d-%m-%Y\')', 'DESC');
        //         ->orderBy('DATE(t.dateStart)', 'DESC')
        //         ->addOrderBy("d.id", 'DESC')
        //         ->addOrderBy("t.type", 'DESC')
        //         ->addOrderBy("TIME(t.dateStart)", 'ASC'); 
        //         // ->addOrderBy('DATE_FORMAT(t.dateStart, \'%H:%i:%s\')', 'DESC');
        //     return $query->getQuery()->getResult();
        // } 
        return $repository->findAll();
    }
}