<?php

namespace App\Repository;

use App\Entity\Team;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr\Join;
use Doctrine\Persistence\ManagerRegistry;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Security\Core\Security;


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
    private $security;

    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager, Security $security)
    {
        parent::__construct($registry, Team::class);
        $this->em = $entityManager;
        $this->security = $security;
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

    function getUserTeams()
    {
        $user = $this->security->getUser();
        $roles = $user->getRoles();
        if (in_array("ROLE_SUPER_ADMIN", $roles)) {
            return $this->findAll();
        } elseif (in_array('ROLE_ADMIN', $roles)) {
            // Retrieve the user's dp
            $dp = $user->getTeam()->getDps();

            // admin can see only data of his Dp
            return $this->createQueryBuilder('t')
                ->andWhere('t.dps = :dp')
                ->setParameter('dp', $dp)
                ->getQuery()
                ->getResult();

        } else {
            return [$this->security->getUser()->getTeam()];
        }
        
    }

    function filterDate($query, $dateStart, $dateEnd, $attr)
    {
        $dates = $this->getDates($dateStart, $dateEnd, true);
        $dateStart = $dates[0];
        $dateEnd = $dates[1];
        if ($dateStart) {
            $query
                ->andWhere($attr . ' >= :dateStart')
                ->setParameter('dateStart', $dateStart);
        }
        if ($dateEnd) {
            $query
                ->andWhere($attr . ' <= :dateEnd')
                ->setParameter('dateEnd', $dateEnd);
        }
        return $query;
    }
    function getDates($dateStart, $dateEnd, $includeStart = false)
    {
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
        if ($includeStart)
            $dateStart->modify("-1 day");
        return [$dateStart, $dateEnd];
    }

    // [ROLE BASED]
    public function getTeamsData(int $month): array
    {
        $teams = $this->getUserTeams();
        $date = new \DateTime();
        $current_year = $date->format('Y');

        // Check if the given month has occurred in the current year
        $current_month = (int) $date->format('m');
        if ($month > $current_month) {
            // If the month hasn't occurred yet, adjust the year to the previous one
            $current_year--;
        }

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

        $missionStatsAll = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                "SUM(CAST(SUBSTRING_INDEX(m.nbClients, '/', 1) AS UNSIGNED)) AS CLIENTS_COUNT",
                // 'SUM(m.DMS) as DMS_TOTAL',
                // 'SUM(m.END) as END_TOTAL',
                // 'SUM(m.IFS) as IFS_TOTAL'
                // for in incident only
                'SUM(CASE WHEN m.type = true THEN m.DMS ELSE 0 END) as DMS_TOTAL',
                'SUM(CASE WHEN m.type = true THEN m.END ELSE 0 END) as END_TOTAL',
                'SUM(CASE WHEN m.type = true THEN m.IFS ELSE 0 END) as IFS_TOTAL',
            )
            ->from('App\Entity\Mission', 'm')
            ->leftJoin('m.node_a', 'n')
            ->leftJoin('n.department', 'd')
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :month')
            ->groupBy('d.team')
            ->setParameter('year', $current_year)
            ->setParameter('month', $month)
            ->getQuery()
            ->getResult();


        $postesStats = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'COUNT(p.id) as POSTES_TOTAL'
            )
            ->from('App\Entity\Mission', 'm')
            ->join('m.postes', 'p')
            ->join('m.node_a', 'n')
            ->join('n.department', 'd')
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :month')
            ->setParameter('year', $current_year)
            ->setParameter('month', $month)
            ->groupBy('d.team')
            ->getQuery()
            ->getResult();
        // dd($teamPostesStats);

        // data of parent missions only
        $missionStatsParents = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'SUM(CASE WHEN m.type = true THEN 1 ELSE 0 END) AS INCIDENTS_COUNT',
                'SUM(CASE WHEN m.type = false THEN 1 ELSE 0 END) AS COUPEUR_COUNT',
            )
            ->from('App\Entity\Mission', 'm')
            ->innerJoin('m.node_a', 'n')
            ->innerJoin('n.department', 'd')
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :month')
            ->andWhere('m.parent is null')
            ->groupBy('d.team')
            ->setParameter('year', $current_year)
            ->setParameter('month', $month)
            ->getQuery()
            ->getResult();

        $visiteStats = $this->em->createQueryBuilder()
            ->select(
                'IDENTITY(d.team) as TEAM',
                'SUM(v.edge_set_length) / 1000 as VISIT_LENGTH'
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

            $teamAnomalyStats = current(array_filter($anomalyStats, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            }));

            $teamMissionStatsAll = current(array_filter($missionStatsAll, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            }));

            $teamPostesStats = current(array_filter($postesStats, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            }));

            $teamMissionStatsParents = current(array_filter($missionStatsParents, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            }));

            $teamVisiteStats = current(array_filter($visiteStats, function ($item) use ($teamId) {
                return $item['TEAM'] === (string) $teamId;
            }));
            // dump($teamAnomalyStats);
            // dump($teamMissionStats);
            // dump($teamVisiteStats);
            // Calculate other statistics based on $teamAnomalyStats and $teamMissionStats

            $teamsStats[] = [
                "TEAM" => $team->getTitre(),
                "VISIT_LENGTH" => $teamVisiteStats["VISIT_LENGTH"] ?? 0,
                "ACHIEVED_ANOMALIES" => $teamAnomalyStats["ACHIEVED_ANOMALIES"] ?? 0,
                "TOTAL_ANOMALIES" => $teamAnomalyStats["TOTAL_ANOMALIES"] ?? 0,
                "INCIDENTS_COUNT" => $teamMissionStatsParents["INCIDENTS_COUNT"] ?? 0,
                "COUPEUR_COUNT" => $teamMissionStatsParents["COUPEUR_COUNT"] ?? 0,
                "CLIENTS_COUNT" => $teamMissionStatsAll["CLIENTS_COUNT"] ?? 0,
                "IFS_TOTAL" => $teamMissionStatsAll["IFS_TOTAL"] ?? 0,
                "DMS_TOTAL" => $teamMissionStatsAll["DMS_TOTAL"] ?? 0,
                "END_TOTAL" => $teamMissionStatsAll["END_TOTAL"] ?? 0,
                "POSTES_TOTAL" => $teamPostesStats["POSTES_TOTAL"] ?? 0
            ];
        }
        // dd($teamsStats);
        // exit;
        return $teamsStats;
    }

    // [ROLE BASED]
    public function getTeamsMonthlyData($property, $type): array
    {
        $teams = $this->getUserTeams();
        $currentDate = new \DateTime();
        $startDate = clone $currentDate;
        $startDate->sub(new \DateInterval('P11M'));
        $monthlyStats = [];
        while ($startDate <= $currentDate) {
            $month = $startDate->format('m');
            $year = $startDate->format('Y');

            $missionStats = $this->em->createQueryBuilder()
                ->select(
                    'IDENTITY(d.team) as TEAM',
                    'SUM(m.' . $property . ') as ' . $property,
                )
                ->from('App\Entity\Mission', 'm')
                ->innerJoin('m.node_a', 'n')
                ->innerJoin('n.department', 'd')
                ->andWhere('YEAR(m.dateStart) = :year')
                ->andWhere('MONTH(m.dateStart) = :month')
                ->andWhere('m.type = :type')
                ->setParameter('year', $year)
                ->setParameter('month', $month)
                ->setParameter('type', $type === 'true' ? true : false)
                ->groupBy('d.team')
                ->getQuery()
                ->getResult();
            // dump($missionStats);
            foreach ($teams as $team) {
                $teamId = $team->getId();

                $teamMissionStats = current(array_filter($missionStats, function ($item) use ($teamId) {
                    return $item['TEAM'] === (string) $teamId;
                }));

                $monthlyStats[$team->getTitre()][] = [
                    "MONTH" => $month,
                    $property => $teamMissionStats[$property] ?? 0,
                ];
            }

            $startDate->add(new \DateInterval('P1M'));
        }
        // exit;
        return $monthlyStats;
    }

    // [ROLE BASED]
    public function getTeamsDMS(string $timeframe): array
    {
        $teams = $this->getUserTeams();
        $currentDate = new \DateTime();
        $result = [];

        if ($timeframe === "year") {
            $startDate = clone $currentDate;
            $startDate->sub(new \DateInterval('P11M'));

            while ($startDate <= $currentDate) {
                $month = $startDate->format('m');
                $year = $startDate->format('Y');
                // dump($year."-".$month);

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
                    ->groupBy('d.team')
                    ->getQuery()
                    ->getResult();
                // dd($missionStats);
                foreach ($teams as $team) {
                    $teamId = $team->getId();

                    $teamMissionStats = current(array_filter($missionStats, function ($item) use ($teamId) {
                        return $item['TEAM'] === (string) $teamId;
                    }));

                    $result[$team->getTitre()][] = [
                        "MONTH" => $month,
                        "DMS_TOTAL" => $teamMissionStats['DMS_TOTAL'] ?? 0,
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
                    ->groupBy('d.team')
                    ->getQuery()
                    ->getResult();

                foreach ($teams as $team) {
                    $teamId = $team->getId();

                    $teamMissionStats = current(array_filter($missionStats, function ($item) use ($teamId) {
                        return $item['TEAM'] === (string) $teamId;
                    }));

                    $result[$team->getTitre()][] = [
                        "DAY" => $day,
                        "DMS_TOTAL" => $teamMissionStats['DMS_TOTAL'] ?? 0,
                    ];
                }

                $startDate->add(new \DateInterval('P1D'));
            }
        }
        // dd($result);
        return $result;
    }

    // [ROLE BASED]
    public function getTeamsAnomalies(): array
    {
        $teams = $this->getUserTeams();

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
            $teamAnomalyStats = current(array_filter($anomalyStats, function ($item) use ($teamId) {
                return $item['TEAM'] == $teamId;
            }));

            $teamsAnomalyStats[] = [
                "TEAM" => $team->getTitre(),
                "ACHIEVED_ANOMALIES" => $teamAnomalyStats["ACHIEVED_ANOMALIES"] ?? 0,
                "TOTAL_ANOMALIES" => $teamAnomalyStats["TOTAL_ANOMALIES"] ?? 0,
            ];
        }

        return $teamsAnomalyStats;
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
        $anomalyTotal = $this->filterDate($anomalyTotal, $dateStart, $dateEnd, "a.createdAt");
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
            ->andWhere('m.parent is null')
            ->setParameter('teamId', $team);
        $missionTotal = $this->filterDate($missionTotal, $dateStart, $dateEnd, "m.dateStart");
        $missionTotal = $missionTotal->getQuery()->getSingleScalarResult();
        return [
            "Total des interruptions" => $missionTotal,
            "Total des Vistes" => $visitsTotal,
            "Total des anomalies" => $anomalyTotal
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
            ->andWhere('m.parent is null')
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

        $results = current($queryBuilder->getQuery()->getResult());
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
        // dump($departments);

        $qb = $this->em->createQueryBuilder();
        $qb = $qb->select(
            'IDENTITY(n.department) as DEPARTMENT',
            'SUM(CASE WHEN m.type = true THEN m.DMS ELSE 0 END) as DMS_TOTAL_INCIDENT',
            'SUM(CASE WHEN m.type = true THEN m.END ELSE 0 END) as END_TOTAL_INCIDENT',
            'SUM(CASE WHEN m.type = true THEN m.IFS ELSE 0 END) as IFS_TOTAL_INCIDENT',

            'SUM(CASE WHEN m.type = false THEN m.DMS ELSE 0 END) as DMS_TOTAL_COUPEUR',
            'SUM(CASE WHEN m.type = false THEN m.END ELSE 0 END) as END_TOTAL_COUPEUR',
            'SUM(CASE WHEN m.type = false THEN m.IFS ELSE 0 END) as IFS_TOTAL_COUPEUR'
        )
            ->from('App\Entity\Mission', 'm')
            ->innerJoin('m.node_a', 'n')
            ->innerJoin('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->groupBy('n.department');
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateStart");
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateEnd");
        $qb = $qb->getQuery()->getResult();

        // dump( $qb->getSQL()); 
        // dump( $qb->getParameters());
        // dump($qb);
        // exit;

        $result = [];

        foreach ($departments as $department) {
            $data = current(array_filter($qb, function ($item) use ($department) {
                return $item['DEPARTMENT'] === (string) $department['id'];
            }));

            // dd($data);

            $result[] = [
                "DEPARTMENT" => $department['titre'],
                "DMS_TOTAL_INCIDENT" => $data["DMS_TOTAL_INCIDENT"] ?? 0,
                "DMS_TOTAL_COUPEUR" => $data["DMS_TOTAL_COUPEUR"] ?? 0,
                "END_TOTAL_INCIDENT" => $data["END_TOTAL_INCIDENT"] ?? 0,
                "END_TOTAL_COUPEUR" => $data["END_TOTAL_COUPEUR"] ?? 0,
                "IFS_TOTAL_INCIDENT" => $data["IFS_TOTAL_INCIDENT"] ?? 0,
                "IFS_TOTAL_COUPEUR" => $data["IFS_TOTAL_COUPEUR"] ?? 0,
            ];
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
            $data = current(array_filter($qb, function ($item) use ($department) {
                return $item['DEPARTMENT'] === $department['id'];
            }));

            $result[] = [
                "DEPARTMENT" => $department['titre'],
                "ACHIEVED_ANOMALIES" => $data["ACHIEVED_ANOMALIES"] ?? 0,
                "TOTAL_ANOMALIES" => $data["TOTAL_ANOMALIES"] ?? 0,
            ];
        }

        return $result;

    }
    //  -> Nombre de kilomètres visités par commune
    public function getKMVisitedPerCommune($dateStart, $dateEnd, $team)
    {
        $result = $this->em->createQueryBuilder()
            ->select('c.titre as COMMUNE, SUM(v.edge_set_length) / 1000 as DISTANCE')
            ->from('App\Entity\Commune', 'c')

            ->leftJoin('c.visites', 'v')
            ->join('c.edges', 'e')
            ->join('e.department', 'd')

            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->groupBy('c.titre');

        $result = $this->filterDate($result, $dateStart, $dateEnd, "v.date");
        $result = $result->getQuery()->getResult();
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
            ->join('c.edges', 'e')
            // ->join('e.node_a', 'n')
            ->join('e.department', 'd')
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

            $data = current(array_filter($MissionCommune, function ($item) use ($CommuneId) {
                return $item['COMMUNE'] === $CommuneId;
            }));

            $result[] = [
                "COMMUNE" => $Commune["TITLE"],
                "CLIENTS" => $data["CLIENTS"] ?? 0,
            ];
        }
        return $result;
    }

    // -> Le nombre des fois un post copée + nb des hours
    public function getPostInterruptionInfo($dateStart, $dateEnd, $poste)
    {
        $qb = $this->em->createQueryBuilder()
            ->from('App\Entity\Mission', 'm')
            ->join('m.postes', 'p')
            ->where('p.id = :posteId')
            ->setParameter('posteId', $poste);
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateStart");
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateEnd");

        // Le nombre des fois un post copée
        //      all missions that related to a given poste as number of time a poste interrupted
        $posteInterruptionCount = clone $qb;
        $posteInterruptionCount = $posteInterruptionCount
            ->select('COUNT(m.id)')
            ->andWhere('m.parent is null')
            ->getQuery()
            ->getSingleScalarResult();

        // nb des hours
        //      get total hours of this missions as the total intrupption
        $postInterruptionDuration = $qb
            ->select('SUM(TIMESTAMPDIFF(SECOND, m.dateStart, m.dateEnd))')
            ->getQuery()
            ->getSingleScalarResult();

        return [
            "Duration" => $postInterruptionDuration,
            "TIMES" => $posteInterruptionCount,
        ];
    }

    // Le nombre de postes coupés par depart
    function getPostesCutsByDepar($dateStart, $dateEnd, $team)
    {
        $departments = $this->em->createQueryBuilder()
            ->select('d.id, d.titre as TITLE')
            ->from('App\Entity\Department', 'd')
            ->where('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->getQuery()
            ->getResult();

        $qb = $this->em->createQueryBuilder();
        $qb = $qb->select(
            'IDENTITY(n.department) as DEPARTMENT',
            'COUNT(p.id) as POSTES_TOTAL'
        )
            ->from('App\Entity\Mission', 'm')
            ->leftJoin('m.postes', 'p')
            ->innerJoin('m.node_a', 'n')
            ->innerJoin('n.department', 'd')
            ->andWhere('d.team = :teamId')
            ->setParameter('teamId', $team)
            ->groupBy('n.department');
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateStart");
        $qb = $this->filterDate($qb, $dateStart, $dateEnd, "m.dateEnd");
        $qb = $qb->getQuery()->getResult();

        $result = [];

        foreach ($departments as $department) {
            $data = current(array_filter($qb, function ($item) use ($department) {
                return $item['DEPARTMENT'] === (string) $department['id'];
            }));

            $result[] = [
                "DEPARTMENT" => $department['TITLE'],
                "POSTES" => $data["POSTES_TOTAL"] ?? 0,
            ];
        }

        return $result;
    }

    // get team's postes
    public function getRelatedPostes($dateStart, $dateEnd, $team)
    {

        $qb = $this->em->createQueryBuilder();
        $qb
            ->select('p.id, p.designation')
            ->from('App\Entity\Poste', 'p')
            ->join('p.node', 'n')
            ->join('n.department', 'd')
            ->join('d.team', 't')
            ->where('t.id = :teamId')
            ->setParameter('teamId', $team);

        return $qb->getQuery()->getResult();
    }
}