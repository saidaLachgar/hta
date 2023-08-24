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

    public function ClientTotalByNodes($nodes): ?int
    {
        return $this->createQueryBuilder('p')
            ->select("sum(p.nb_clients)")
            ->andWhere('n.id IN (:nodes)')
            ->setParameter('nodes', $nodes)
            ->innerJoin('p.node', 'n')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }
    public function ClientTotalByCommune($id)
    {
        return $this->createQueryBuilder('p')
        ->select("sum(p.nb_clients)")
        ->innerJoin('p.node', 'n')
        ->innerJoin('n.commune', 'c')
        ->andWhere('c.id = :id')
        ->setParameter('id', $id)
        ->getQuery()
        ->getSingleScalarResult();
    }

    public function PostesTotalByNodes($nodes): ?int
    {
        return $this->createQueryBuilder('p')
            ->select("count(p.id)")
            ->andWhere('n.id IN (:nodes)')
            ->setParameter('nodes', $nodes)
            ->innerJoin('p.node', 'n')
            ->getQuery()
            ->getSingleScalarResult()
        ;
    }

    private function totalPKVA($deparId)
    {
        $totalPKVA = $this->createQueryBuilder('p1')
            ->select('SUM(p1.PKVA)')
            ->innerJoin('p1.node', 'n1')
            ->innerJoin('n1.department', 'd1')
            ->where('d1.id = :deparId')
            ->setParameter('deparId', $deparId);

        return $totalPKVA->getQuery()->getSingleScalarResult();
    }


    public function getPostePuissance(int $posteId,int $deparId): float
    {

        $qb = $this->createQueryBuilder("p")
        ->select('((d.courantMax * 22 * SQRT(3)) / (:totalPKVA)) * p.PKVA')

            ->innerJoin('p.node', 'n')
            ->innerJoin('n.department', 'd')
            ->andWhere('p.id = :posteId')
            ->setParameter('posteId', $posteId)
            ->setParameter('totalPKVA', $this->totalPKVA($deparId));
        $result = $qb->getQuery()->getSingleScalarResult();
        return (float) round($result,4);
    }

    public function getPostesPuissance(array $nodeIds,int $deparId): float
    {
        $qb = $this->createQueryBuilder("p")
        ->select('SUM(((d.courantMax * 22 * SQRT(3)) / (:totalPKVA)) * p.PKVA) AS totalPuissance')

            ->innerJoin('p.node', 'n')
            ->innerJoin('n.department', 'd')
            ->andWhere('n.id IN (:nodeIds)')
            ->setParameter('nodeIds', $nodeIds)
            ->setParameter('totalPKVA', $this->totalPKVA($deparId));
        $result = $qb->getQuery()->getSingleScalarResult();
        return (float) round($result,4);
    }
}

/*
SELECT
    SUM((d.courant_max * 22 * SQRT(3)) / (
        SELECT SUM(p1.PKVA) 
        From poste p1
        INNER JOIN node n1
        ON n1.id = p1.node_id
        INNER JOIN department d1
        ON d1.id = n1.department_id
        WHERE d1.id=d.id
    ) * p.pkva) AS totalPuissance
FROM
    department d
INNER JOIN
    node n ON d.id = n.department_id
INNER JOIN
    poste p ON n.id = p.node_id
WHERE
    d.id = :department;
AND WHERE
    n.id IN (:nodes);


SELECT p.*,
 (
        SELECT SUM(p1.PKVA) 
        From poste p1
        INNER JOIN node n1
        ON n1.id = p1.node_id
        INNER JOIN department d1
        ON d1.id = n1.department_id
        WHERE d1.id=d.id
    ) as totalPKVADepar,d.courant_max as courant_max_dp,
    (d.courant_max * 22 * SQRT(3)) / (
        SELECT SUM(p1.PKVA) 
        From poste p1
        INNER JOIN node n1
        ON n1.id = p1.node_id
        INNER JOIN department d1
        ON d1.id = n1.department_id
        WHERE d1.id=d.id
    ) * p.pkva AS Puissance
FROM
    poste p
INNER JOIN
    node n ON p.node_id = n.id
INNER JOIN
    department d ON n.department_id = d.id
WHERE
    p.id IN (277,276,278,279,275);
*/