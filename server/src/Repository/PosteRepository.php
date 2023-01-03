<?php

namespace App\Repository;

use App\Entity\Poste;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

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
           ->innerJoin('t.departement', 'd')
           ->getQuery()
           ->getOneOrNullResult()
       ;
   }
   public function ClientTotalInRange($departement, $source, $destination): ?int
   {

    // (SELECT sum(nb_clients) FROM poste as p4 
    // LEFT JOIN  appareil_coupeur_poste ap ON p4.id = ap.poste_id 
    // WHERE p4.departement_id = d.id 
    // AND ap.appareil_coupeur_id = t.appareil_id 
    // AND p4.id NOT IN (
    //     SELECT ap.poste_id from appareil_coupeur_poste as ap where ap.appareil_coupeur_id = t.ps_id
    // ));

    $qb2 = $this->createQueryBuilder('p2');
    $qb = $this->createQueryBuilder('p')
        ->select("sum(p.nb_clients)")

        ->andWhere('d.id = :departement')
        ->setParameter('departement', $departement)
        ->innerJoin('t.departement', 'd')

        ->andWhere('s.id = :source')
        ->setParameter('source', $source)
        ->innerJoin('p.appareil', 's');
        
        $qb->andWhere(
            $qb->expr()->notIn(
                'p.id',
                $qb2->select('p2.id')

                ->andWhere('d.id = :destination')
                ->setParameter('destination', $destination)
                ->innerJoin('ap.postes', 'd')
                ->from('App\Entity\Poste', 'ap')

                ->andWhere('s.id = :destination')
                ->setParameter('destination', $destination)
                ->innerJoin('p.appareil', 's')

                ->andWhere('d.id = :departement')
                ->setParameter('departement', $departement)
                ->innerJoin('t.departement', 'd')

                ->getQuery()->getDQL()
            )
        );
    $qb->getQuery()->getSingleScalarResult();
    // SELECT ap.poste_id from appareil_coupeur_poste as ap where ap.appareil_coupeur_id = t.ps_id


   }
}
