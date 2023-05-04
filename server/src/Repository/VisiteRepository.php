<?php

namespace App\Repository;

use App\Entity\Visite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use App\Repository\EdgeRepository;

/**
 * @extends ServiceEntityRepository<Visite>
 *
 * @method Visite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Visite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Visite[]    findAll()
 * @method Visite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class VisiteRepository extends ServiceEntityRepository
{
    private $edgeRepository;

    public function __construct(ManagerRegistry $registry, EdgeRepository $edgeRepository)
    {
        parent::__construct($registry, Visite::class);
        $this->edgeRepository = $edgeRepository;
    }

    public function add(Visite $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Visite $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


   public function findByDeparAndDate($date, $depar)
   {
       return $this->createQueryBuilder('v')
            ->innerJoin('v.node_a', "n")
            ->leftJoin('n.department', "d")

           ->andWhere('DATE(v.date) = :date')
           ->setParameter('date', $date)
           
           ->andWhere('d.id = :depar')
           ->setParameter('depar', $depar)

           ->getQuery()
           ->getResult()
       ;
   }

    public function checkAnomalyAssociatedVisit($anomaly): ?bool
    {
        // get all visites of the same date as anomaly also same depar
        // get each visit edges
        // check if edge include anomaly edge
        $visits = $this->findByDeparAndDate(
            ($anomaly->getCreatedAt() ? $anomaly->getCreatedAt() : new \DateTime())->format('Y-m-d'),
            $anomaly->getEdge()->getDepartment()->getId()
        );
        
        // dump(($anomaly->getCreatedAt() ? $anomaly->getCreatedAt() : new \DateTime())->format('Y-m-d'));exit;
        

        foreach ($visits as $visit) {

            $edges = $this->edgeRepository->getEdgesByRange(
                $visit->getNodeA()->getDepartment()->getId(),
                $visit->getNodeA()->getId(),
                implode(',', $visit->getNodeB()->map(fn($node) => $node->getId())->toArray())
            );
        
            if (in_array($anomaly->getEdge()->getId(), $edges)) {
                return true;
            }
        }
        
        return false;

    }
}