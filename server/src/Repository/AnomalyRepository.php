<?php

namespace App\Repository;

use App\Entity\Anomaly;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;


/**
 * @extends ServiceEntityRepository<Anomaly>
 *
 * @method Anomaly|null find($id, $lockMode = null, $lockVersion = null)
 * @method Anomaly|null findOneBy(array $criteria, array $orderBy = null)
 * @method Anomaly[]    findAll()
 * @method Anomaly[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AnomalyRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Anomaly::class);
    }

    public function add(Anomaly $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Anomaly $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getTotalAnomalies($edgesIds, $date)
    {
        $total = $this->createQueryBuilder('t')
            ->select('t.status')
            ->join('t.edge', 'e')
            ->andWhere('e.id IN (:edges)')
            ->setParameter('edges', $edgesIds)
            ->andWhere('DATE(t.createdAt) = :date')
            ->setParameter('date', $date->format('Y-m-d'))
            ->getQuery()->getArrayResult();

        $undone = array_filter($total, function ($item) {
            return $item["status"] !== true;
        });


        return [
            "total" => count($total),
            "undone" => count($undone)
        ];
    }

    //    /**
//     * @return Anomaly[] Returns an array of Anomaly objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

    //    public function findOneBySomeField($value): ?Anomaly
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}