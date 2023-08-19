<?php

namespace App\Repository;

use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @extends ServiceEntityRepository<Team>
 *
 * @method Team|null find($id, $lockMode = null, $lockVersion = null)
 * @method Team|null findOneBy(array $criteria, array $orderBy = null)
 * @method Team[]    findAll()
 * @method Team[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class TeamRepository extends ServiceEntityRepository
{
    private $em;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager)
    {
        parent::__construct($registry, Team::class);
        $this->em = $entityManager;
    }

    public function add(Team $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Team $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getTeamsData(): array
    {
        $teams = $this->findAll();
        $date = new \DateTime();
        $current_year = $date->format('Y');
        $current_month = $date->format('m');

        $anomalyStats = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'SUM(CASE WHEN a.status = true THEN 1 ELSE 0 END) as ACHIEVED_ANOMALIES',
                'SUM(CASE WHEN a.status = false THEN 1 ELSE 0 END) as TOTAL_ANOMALIES'
            )
            ->from('App\Entity\Anomaly', 'a')
            ->innerJoin('a.edge', 'e')
            ->innerJoin('e.department', 'd')
            ->groupBy('d.team')
            ->getQuery()
            ->getResult();

        $missionStats = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'SUM(CASE WHEN m.type = true THEN 1 ELSE 0 END) AS INCIDENTS_COUNT',
                'SUM(CASE WHEN m.type = false THEN 1 ELSE 0 END) AS COUPEUR_COUNT',
                "SUM(CAST(SUBSTRING_INDEX(m.nbClients, '/', 1) AS UNSIGNED)) AS CLIENTS_COUNT",
                'SUM(m.nbPostes) as POSTES_TOTAL',
                'SUM(m.DMS) as DMS_TOTAL',
                'SUM(m.END) as END_TOTAL',
                'SUM(m.IFS) as IFS_TOTAL'
            )
            ->from('App\Entity\Mission', 'm')
            ->innerJoin('m.node_a', 'n')
            ->innerJoin('n.department', 'd')
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :month')
            ->groupBy('d.team')
            ->setParameter('year', $current_year)
            ->setParameter('month', $current_month)
            ->getQuery()
            ->getResult();

        $visiteStats = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'SUM(v.nbSupport) * 100 as VISIT_LENGTH'
            )
            ->from('App\Entity\Visite', 'v')
            ->innerJoin('v.node_a', 'n')
            ->innerJoin('n.department', 'd')
            ->where('YEAR(v.date) = :year')
            ->groupBy('d.team')
            ->setParameter('year', $current_year)
            ->getQuery()
            ->getResult();


        $teamsStats = [];
        foreach ($teams as $team) {
            $teamId = $team->getId();

            $teamAnomalyStats = array_filter($anomalyStats, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            });

            $teamMissionStats = array_filter($missionStats, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            });

            $teamVisiteStats = array_filter($visiteStats, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            });

            // Calculate other statistics based on $teamAnomalyStats and $teamMissionStats

            $teamsStats[] = [
                "TEAM" => $team->getTitre(),
                "VISIT_LENGTH" => $teamVisiteStats[0]["VISIT_LENGTH"] ?? 0,
                "ACHIEVED_ANOMALIES" => $teamAnomalyStats[0]["ACHIEVED_ANOMALIES"] ?? 0,
                "TOTAL_ANOMALIES" => $teamAnomalyStats[0]["TOTAL_ANOMALIES"] ?? 0,
                "INCIDENTS_COUNT" => $teamMissionStats[0]["INCIDENTS_COUNT"] ?? 0,
                "COUPEUR_COUNT" => $teamMissionStats[0]["COUPEUR_COUNT"] ?? 0,
                "CLIENTS_COUNT" => $teamMissionStats[0]["CLIENTS_COUNT"] ?? 0,
                "IFS_TOTAL" => $teamMissionStats[0]["IFS_TOTAL"] ?? 0,
                "DMS_TOTAL" => $teamMissionStats[0]["DMS_TOTAL"] ?? 0,
                "END_TOTAL" => $teamMissionStats[0]["END_TOTAL"] ?? 0,
                "POSTES_TOTAL" => $teamMissionStats[0]["POSTES_TOTAL"] ?? 0
            ];
        }
        // dd($teamsStats);
        // exit;
        return $teamsStats;
    }

    public function getTeamsMonthlyData(): array
    {
        $teams = $this->findAll();
        $currentDate = new \DateTime();
        $startDate = clone $currentDate;
        $startDate->sub(new \DateInterval('P12M'));
        $monthlyStats = [];
        while ($startDate <= $currentDate) {
            $month = $startDate->format('m');
            $year = $startDate->format('Y');

            $missionStats = $this->em->createQueryBuilder()
                ->select(
                    'IDENTITY(d.team) as TEAM',
                    'SUM(m.DMS) as DMS_TOTAL',
                    'SUM(m.END) as END_TOTAL',
                    'SUM(m.IFS) as IFS_TOTAL'
                )
                ->from('App\Entity\Mission', 'm')
                ->innerJoin('m.node_a', 'n')
                ->innerJoin('n.department', 'd')
                ->andWhere('YEAR(m.dateStart) = :year')
                ->andWhere('MONTH(m.dateStart) = :month')
                ->setParameter('year', $year)
                ->setParameter('month', $month)
                ->getQuery()
                ->getResult();

            foreach ($teams as $team) {
                $teamId = $team->getId();

                $teamMissionStats = array_filter($missionStats, function ($item) use ($teamId) {
                    return $item['TEAM'] === (string) $teamId;
                });

                $monthlyStats[$team->getTitre()][] = [
                    "MONTH" => $month,
                    "IFS_TOTAL" => $teamMissionStats[0]['IFS_TOTAL'] ?? 0,
                    "DMS_TOTAL" => $teamMissionStats[0]['DMS_TOTAL'] ?? 0,
                    "END_TOTAL" => $teamMissionStats[0]['END_TOTAL'] ?? 0,
                ];
            }

            $startDate->add(new \DateInterval('P1M'));
        }
        return $monthlyStats;
    }

    public function getTeamsDMS(string $timeframe): array
    {
        $teams = $this->findAll();
        $currentDate = new \DateTime();
        $result = [];

        if ($timeframe === "year") {
            $startDate = clone $currentDate;
            $startDate->sub(new \DateInterval('P12M'));

            while ($startDate <= $currentDate) {
                $month = $startDate->format('m');
                $year = $startDate->format('Y');

                $missionStats = $this->em->createQueryBuilder()
                    ->select(
                        'IDENTITY(d.team) as TEAM',
                        'SUM(m.DMS) as DMS_TOTAL',
                    )
                    ->from('App\Entity\Mission', 'm')
                    ->innerJoin('m.node_a', 'n')
                    ->innerJoin('n.department', 'd')
                    ->andWhere('YEAR(m.dateStart) = :year')
                    ->andWhere('MONTH(m.dateStart) = :month')
                    ->setParameter('year', $year)
                    ->setParameter('month', $month)
                    ->getQuery()
                    ->getResult();

                foreach ($teams as $team) {
                    $teamId = $team->getId();

                    $teamMissionStats = array_filter($missionStats, function ($item) use ($teamId) {
                        return $item['TEAM'] === (string) $teamId;
                    });

                    $result[$team->getTitre()][] = [
                        "MONTH" => $month,
                        "DMS_TOTAL" => $teamMissionStats[0]['DMS_TOTAL'] ?? 0,
                    ];
                }

                $startDate->add(new \DateInterval('P1M'));
            }
        } elseif ($timeframe === "month") {
            $startDate = clone $currentDate;
            $startDate->sub(new \DateInterval('P30D'));

            while ($startDate <= $currentDate) {
                $day = $startDate->format('d');
                $month = $startDate->format('m');
                $year = $startDate->format('Y');

                $missionStats = $this->em->createQueryBuilder()
                    ->select(
                        'IDENTITY(d.team) as TEAM',
                        'SUM(m.DMS) as DMS_TOTAL'
                    )
                    ->from('App\Entity\Mission', 'm')
                    ->innerJoin('m.node_a', 'n')
                    ->innerJoin('n.department', 'd')
                    ->where('YEAR(m.dateStart) = :year')
                    ->andWhere('MONTH(m.dateStart) = :month')
                    ->andWhere('DAY(m.dateStart) = :day')
                    ->setParameter('year', $year)
                    ->setParameter('month', $month)
                    ->setParameter('day', $day)
                    ->getQuery()
                    ->getResult();

                foreach ($teams as $team) {
                    $teamId = $team->getId();

                    $teamMissionStats = array_filter($missionStats, function ($item) use ($teamId) {
                        return $item['TEAM'] === (string) $teamId;
                    });

                    $result[$team->getTitre()][] = [
                        "DAY" => $day,
                        "DMS_TOTAL" => $teamMissionStats[0]['DMS_TOTAL'] ?? 0,
                    ];
                }

                $startDate->add(new \DateInterval('P1D'));
            }
        }

        return $result;
    }

    public function getTeamsAnomalies(): array
    {
        $teams = $this->findAll();

        $anomalyStats = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'SUM(CASE WHEN a.status = true THEN 1 ELSE 0 END) as ACHIEVED_ANOMALIES',
                'SUM(CASE WHEN a.status = false THEN 1 ELSE 0 END) as TOTAL_ANOMALIES'
            )
            ->from('App\Entity\Anomaly', 'a')
            ->innerJoin('a.edge', 'e')
            ->innerJoin('e.department', 'd')
            ->groupBy('d.team')
            ->getQuery()
            ->getResult();

        $teamsAnomalyStats = [];
        foreach ($teams as $team) {
            $teamId = $team->getId();

            // Search for the statistics related to this team
            $teamAnomalyStats = array_filter($anomalyStats, function ($item) use ($teamId) {
                return $item['TEAM'] === $teamId;
            });

            $teamsAnomalyStats[] = [
                "TEAM" => $team->getTitre(),
                "ACHIEVED_ANOMALIES" => $teamAnomalyStats[0]["ACHIEVED_ANOMALIES"] ?? 0,
                "TOTAL_ANOMALIES" => $teamAnomalyStats[0]["TOTAL_ANOMALIES"] ?? 0,
            ];
        }
        return $teamsAnomalyStats;
    }

}