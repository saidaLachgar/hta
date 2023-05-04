<?php

namespace App\Repository;

use App\Entity\Objective;
use App\Entity\Goal;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Objective>
 *
 * @method Objective|null find($id, $lockMode = null, $lockVersion = null)
 * @method Objective|null findOneBy(array $criteria, array $orderBy = null)
 * @method Objective[]    findAll()
 * @method Objective[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ObjectiveRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Objective::class);
    }

    public function add(Objective $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Objective $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }


    public function getObjectivesByYear($year): array
    {
        $results = $this->createQueryBuilder('o')
            ->select("o.id, o.count as total_achievements, MONTH(o.date) AS month_achieved, gg.name as group_name, g.name as goal_name, g.target_achievement ")
            // ->andWhere('YEAR(o.date) = :year')
            // ->andWhere('g.target_years is NULL or g.target_years LIKE :target_year')
            // ->setParameter('year', $year)
            // ->setParameter('target_year', '%'.$year.'%')
            ->leftJoin('o.goal', 'g')
            ->join('g.goal_group', 'gg')
            ->getQuery()
            // ->getSQL()
            ->getResult()
        ;


        // Restructure the result into a desired format
        $restructuredResult = [];
        foreach ($results as $result) {
            $groupName = $result['group_name'];
            $goalName = $result['goal_name'];
            $targetAchievement = $result['target_achievement'];
            $monthAchieved = $result['month_achieved'];
            $totalAchievements = $result['total_achievements'];

            // Group by group name
            $restructuredResult["data"][$groupName] ??= [];

            // Group by goal name
            $restructuredResult["data"][$groupName][$goalName] ??= [
                // 'goal_name' => $goalName,
                'target_achievement' => $targetAchievement,
                'achievements' => [],
            ];

            // Add achievements for each month
            $restructuredResult["data"][$groupName][$goalName]['achievements'][] = [
                'month_achieved' => $monthAchieved,
                'total_achievements' => $totalAchievements,
            ];
        }
        // dd($results);
        // dd($restructuredResult);

        return $restructuredResult;
    }
    public function UpdateAchievement(array $actions, bool $removed, \DateTimeInterface $date): void
    {
        if (count($actions) === 0):
            $query = [];
        else:
            $query = $this->createQueryBuilder('o')
                ->andWhere('YEAR(o.date) = :year')
                ->andWhere('MONTH(o.date) = :month')
                ->andWhere('g.id IN (:actions)')
                ->setParameter('actions', $actions)
                ->setParameter('year', $date->format('Y'))
                ->setParameter('month', intval($date->format('m')))
                ->innerJoin('o.goal', 'g')
                ->getQuery()
                // ->getOneOrNullResult();
                ->getResult();
        endif;
    
        $em = $this->getEntityManager();
    
        // insert objectives if not found
        if (!$removed && count($query) != count($actions)) {
            // get diff between $actions and $query
            $goals = array_diff($actions, array_map(function ($o) {return $o->getGoal()->getId(); }, $query));
            foreach ($goals as $goal) {
                $objective = new Objective;
                $objective->setCount(1);
                $objective->setGoal($em->getRepository(Goal::class)->find($goal));
                $objective->setDate($date);
                $em->persist($objective);
            }
        }
    
        // update objectives count
        foreach ($query as $objective) {
    
            $last_val = $objective->getCount() ? $objective->getCount() : 0;
            $new_val = $last_val + ($removed ? -1 : 1);
            if (!$new_val && !$objective->getPlannedCount()) {
                $em->remove($objective);
            } else {
                $objective->setCount($new_val ? $new_val : null);
                $em->persist($objective);
            }
        }
    
        $em->flush();
    }

   
//    /**
//     * @return Objective[] Returns an array of Objective objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('o.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?Objective
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}