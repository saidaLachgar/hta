<?php

namespace App\Repository;

use App\Entity\Edge;
use App\Entity\Goal;
use App\Entity\Visite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

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
    private $em;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Visite::class);
        $this->em = $entityManager;
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
        $edgeRepo = $this->em->getRepository(Edge::class);
        $visits = $this->findByDeparAndDate(
            ($anomaly->getCreatedAt() ? $anomaly->getCreatedAt() : new \DateTime())->format('Y-m-d'),
            $anomaly->getEdge()->getDepartment()->getId()
        );

        // dump(($anomaly->getCreatedAt() ? $anomaly->getCreatedAt() : new \DateTime())->format('Y-m-d'));exit;


        foreach ($visits as $visit) {

            $edges = $edgeRepo->getEdgesByRange(
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

    // Vistes par communes (année courante)
    function VistesByCommune()
    {
        $currentDate = new \DateTime();
        $year = $currentDate->format('Y');
        return $this->createQueryBuilder('v')
            ->select('c.titre AS COMMUNE, SUM(v.id) as VISTES')

            ->join('v.node_a', 'n')
            ->join('n.commune', 'c')

            ->andWhere('YEAR(v.date) = :year')
            ->setParameter('year', $year)

            ->groupBy("c.titre")
            ->getQuery()
            ->getResult();
    }

    function getVisitsStats()
    {
        $currentDate = new \DateTime();
        $month = $currentDate->format('m');
        $year = $currentDate->format('Y');
        $prevMonth = $month - 1;
        $prevYear = $year;
        if ($prevMonth === 0) {
            $prevMonth = 12;
            $prevYear--;
        }
        
        // Visite au sol (Km) -> all visites of this year
        $goal = $this->em->getRepository(Goal::class)->getTarget("ANNUAL_VISIT_COUNT", $currentDate);
        $targetDistance = $goal ? $goal->getTargetAchievement() : null;

        // total anomalies (this month + last month) 
        $anomalyQuery = $this->em->createQueryBuilder()
            ->select(
                'COUNT(a.id) as TOTAL_ANOMALIES'
            )
            ->from('App\Entity\Anomaly', 'a')
            ->andWhere('YEAR(a.createdAt) = :year')
            ->andWhere('MONTH(a.createdAt) = :month');

        $anomaliesCurrent = $anomalyQuery
            ->setParameter('year', $year)
            ->setParameter('month', $month)
            ->getQuery()->getSingleScalarResult();


        $anomaliesPrev = $anomalyQuery
            ->setParameter('year', $prevYear)
            ->setParameter('month', $prevMonth)
            ->getQuery()->getSingleScalarResult();


        // Longueur visitée (year + month)
        $nbSupportQuery = $this->em->createQueryBuilder()
            ->from('App\Entity\Visite', 'v')
            ->select('SUM(v.nbSupport) as SUPPORTS')
            ->andWhere('YEAR(v.date) = :year')
            ->setParameter('year', $year);

        $nbSupportMonth = $nbSupportQuery
            ->andWhere('MONTH(v.date) = :month')
            ->setParameter('month', $month)
            ->getQuery()->getSingleScalarResult();

        $nbSupportYear = $nbSupportQuery->getQuery()->getSingleScalarResult();


        return [
            "nbSupportYear" => $nbSupportYear ? $nbSupportYear * 100 : 0,
            "nbSupportMonth" => $nbSupportMonth ? $nbSupportMonth * 100 : 0,
            "anomaliesCurrent" => $anomaliesCurrent ?? null,
            "anomaliesPrev" => $anomaliesPrev ?? null,
            "annualVisitLgth" => $targetDistance ?? 0,
            "VistesByCommune" => $this->VistesByCommune(),
        ];

    }

}