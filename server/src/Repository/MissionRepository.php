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
    public function getTotalDMS(): array
    {
        $user = $this->security->getUser();
        // users
        if ($this->security->isGranted('ROLE_USER')) {
            $query = $this->createQueryBuilder('t')
                // ->select('e.titre, d.titre, t.DMS')
                ->select('SUM(t.DMS) as total, MONTH(t.dateStart) AS period')
                ->andWhere('t.dateStart IS NOT NULL')
                ->andWhere('t.DMS IS NOT NULL')
                ->andWhere('t.type = true')
                ->join('t.department', 'd')
                ->join('d.team', 'team')
                ->andWhere('team.id = :id')
                ->setParameter('id', $user->getTeam())
                ->andWhere("t.dateStart <= CURRENT_TIMESTAMP() and t.dateStart >= DATE_SUB(CURRENT_TIMESTAMP(),12,'MONTH')");
                
                $result = [
                    "team" =>$user->getTeam()->getTitre(),
                    "data" => $query->groupBy('period')->getQuery()->getResult()
                ];
        // Admin
        } else {
            $teams = $this->em->getRepository(Team::class)->findAll();
            $dms_year = $this->createQueryBuilder('t')
                ->select('SUM(t.DMS)')
                ->andWhere('t.dateStart IS NOT NULL')
                ->andWhere('t.DMS IS NOT NULL')
                ->andWhere('t.type = true')
                ->andWhere("t.dateStart <= CURRENT_TIMESTAMP() and t.dateStart >= DATE_SUB(CURRENT_TIMESTAMP(),12,'MONTH')")
                ->getQuery()
                ->getSingleScalarResult()
            ;
            $result["year"] = $dms_year;
            foreach ($teams as $team) {
                $query = $this->createQueryBuilder('t')
                    ->select('SUM(t.DMS) as total, MONTH(t.dateStart) AS period')
                    ->andWhere('t.dateStart IS NOT NULL')
                    ->andWhere('t.DMS IS NOT NULL')
                    ->andWhere('t.type = true')
                    ->join('t.department', 'd')
                    ->join('d.team', 'team')
                    ->andWhere('team.id = :id')
                    ->setParameter('id', $team->getId())
                    ->andWhere("t.dateStart <= CURRENT_TIMESTAMP() and t.dateStart >= DATE_SUB(CURRENT_TIMESTAMP(),12,'MONTH')");

                $result["month"][] = [
                    "team" => $team->getTitre(),
                    "data" => $query->groupBy('period')->getQuery()->getResult()
                ];
            }
        }
        return $result;

    }
    public function getInterruptionsParType(): array
    {
        return $this->createQueryBuilder('t')
            ->select('t.type as type, COUNT(t.id)')
            ->groupBy('type')
            ->getQuery()
            ->getResult()
        ;

    }
    public function getMissionsStats($year, $month): array
    {
        // causes - type - Total - Average duration - last Average duration
        return $this->createQueryBuilder('t')
            ->groupBy('CAST(t.dateStart AS DATE)')
            ->getQuery()
            ->getResult()
        ;

    }
//    /**
//     * @return Mission[] Returns an array of Mission objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('t.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Mission
//    {
//        return $this->createQueryBuilder('t')
//            ->andWhere('t.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
