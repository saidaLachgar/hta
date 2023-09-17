<?php

namespace App\Entity;

use App\Repository\GoalRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

/**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"goal"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'goals_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'goals_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'goals_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'goals_add')"},
 *      "get"= {"pagination_enabled"=false},
 *      "grouped_goals"= {
 *          "method"="GET",
 *          "path"="/goals/by-group",
 *          "openapi_context"={
 *              "summary"="Get goals grouped"
 *            }
 *      },
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "name"=SearchFilter::STRATEGY_PARTIAL,
 *          "target_years"=SearchFilter::STRATEGY_PARTIAL,
 *          "target_achievement"=SearchFilter::STRATEGY_EXACT,
 *          "goal_group.id"=SearchFilter::STRATEGY_EXACT,
 *      }
 * )
 * 
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=GoalRepository::class)
 */
class Goal
{
    public static $TRANSLATED_NAME = "objective";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"goal"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"goal"})
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Objective::class, mappedBy="goal", orphanRemoval=true)
     * @Groups({"goal"})
     */
    private $objectives;

    /**
     * @ORM\Column(type="simple_array", nullable=true)
     * @Groups({"goal"})
     */
    private $target_years = [];

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups({"goal"})
     */
    private $target_achievement;

    /**
     * @ORM\ManyToOne(targetEntity=GoalGroup::class)
     * @ORM\JoinColumn(nullable=true)
     * @Groups({"goal", "objective"})
     */
    private $goal_group;

    /**
     * @ORM\Column(type="string", length=30, nullable=true)
     * @Groups({"goal", "objective"})
     */
    private $calc; // values SELECTION_COUNT - ANNUAL_VISIT_COUNT - ANOMALY_VISIT_COUNT

    public function __toString()
    {
        return $this->name;
    }

    public function __construct()
    {
        $this->objectives = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection<int, Objective>
     */
    public function getObjectives(): Collection
    {
        return $this->objectives;
    }

    public function addObjective(Objective $objective): self
    {
        if (!$this->objectives->contains($objective)) {
            $this->objectives[] = $objective;
            $objective->setGoal($this);
        }

        return $this;
    }

    public function removeObjective(Objective $objective): self
    {
        if ($this->objectives->removeElement($objective)) {
            // set the owning side to null (unless already changed)
            if ($objective->getGoal() === $this) {
                $objective->setGoal(null);
            }
        }

        return $this;
    }

    public function getTargetYears(): ?array
    {
        return $this->target_years;
    }

    public function setTargetYears(?array $target_years): self
    {
        $this->target_years = $target_years;

        return $this;
    }

    public function getTargetAchievement(): ?int
    {
        return $this->target_achievement;
    }

    public function setTargetAchievement(?int $target_achievement): self
    {
        $this->target_achievement = $target_achievement;

        return $this;
    }

    public function getGoalGroup(): ?GoalGroup
    {
        return $this->goal_group;
    }

    public function setGoalGroup(?GoalGroup $goal_group): self
    {
        $this->goal_group = $goal_group;

        return $this;
    }

    public function getCalc(): ?string
    {
        return $this->calc;
    }

    public function setCalc(?string $calc): self
    {
        $this->calc = $calc;

        return $this;
    }
}
