<?php

namespace App\Repository;

use App\Entity\Commune;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;
use App\Service\GraphSearch;

/**
 * @extends ServiceEntityRepository<Commune>
 *
 * @method Commune|null find($id, $lockMode = null, $lockVersion = null)
 * @method Commune|null findOneBy(array $criteria, array $orderBy = null)
 * @method Commune[]    findAll()
 * @method Commune[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CommuneRepository extends ServiceEntityRepository
{
    private $GraphSearch;
    public function __construct(ManagerRegistry $registry, GraphSearch $GraphSearch)
    {
        parent::__construct($registry, Commune::class);
        $this->GraphSearch = $GraphSearch;
    }

    public function add(Commune $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Commune $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getCommunesByRange($depar, $node_a, $node_b = null)
    {
        $nodesInRange = $this->GraphSearch->bfsNodesInRange($depar, $node_a, $node_b);
        // dd($nodesInRange);

        $results = $this->createQueryBuilder('c')
            ->select('c')
            ->join('c.edges', 'e')
            ->andWhere('e.node_a IN (:nodes)')
            ->setParameter('nodes', $nodesInRange)
            ->getQuery()
            ->getResult();

        return $results;
    }
}