<?php

namespace App\Repository;

use App\Entity\Mission;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\Team;

/**
 * @extends ServiceEntityRepository<Mission>
 *
 * @method Mission|null find($id, $lockMode = null, $lockVersion = null)
 * @method Mission|null findOneBy(array $criteria, array $orderBy = null)
 * @method Mission[]    findAll()
 * @method Mission[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MissionRepository extends ServiceEntityRepository
{
    private $em;
    private $security;
    public function __construct(ManagerRegistry $registry, EntityManagerInterface $entityManager, Security $security)
    {
        parent::__construct($registry, Mission::class);
        $this->em = $entityManager;
        $this->security = $security;
    }

    public function add(Mission $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Mission $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }
   
    public function getMissionsStats(int $month): array
    {
        $currentYear = date('Y');
        $date = new \DateTime();

        // Check if the given month has occurred in the current year
        $current_month = (int) $date->format('m');
        if ($month > $current_month) {
            // If the month hasn't occurred yet, adjust the year to the previous one
            $currentYear--;
        }

        // get previous month
        $prevYear = $currentYear;
        $prevMonth = $month - 1;
        // if previous month is from the previous year 
        if ($prevMonth === 0) {
            $prevMonth = 12;
            $prevYear--;
        }

        // data of parent missions only
        $queryBuilderParents = $this->createQueryBuilder('m')
            ->select(
                // Total missions count for the given month
                'COUNT(m.id) as Total',
                // Total missions count for each type 
                'SUM(CASE WHEN m.type = true THEN 1 ELSE 0 END) as Coupeur',
                'SUM(CASE WHEN m.type = false THEN 1 ELSE 0 END) as Incident',
            )
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :month')
            ->andWhere('m.parent is null')
            ->setParameter('year', $currentYear)
            ->setParameter('month', $month);


        // data of all missions
        $queryBuilderAll = $this->createQueryBuilder("m")
            ->select(
                // Average duration of the given month
                'AVG(TIMESTAMPDIFF(SECOND, m.dateStart, m.dateEnd)) as Duration'
            )
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :month')
            ->setParameter('year', $currentYear)
            ->setParameter('month', $month);


        // Total count of missions for each cause
        // List of causes to consider
        $causesList = ["Défauts matériels", "Telescopare", "Intenpaire", "Cause inconnue"];
        foreach ($causesList as $key => $cause) {
            $queryBuilderAll->addSelect(
                "SUM(CASE WHEN m.causes = :val_parm_{$key} THEN 1 ELSE 0 END) as Cause_{$key}"
            )
                ->setParameter("val_parm_" . $key, $key + 1);
        }

        // Average duration of prev month 
        $prevDuration = $this->createQueryBuilder("m")
            ->select(
                'AVG(TIMESTAMPDIFF(SECOND, m.dateStart, m.dateEnd)) as prevDuration'
            )
            ->where('YEAR(m.dateStart) = :year')
            ->andWhere('MONTH(m.dateStart) = :prevMonth')
            ->setParameter('year', $prevYear)
            ->setParameter('prevMonth', $prevMonth);

        // merge results
        $r1 = $this->checkAccess($queryBuilderParents)
            ->getQuery()->getResult()[0];
        $r2 = $this->checkAccess($queryBuilderAll)
            ->getQuery()->getResult()[0];
        $r3 = $this->checkAccess($prevDuration)
            ->getQuery()->getResult()[0];

        return array_merge($r1, $r2, $r3);
    }

    public function checkAccess($queryBuilder)
    {
        $user = $this->security->getUser();
        $roles = $user->getRoles();

        if (in_array('ROLE_SUPER_ADMIN', $roles)) {
            return $queryBuilder;
        }

        $queryBuilder->join('m.node_a', 'n')
            ->join('n.department', 'd')
            ->join('d.team', 't');

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