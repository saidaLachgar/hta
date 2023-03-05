<?php
// namespace App\DataProvider;

// use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
// use ApiPlatform\Core\DataProvider\DenormalizedIdentifiersAwareItemDataProviderInterface;
// use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;

// use App\Entity\Anomaly;
// use Doctrine\ORM\EntityManagerInterface;
// use App\Entity\Mission;
// use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

// // https://stackoverflow.com/questions/66053948/api-plateform-custom-get-operation
// // https://api-platform.com/docs/core/data-providers/#custom-item-data-provider
// // https://symfonycasts.com/screencast/api-platform-extending/data-provider
// class MissionProvider implements ContextAwareCollectionDataProviderInterface, DenormalizedIdentifiersAwareItemDataProviderInterface, RestrictedDataProviderInterface
// {
//     /**
//      * @var EntityManagerInterface
//      */
//     private $em;


//     public function __construct(EntityManagerInterface $em)
//     {
//         $this->em = $em;
//     }

//     public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
//     {
//         return Mission::class === $resourceClass;
//     }

//     public function getItem(string $resourceClass, $id, string $operationName = null, array $context = [])
//     {
//         return null;
//     }


//     public function getCollection(string $resourceClass, string $operationName = null, array $context = [])
//     {
//         if('bulk' === $operationName) {
//             $request = $context['request'];
//             $data = json_decode($request->getContent(), true);
//             $action = $context['filters']['action'] ?? null;

//             dump($action);
//             dd($data);
//             if (empty($action) || empty($data)) {
//                 throw new BadRequestHttpException('Invalid data provided');
//             }

//             switch ($action) {
//                 case 'create':
//                     return $this->BulkPersist($data);
//                 case 'update':
//                     return $this->BulkPersist($data);
//                 case 'delete':
//                     return $this->BulkDelete($data);
//                 default:
//                     throw new BadRequestHttpException('Invalid action provided');
//                 }
//         }
//         return null; // Return null to let API Platform fallback to the default behavior
//     }

//     public function BulkCreate($data)
//     {
//         $anomalies = array_map(function ($item) {
//             // check if has id get the same anomly to update it
//             $anomaly = new Anomaly();
//             $anomaly->setStatus($item['status']);
//             $anomaly->setSeverity($item['severity']);
//             $anomaly->setTitle($item['title']);
//             $anomaly->setEdge($item['edge']);

//             $this->em->persist($anomaly);

//             return $anomaly; 
//         }, $data);

//         $this->em->flush(); // Executes all updates.
//         $this->em->clear(); // Detaches all objects from Doctrine!
//         return $anomalies;
//     }

// }