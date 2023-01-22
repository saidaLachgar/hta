<?php

namespace App\Repository;

use App\Entity\Poste;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Validator\Constraints\Length;

/**
 * @extends ServiceEntityRepository<Poste>
 *
 * @method Poste|null find($id, $lockMode = null, $lockVersion = null)
 * @method Poste|null findOneBy(array $criteria, array $orderBy = null)
 * @method Poste[]    findAll()
 * @method Poste[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class PosteRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Poste::class);
    }

    public function add(Poste $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Poste $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return Poste[] Returns an array of Poste objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('p.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Poste
//    {
//        return $this->createQueryBuilder('p')
//            ->andWhere('p.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }

   public function ClientTotalInDepart($departement): ?int
   {
       return $this->createQueryBuilder('p')
       ->select("sum(p.nb_clients)")
           ->andWhere('d.id = :departement')
           ->setParameter('departement', $departement)
           ->innerJoin('p.departement', 'd')
           ->getQuery()
           ->getSingleScalarResult()
       ;
   }
   public function ClientTotalInRange($departement, $source, $destinations): ?int
   {

        $query = $this->createQueryBuilder('p')
            ->select("p.nb_clients")
            // ->select("p.designation", "p.nb_clients")
            ->andWhere('d.id = :departement')
            ->setParameter('departement', $departement)
            ->innerJoin('p.departement', 'd')
            ->innerJoin('p.appareilsCoupeur', 'ap')
            ->groupBy('p.id')
            ;

        !is_null($source) && $query->andWhere('ap.id = :source')
            ->setParameter('source', $source->getId());

        if(count($destinations)){
            // get id of all post that belongs to appr 4
            // add where post id not in
        
            $qb2 = $this->createQueryBuilder('p2');
            $query->andWhere(
                $query->expr()->notIn(
                    'p.id',
                    $qb2->select('p2.id')

                        ->andWhere('ap2.id IN (:destination)')
                        ->innerJoin('p2.appareilsCoupeur', 'ap2')

                        ->andWhere('d2.id = :departement')
                        ->innerJoin('p2.departement', 'd2')

                        ->getDQL()
                )
            )
            ->setParameter('destination', $destinations);
        }
        // This will return an array of rows each row containing nb_clients
        // array_reduce -> calc sum of the result  
        return array_reduce($query->getQuery()->getResult(), function($holder, $item) {
            return $holder + $item['nb_clients'];
        }, 0);
   }
}
