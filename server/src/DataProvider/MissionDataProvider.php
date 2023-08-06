<?php
namespace App\DataProvider;

use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Mission;



// https://stackoverflow.com/questions/66053948/api-plateform-custom-get-operation
// https://api-platform.com/docs/core/data-providers/#custom-item-data-provider
// https://symfonycasts.com/screencast/api-platform-extending/data-provider
class MissionDataProvider implements
    DenormalizedIdentifiersAwareItemDataProviderInterface,
    RestrictedDataProviderInterface
{
    /**
     * @var EntityManagerInterface
     */
    private $em;
    private $managerRegistry;


    public function __construct(
        EntityManagerInterface $em,
        ManagerRegistry $managerRegistry
    ) {
        $this->em = $em;
        $this->managerRegistry = $managerRegistry;
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
}