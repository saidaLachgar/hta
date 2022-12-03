<?php

namespace App\Repository;

use App\Entity\AppareilCoupeur;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<AppareilCoupeur>
 *
 * @method AppareilCoupeur|null find($id, $lockMode = null, $lockVersion = null)
 * @method AppareilCoupeur|null findOneBy(array $criteria, array $orderBy = null)
 * @method AppareilCoupeur[]    findAll()
 * @method AppareilCoupeur[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class AppareilCoupeurRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, AppareilCoupeur::class);
    }

    public function add(AppareilCoupeur $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(AppareilCoupeur $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return AppareilCoupeur[] Returns an array of AppareilCoupeur objects
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

//    public function findOneBySomeField($value): ?AppareilCoupeur
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
