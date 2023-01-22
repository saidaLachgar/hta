<?php
// namespace App\DataProvider;

// use ApiPlatform\Core\DataProvider\ContextAwareCollectionDataProviderInterface;
// use Symfony\Component\Security\Core\Security;
// use ApiPlatform\Core\DataProvider\RestrictedDataProviderInterface;
// use ApiPlatform\Core\DataProvider\SerializerAwareDataProviderInterface;
// use ApiPlatform\Core\DataProvider\SerializerAwareDataProviderTrait;
// use Doctrine\ORM\EntityManagerInterface;
// use App\Entity\Travaux;
// use App\Repository\TravauxRepository;
// use Doctrine\ORM\Query\ResultSetMappingBuilder;

// // https://stackoverflow.com/questions/66053948/api-plateform-custom-get-operation
// // https://api-platform.com/docs/core/data-providers/#custom-item-data-provider
// // https://symfonycasts.com/screencast/api-platform-extending/data-provider
// class TravauxProvider implements ContextAwareCollectionDataProviderInterface, RestrictedDataProviderInterface, SerializerAwareDataProviderInterface
// {
//     // ItemDataProviderInterface
//     use SerializerAwareDataProviderTrait;
//     public const OPERATION_NAME = "list";
//     private $security;
//     /**
//      * @var EntityManagerInterface
//      */
//     private $em;

//     public function __construct(Security $security, EntityManagerInterface $em)
//     {
//         $this->security = $security;
//         $this->em = $em;
//     }

//     public function supports(string $resourceClass, string $operationName = null, array $context = []): bool
//     {
//         // if(null === $this->user = $this->security->getUser() ) return false;
//         return Travaux::class === $resourceClass && self::OPERATION_NAME === $operationName;
//     }

//     // public function getItem(string $resourceClass, $id, string $operationName = null, array $context = []): ?TableDuplication
//     // {
//         // dump($this->security->getUser(), $this->security->getToken()); die();
//         // Do what you need
//     // }


//     public function getCollection(string $resourceClass, string $operationName = null, array $context = []): iterable
//     {
//         /** @var TravauxRepository $repository */
//         $repository = $this->em->getRepository(Travaux::class);


        
        
//         // $sql = 'SELECT 
//         //     t.id, t.departement_id,	t.appareil_id, t.ps_id, t.date_start,t.type,t.causes,
//         //     timediff(t.date_end,t.date_start) as \'DIFF\',
//         //     time_format((select DIFF),\'%H:%i:%s\') as \'Duration\',
//         //     TIME_TO_SEC((select DIFF)) as \'Seconds\',
//         //     (SELECT sum(p1.nb_clients) FROM poste as p1 WHERE p1.departement_id=d.id) as \'CC\',
//         //     CASE
//         //         WHEN t.date_end IS Null or t.departement_id IS Null THEN NULL
//         //         WHEN t.appareil_id IS Null and t.ps_id IS Null THEN (SELECT CC)
//         //         WHEN t.appareil_id IS NOT Null and t.ps_id IS Null THEN 
//         //             (SELECT sum(nb_clients) FROM poste as p2 
//         //             LEFT JOIN  appareil_coupeur_poste ap ON p2.id = ap.poste_id 
//         //             WHERE p2.departement_id = d.id 
//         //             AND ap.appareil_coupeur_id = t.appareil_id )
//         //         WHEN t.appareil_id IS Null and t.ps_id IS NOT Null THEN 
//         //             (SELECT sum(nb_clients) FROM poste as p3 
//         //             WHERE p3.departement_id = d.id 
//         //             AND p3.id NOT IN (
//         //                 SELECT ap.poste_id from appareil_coupeur_poste as ap where ap.appareil_coupeur_id = t.ps_id
//         //             ))
//         //         ELSE 
//         //             (SELECT sum(nb_clients) FROM poste as p4 
//         //             LEFT JOIN  appareil_coupeur_poste ap ON p4.id = ap.poste_id 
//         //             WHERE p4.departement_id = d.id 
//         //             AND ap.appareil_coupeur_id = t.appareil_id 
//         //             AND p4.id NOT IN (
//         //                 SELECT ap.poste_id from appareil_coupeur_poste as ap where ap.appareil_coupeur_id = t.ps_id
//         //             ))
//         //         END as \'CI\',
//         //     ((SELECT Seconds) * (SELECT CI) / (SELECT CC * 3600)) as \'DMS\'
//         //     FROM travaux as t
//         //     LEFT JOIN  departement d ON t.departement_id = d.id';


//         // $rsm = new ResultSetMappingBuilder($this->em);
//         // $rsm->addRootEntityFromClassMetadata('App\Entity\Travaux', 't');
//         // $rsm->addJoinedEntityFromClassMetadata('App\Entity\Departement', 'd', 't', 'departement', array('id' => 'departement_id'));
//         // $query = $this->em->createNativeQuery($sql, $rsm);
//         // // dump($sql);
//         // dump($query->getScalarResult());
//         // // dd($query->getResult());
//         // exit;
//         // return $query->getResult();




                
        
        
//         $query= $repository->createQueryBuilder('t')
//                     ->select('t.id', 'd.titre','source.titre','ps.titre', 't.dateStart','t.type','t.causes')
//                     ->addSelect('DATE_DIFF(t.dateEnd,t.dateStart) as DIFF')
//                     // ->addSelect('DATE_FORMAT((select DIFF),\'%H:%i:%s\') as Duration')
//                     // ->addSelect('TIME_TO_SEC((select DIFF)) as Seconds')
//                     ->innerJoin('t.departement', 'd')
//                     ->leftJoin('t.appareil', 'source')
//                     ->leftJoin('t.appareil', 'ps')
//                     ->getQuery()->getResult()
                    
//                 ;

//                 dd($query);
//                 // break;
//             // default:
//                 // return $repository->findAll();
//         // }
//     }
// }