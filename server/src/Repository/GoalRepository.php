<?php

namespace App\Repository;

use App\Entity\Goal;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<Goal>
 *
 * @method Goal|null find($id, $lockMode = null, $lockVersion = null)
 * @method Goal|null findOneBy(array $criteria, array $orderBy = null)
 * @method Goal[]    findAll()
 * @method Goal[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class GoalRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Goal::class);
    }

    public function add(Goal $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Goal $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function getObjectivesByYear($year): array
    {
        $results = $this->createQueryBuilder('g')
            ->select("o.id, o.count as total_achievements,o.planned_count as planned_achievements, MONTH(o.date) AS month_achieved, gg.name as group_name,g.id as goal_id, g.name as goal_name, g.target_achievement ")
            ->andWhere('o.date is NULL or YEAR(o.date) = :year')
            ->andWhere('g.target_years is NULL or g.target_years LIKE :target_year')
            ->setParameter('year', $year)
            ->setParameter('target_year', '%' . $year . '%')
            ->leftJoin('g.objectives', 'o')
            ->join('g.goal_group', 'gg')
            ->getQuery()
            // ->getSQL()
            ->getResult()
        ;

        // dd($results);

        // Restructure the result into a desired format
        $restructuredResult = [];

        foreach ($results as $result) {
            $groupName = $result['group_name'];
            $goalName = $result['goal_name'];
            $goalId = $result['goal_id'];
            $targetAchievement = $result['target_achievement'];
            $monthAchieved = $result['month_achieved'];
            $totalAchievements = $result['total_achievements'];
            $plannedAchievements = $result['planned_achievements'];
            $achievementId = $result['id'];

            // ??= is used to initialize array keys only if they are not already set, reducing unnecessary checks

            // Group by group name
            $restructuredResult["data"][$groupName] ??= [];

            // Group by goal name
            $restructuredResult["data"][$groupName][$goalName] ??= [
                // 'group_name' => $goalName,
                'id' => $goalId,
                'target_achievement' => $targetAchievement,
                'achievements' => [],
                'cumul' => 0,
            ];

            // Add achievements for each month
            $monthAchieved && $restructuredResult["data"][$groupName][$goalName]['achievements'][$monthAchieved] ??= [
                'id' => $achievementId,
                'p' => $plannedAchievements,
                'r' => $totalAchievements,
            ];

            // Update cumulative total
            $monthAchieved && $restructuredResult["data"][$groupName][$goalName]['cumul'] += $totalAchievements;

        }
        // dd($restructuredResult);
        // dd($results);

        return $restructuredResult;
    }

    public function getGoals(): array
    {
        $results = $this->createQueryBuilder('g')
            ->select("gg.name as group_name,g.id as goal_id, g.name as goal_name")
            ->andWhere('gg.display_in_forms = :display_in_forms')
            ->setParameter('display_in_forms', true)
            ->join('g.goal_group', 'gg')
            ->getQuery()
            ->getResult()
        ;
        // Restructure the result into a desired format
        $restructuredResult = [];
        foreach ($results as $result) {
            $groupName = $result['group_name'];
            $restructuredResult["data"][$groupName][] = [
                'name' => $result['goal_name'],
                'id' => $result['goal_id']
            ];
        }

        return $restructuredResult;
    }

    public function getTarget($calc, $date = false)
    {
        if($date == false){
            $date = new \DateTime();
        }
        $year = $date->format('Y');
        $query = $this->createQueryBuilder('g')
        ->where('g.calc = :calc')
        ->setParameter('calc', $calc);

        // Create a clone of the original query for the fallback
        $fallbackQuery = clone $query;


        $result =  $query
            ->andWhere('g.target_years LIKE :target_year')
            ->setParameter('target_year', '%' . $year . '%')
            ->getQuery()
            ->getOneOrNullResult();
            
        if(!$result) {
            $result =  $fallbackQuery->getQuery()->getOneOrNullResult();
        }
        // dd($result);

        return $result;
    }
}