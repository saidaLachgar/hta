<?php

namespace App\Repository;

use App\Entity\Edge;
use App\Entity\Goal;
use App\Entity\Team;
use App\Entity\Visite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;

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
    private $security;
    private $em;

    public function __construct(ManagerRegistry $registry, Security $security, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Visite::class);
        $this->security = $security;
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
        $user = $this->security->getUser();

        $queryBuilder = $this->em->createQueryBuilder()
            ->select('c.titre as COMMUNE, COUNT(v.id) as VISTES')
            ->from('App\Entity\Commune', 'c')
            ->leftJoin('c.visites', 'v')
            ->andWhere('YEAR(v.date) = :year')
            ->setParameter('year', $year)
            ->groupBy('c.titre');

        if (in_array('ROLE_SUPER_ADMIN', $user->getRoles())) {
            return $queryBuilder->getQuery()->getResult();
        }

        $queryBuilder
            ->join('v.node_a', 'n')
            ->join('n.department', 'd')
            ->join('d.team', 't');

        if (
            in_array('ROLE_ADMIN', $user->getRoles())
        ) {
            // Retrieve the user's dp
            $dp = $user->getTeam()->getDps();
            // admin can see only data of his Dp
            $queryBuilder
                ->andWhere('t.dps = :dp')
                ->setParameter('dp', $dp);
        } else {
            // user can see only data of his team
            $queryBuilder
                ->andWhere('t = :userTeam')
                ->setParameter('userTeam', $user->getTeam());
        }
        return $queryBuilder->getQuery()->getResult();
    }

    function getVisitsStats(string $type, int $month = null)
    {
        $currentDate = new \DateTime();
        $year = $currentDate->format('Y');

        if ($type === "stats-per-month" || $type === "total-covered-distance") {
            // Longueur visitée (year + month)
            $visitedLgthQuery = $this->em->createQueryBuilder()
                ->from('App\Entity\Visite', 'v')
                ->select('SUM(v.edge_set_length) / 1000 as visitedLgth')
                ->join('v.node_a', 'n')
                ->join('n.department', 'd')
                ->join('d.team', 't')
                ->andWhere('YEAR(v.date) = :year')
                ->setParameter('year', $year);

            $visitedLgthQuery = $this->checkAccess($visitedLgthQuery);
            $visitedLgthYear = clone $visitedLgthQuery;
        }

        if ($type === "stats-per-month") {
            $month = (int) $month;
            $prevMonth = $month - 1;
            $prevYear = $year;
            if ($prevMonth === 0) {
                $prevMonth = 12;
                $prevYear--;
            }
            // total anomalies (this month + last month) 
            $anomalyQuery = $this->em->createQueryBuilder()
                ->select(
                    'COUNT(a.id) as TOTAL_ANOMALIES'
                )
                ->from('App\Entity\Anomaly', 'a')
                ->join('a.edge', 'e')
                ->join('e.department', 'd')
                ->join('d.team', 't')
                ->andWhere('YEAR(a.createdAt) = :year')
                ->andWhere('MONTH(a.createdAt) = :month');

            $anomalyQuery = $this->checkAccess($anomalyQuery);
            $anomaliesPrev = clone $anomalyQuery;

            $anomaliesCurrent = $anomalyQuery
                ->setParameter('year', $year)
                ->setParameter('month', $month)
                ->getQuery()->getSingleScalarResult();

            $anomaliesPrev = $anomaliesPrev
                ->setParameter('year', $prevYear)
                ->setParameter('month', $prevMonth)
                ->getQuery()->getSingleScalarResult();
            $visitedLgthMonth = $visitedLgthQuery
                ->andWhere('MONTH(v.date) = :month')
                ->setParameter('month', $month)
                ->getQuery()->getSingleScalarResult();
            return [
                "visitedLgthMonth" => $visitedLgthMonth ? $visitedLgthMonth : 0,
                "anomaliesCurrent" => $anomaliesCurrent ?? null,
                "anomaliesPrev" => $anomaliesPrev ?? null,
            ];
        } elseif ($type === "total-covered-distance") {
            $goalRepo = $this->em->getRepository(Goal::class);
            // Visite au sol (Km) -> all visites of this year
            $distanceGoal = $goalRepo->getTarget("ANNUAL_VISIT_COUNT", $currentDate);
            $targetDistance = $distanceGoal ? $distanceGoal->getTargetAchievement() : null;

            $visitedLgthYear = $visitedLgthYear->getQuery()->getSingleScalarResult();

            return [
                "visitedLgthYear" => $visitedLgthYear ? $visitedLgthYear : 0,
                "annualVisitLgth" => $targetDistance ?? 0,
            ];
        } elseif ($type === "team-covered-distance") {
            // la longueur visitée de chaque équipe pendant l'année en cours, où elle est comparée à la longueur totale des départements de l'équipe * 2 ( autrement dit, chaque équipe devrait passer dans chaque département deux fois par an).
            $teams = $this->em->getRepository(Team::class)->getUserTeams();

            $teamCoveredDistance = $this->em->createQueryBuilder()
                ->select(
                    'IDENTITY(d.team) as TEAM',
                    'SUM(v.edge_set_length) / 1000 as VISIT_LENGTH'
                )
                ->from('App\Entity\Visite', 'v')
                ->innerJoin('v.node_a', 'n')
                ->innerJoin('n.department', 'd')
                ->where('YEAR(v.date) = :year')
                ->setParameter('year', $year)
                ->groupBy('d.team')
                ->getQuery()
                ->getResult();

            $teamDepartementLength = $this->em->createQueryBuilder()
                ->select(
                    'IDENTITY(d.team) as TEAM',
                    '(SUM(d.longueur) * 2)/1000 as DEPARTMENT_LENGTH'
                )
                ->from('App\Entity\Department', 'd')
                ->innerJoin('d.team', 't')
                ->groupBy('d.team')
                ->getQuery()
                ->getResult();

            $teamsStats = [];
            foreach ($teams as $team) {
                $teamId = $team->getId();
                $COVERED_DISTANCE = current(array_filter($teamCoveredDistance, function ($item) use ($teamId) {
                    return $item['TEAM'] === (string) $teamId;
                }))["VISIT_LENGTH"] ?? 0;
                $TARGET_DISTANCE = current(array_filter($teamDepartementLength, function ($item) use ($teamId) {
                    return $item['TEAM'] === (string) $teamId;
                }))["DEPARTMENT_LENGTH"] ?? 0;
                $teamsStats[] = [
                    "name" => $team->getTitre(),
                    "progress" => round(($COVERED_DISTANCE / $TARGET_DISTANCE) * 100, 2),
                    "covered" => $COVERED_DISTANCE,
                    "target" => $TARGET_DISTANCE,
                ];
            }

            return $teamsStats;
        } elseif ($type === "visits-per-communes") {
            return $this->VistesByCommune();
        }

    }
    public function checkAccess($queryBuilder)
    {
        $user = $this->security->getUser();
        $roles = $user->getRoles();

        if (in_array('ROLE_SUPER_ADMIN', $roles)) {
            return $queryBuilder;
        }

        if (
            in_array('ROLE_ADMIN', $roles)
        ) {
            // Retrieve the user's dp
            $dp = $user->getTeam()->getDps();
            // admin can see only data of his Dp
            $queryBuilder
                ->andWhere('t.dps = :dp')
                ->setParameter('dp', $dp);
        } else {
            // user can see only data of his team
            $userTeam = $user->getTeam();
            $queryBuilder
                ->andWhere('t = :userTeam')
                ->setParameter('userTeam', $userTeam);
        }
        return $queryBuilder;
    }

}