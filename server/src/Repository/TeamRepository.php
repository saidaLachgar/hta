<?php

namespace App\Repository;

use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
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
                'COUNT(a.id) as TOTAL_ANOMALIES'
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
                'COUNT(a.id) as TOTAL_ANOMALIES'
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

    public function filterDate($query, $dateStart, $dateEnd, $attr)
    {
        if ($dateStart) {
            $query
                ->andWhere($attr . ' >= :dateStart')
                ->setParameter('dateStart', $dateStart);
        }
        if ($dateStart) {
            $query
                ->andWhere($attr . ' <= :dateEnd')
                ->setParameter('dateEnd', $dateEnd);
        }
        return $query;
    }

    //  -> Total des interruptions -  Total des Vistes -  Total des anomalies
    public function getTotalActivity($dateStart, $dateEnd, $team)
    {
        $anomalyTotal = $this->em->createQueryBuilder()
            ->from('App\Entity\Anomaly', 'a')
            ->select('COUNT(a.id)')
            ->leftJoin('a.edge', 'e')
            ->leftJoin('e.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team);
        $anomalyTotal = $this->filterDate($anomalyTotal, $dateStart, $dateEnd, "t.createdAt");
        $anomalyTotal = $anomalyTotal->getQuery()->getSingleScalarResult();


        $visitsTotal = $this->em->createQueryBuilder()
            ->from('App\Entity\Visite', 'v')
            ->select('COUNT(v.id)')
            ->innerJoin('v.node_a', 'n')
            ->leftJoin('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team);
        $visitsTotal = $this->filterDate($visitsTotal, $dateStart, $dateEnd, "v.date");
        $visitsTotal = $visitsTotal->getQuery()->getSingleScalarResult();

        $missionTotal = $this->em->createQueryBuilder()
            ->from('App\Entity\Mission', 'm')
            ->select('COUNT(m.id)')
            ->innerJoin('m.node_a', 'n')
            ->leftJoin('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team);
        $missionTotal = $this->filterDate($missionTotal, $dateStart, $dateEnd, "m.dateStart");
        $missionTotal = $missionTotal->getQuery()->getSingleScalarResult();
        return [
            "Total des interruptions" => $anomalyTotal,
            "Total des Vistes" => $visitsTotal,
            "Total des anomalies" => $missionTotal
        ];
    }

    //  -> CausesAndType -> Causes des interruptions + Interruptions par type
    public function getCausesAndType($dateStart, $dateEnd, $team)
    {
        $queryBuilder = $this->em->createQueryBuilder()
            ->select(
                // Total missions count for each type 
                'SUM(CASE WHEN m.type = true THEN 1 ELSE 0 END) as Incident',
                'SUM(CASE WHEN m.type = false THEN 1 ELSE 0 END) as Coupeur',
            )
            ->from('App\Entity\Mission', 'm')
            ->innerJoin('m.node_a', 'n')
            ->leftJoin('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team);

        $queryBuilder = $this->filterDate($queryBuilder, $dateStart, $dateEnd, "m.dateStart");

        // Total count of missions for each cause
        $causesList = ["Défauts matériels", "Telescopare", "Intenpaire", "Cause inconnue"];
        foreach ($causesList as $key => $cause) {
            $queryBuilder->addSelect(
                "SUM(CASE WHEN m.causes = :val_parm_{$key} THEN 1 ELSE 0 END) as Cause_{$key}"
            )
                ->setParameter("val_parm_" . $key, $key + 1);
        }

        $results = $queryBuilder->getQuery()->getResult()[0];
        // dd($results);
        return $results;

    }
    //  -> DMS, IFS, END
    public function getInterruptionsPerformance($dateStart, $dateEnd, $team)
    {

        $departments = $this->em->createQueryBuilder()
            ->select('d.id, d.titre')
            ->from('App\Entity\Department', 'd')
            ->where('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->getQuery()
            ->getResult();
        // dd($departments);

        $result = [];

        // if only end date or start date get data of that date month only
        // if none given get this year data
        if ($dateStart && $dateEnd) {
            $dateStart = \DateTime::createFromFormat('Y-m-d', $dateStart);
            $dateEnd = \DateTime::createFromFormat('Y-m-d', $dateEnd);
        } elseif ($dateStart) {
            //  if only $dateStart was supplied create a date object and $dateEnd should be the same date as $dateStart but with last day of the month of $dateStart.

            $dateStart = \DateTime::createFromFormat('Y-m-d', $dateStart);
            $dateEnd = clone $dateStart;
            // last day of the original month
            $dateEnd = $dateEnd->sub(new \DateInterval('P1D'));
        } elseif ($dateEnd) {
            // if only $dateEnd was supplied create a date object and $dateStart should be the same date as $dateEnd but with 1st day of the month of $dateEnd.

            $dateEnd = \DateTime::createFromFormat('Y-m-d', $dateEnd);
            $dateStart = clone $dateEnd;
            // 1st day of the same month
            $dateStart->setDate($dateStart->format('Y'), $dateStart->format('m'), 1);
        } else {
            // if none was given, $dateStart is the 1st day of the current year and $dateEnd is the last day of current year
            $dateStart = new \DateTime('first day of January this year');
            $dateEnd = new \DateTime('last day of December this year');
        }

        // Calculate the difference in days between the start and end dates
        $dateInterval = $dateStart->diff($dateEnd);
        $daysDifference = $dateInterval->days;

        // Determine whether to group by month or by day
        $groupByMonth = $daysDifference > 30;

        // dump($daysDifference);
        // dump($groupByMonth);
        // exit;

        $currentDate = clone $dateStart;

        while ($currentDate <= $dateEnd) {
            $groupKey = $groupByMonth ? $currentDate->format('Y-m') : $currentDate->format('Y-m-d');
            $day = $currentDate->format('d');
            $month = $currentDate->format('m');
            $year = $currentDate->format('Y');
            foreach ($departments as $department) {

                $qb = $this->em->createQueryBuilder()
                    ->select(
                        'SUM(m.DMS) as DMS_TOTAL',
                        'SUM(m.END) as END_TOTAL',
                        'SUM(m.IFS) as IFS_TOTAL'
                    )
                    ->from('App\Entity\Mission', 'm')
                    ->innerJoin('m.node_a', 'n')
                    ->innerJoin('n.department', 'd')
                    ->where('d.id = :department')
                    ->andWhere('YEAR(m.dateStart) = :year')
                    ->andWhere('MONTH(m.dateStart) = :month')
                    ->setParameter('department', $department['id'])
                    ->setParameter('year', $year)
                    ->setParameter('month', $month);

                if (!$groupByMonth) {
                    $qb = $qb->andWhere('DAY(m.dateStart) = :day')
                        ->setParameter('day', $day);
                }

                $qb = $qb->getQuery()->getResult();

                $result[$department['titre']][] = [
                    "TIMEFRAME" => $groupKey,
                    "DMS_TOTAL" => $qb[0]['DMS_TOTAL'] ?? 0,
                    "END_TOTAL" => $qb[0]['END_TOTAL'] ?? 0,
                    "IFS_TOTAL" => $qb[0]['IFS_TOTAL'] ?? 0,
                ];
            }

            $currentDate->add(new \DateInterval('P1' . ($groupByMonth ? 'M' : 'D')));
        }
        // dd($result);
        return $result;

    }
    //  -> Taux de correction des anomalies
    public function getAnomalyCorrection($dateStart, $dateEnd, $team)
    {
        $departments = $this->em->createQueryBuilder()
            ->select('d.id, d.titre')
            ->from('App\Entity\Department', 'd')
            ->where('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->getQuery()
            ->getResult();
        $qb = $this->em->createQueryBuilder()
            ->select('d.id as DEPARTMENT', 'SUM(CASE WHEN a.status = true THEN 1 ELSE 0 END) as ACHIEVED_ANOMALIES', 'COUNT(a.id) as TOTAL_ANOMALIES')
            ->from('App\Entity\Anomaly', 'a')
            ->innerJoin('a.edge', 'e')
            ->innerJoin('e.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->groupBy('d.id');
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "a.createdAt");
        $qb = $qb->getQuery()->getResult();


        $result = [];

        foreach ($departments as $department) {
            $data = array_filter($qb, function ($item) use ($department) {
                return $item['DEPARTMENT'] === $department['id'];
            });

            $result[] = [
                "DEPARTMENT" => $department['titre'],
                "ACHIEVED_ANOMALIES" => $data[0]["ACHIEVED_ANOMALIES"] ?? 0,
                "TOTAL_ANOMALIES" => $data[0]["TOTAL_ANOMALIES"] ?? 0,
            ];
        }

        return $result;

    }
    //  -> Nombre de kilomètres visités par commune
    public function getKMVisitedPerCommune($dateStart, $dateEnd, $team)
    {
        $Communes = $this->em->createQueryBuilder()
            ->select(
                'c.id as ID, c.titre as TITLE'
            )
            ->from('App\Entity\Commune', 'c')
            ->join('App\Entity\Edge', 'e', Join::WITH, 'c = e.commune')
            ->join('e.node_a', 'n')
            ->join('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->groupBy('c.id')
            ->getQuery()
            ->getResult();
        $communesIds = array_map(function ($item) {
            return isset($item["ID"]) ? $item["ID"] : null;
        }, $Communes);

        $nbSupport = $this->em->createQueryBuilder()
            ->from('App\Entity\Visite', 'v')
            ->select('c.id AS COMMUNE, SUM(v.nbSupport) as SUPPORTS')

            ->join('v.node_a', 'n')
            ->join('n.commune', 'c')

            ->andWhere('c.id IN (:communesIds)')
            ->setParameter('communesIds', $communesIds);

        $nbSupport = $this->filterDate($nbSupport, $dateStart, $dateEnd, "v.date");
        $nbSupport = $nbSupport->getQuery()->getResult();

        $result = [];
        foreach ($Communes as $Commune) {
            $CommuneId = $Commune["ID"];

            $data = array_filter($nbSupport, function ($item) use ($CommuneId) {
                return $item['COMMUNE'] === $CommuneId;
            });

            $result[] = [
                "COMMUNE" => $Commune["TITLE"],
                "CLIENTS" => !empty($data) ? floatval($data[0]["CLIENTS"]) * 100 : 0,
            ];
        }
        return $result;
    }
    //  -> Le nombre de clients coupés par communauté
    public function getClientCutsByCommune($dateStart, $dateEnd, $team)
    {
        $Communes = $this->em->createQueryBuilder()
            ->select(
                'c.id as ID, c.titre as TITLE'
            )
            ->from('App\Entity\Commune', 'c')
            ->join('App\Entity\Edge', 'e', Join::WITH, 'c = e.commune')
            ->join('e.node_a', 'n')
            ->join('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->groupBy('c.id')
            ->getQuery()
            ->getResult();
        $CommunesIds = array_map(function ($item) {
            return isset($item["ID"]) ? $item["ID"] : null;
        }, $Communes);


        $MissionCommune = $this->em->createQueryBuilder()
            ->from('App\Entity\MissionCommune', 'mc')
            ->select('c.id AS COMMUNE, SUM(mc.clientCount) AS CLIENTS')

            ->join('mc.Commune', 'c')
            ->join('mc.mission', 'm')

            ->andWhere('c.id IN (:communesIds)')
            ->setParameter('communesIds', $CommunesIds);

        $MissionCommune = $this->filterDate($MissionCommune, $dateStart, $dateEnd, "m.dateStart");
        $MissionCommune = $MissionCommune->groupBy('c.id')->getQuery()->getResult();

        $result = [];
        foreach ($Communes as $Commune) {
            $CommuneId = $Commune["ID"];

            $data = array_filter($MissionCommune, function ($item) use ($CommuneId) {
                return $item['COMMUNE'] === $CommuneId;
            });

            $result[] = [
                "COMMUNE" => $Commune["TITLE"],
                "CLIENTS" => $data[0]["CLIENTS"] ?? 0,
            ];
        }
        return $result;
    }

    // -> Le nombre des fois un post copée + nb des hours
    public function getPostInterruptionInfo($dateStart, $dateEnd, $poste)
    {
        // stored posts of mission
        $qb = $this->em->createQueryBuilder()
            ->from('App\Entity\MissionPostes', 'mp')
            ->select(
                // Le nombre des fois un post copée
                'SUM(mp.poste) AS TIMES',
                // nb des hours
                'SUM(TIMESTAMPDIFF(SECOND, m.dateStart, m.dateEnd)) as Duration',
            )

            ->join('mp.mission', 'm')
            ->andWhere('mp.poste = :poste')
            ->setParameter('poste', $poste);

        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateStart");
        $qb = $qb->getQuery()->getResult();

        return $qb;
    }
}