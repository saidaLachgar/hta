<?php

namespace App\Repository;

use App\Entity\Dps;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Dps>
 *
 * @method Dps|null find($id, $lockMode = null, $lockVersion = null)
 * @method Dps|null findOneBy(array $criteria, array $orderBy = null)
 * @method Dps[]    findAll()
 * @method Dps[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class DpsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Dps::class);
    }

    public function add(Dps $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Dps $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
    public function ClientTotalInDp($id): ?int
    {
        return $this->createQueryBuilder('dp')
            ->select("dp.nbClients")
            ->andWhere('dp.id = :id')
            ->setParameter('id', $id)
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

//    /**
//     * @return Dps[] Returns an array of Dps objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('d.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Dps
//    {
//        return $this->createQueryBuilder('d')
//            ->andWhere('d.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
