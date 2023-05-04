<?php

namespace App\Repository;

use App\Entity\Edge;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\GraphSearch;

/**
 * @extends ServiceEntityRepository<Edge>
 *
 * @method Edge|null find($id, $lockMode = null, $lockVersion = null)
 * @method Edge|null findOneBy(array $criteria, array $orderBy = null)
 * @method Edge[]    findAll()
 * @method Edge[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class EdgeRepository extends ServiceEntityRepository
{
    private $GraphSearch;

    public function __construct(ManagerRegistry $registry, GraphSearch $GraphSearch)
    {
        parent::__construct($registry, Edge::class);
        $this->GraphSearch = $GraphSearch;
    }

    public function add(Edge $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Edge $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getEdgesByRange($depar,$node_a, $node_b = null)
    {
        // $node_b is comma-separated string
        if ($node_b !== null) {
            // or use ';' if you used that delimiter
            $node_b = array_map('intval', explode(',', $node_b));
            // use $node_b_array as an array of integers
        }

        $nodesInRange = $this->GraphSearch->bfsNodesInRange($depar, $node_a, $node_b);

        $results =  $this->createQueryBuilder('e')
            ->select("e.id")
            ->andWhere('n.id IN (:nodes)')
            ->setParameter('nodes', $nodesInRange)
            ->innerJoin('e.node_a', 'n')
            ->getQuery()
            ->getResult()
        ;
        $edges = array_map('current', $results);

        return $edges;
    }

//    /**
//     * @return Edge[] Returns an array of Edge objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Edge
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
