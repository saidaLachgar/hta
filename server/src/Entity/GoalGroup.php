<?php

namespace App\Entity;

use App\Repository\GoalGroupRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

 /**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"goal_group"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'goal_groups_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'goal_groups_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'goal_groups_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'goal_groups_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'goal_groups_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "name"=SearchFilter::STRATEGY_PARTIAL,
 *      }
 * )
 * @ORM\Entity(repositoryClass=GoalGroupRepository::class)
 */
class GoalGroup
{
    public static $TRANSLATED_NAME = "Groupe d'objectif";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"goal_group","goal"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"goal_group","goal", "objective"})
     */
    private $name;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     * @Groups({"goal_group","goal", "objective"})
     */
    private $display_in_forms;

    public function __toString()
    {
        return $this->name;
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

    public function isDisplayInForms(): ?bool
    {
        return $this->display_in_forms;
    }

    public function setDisplayInForms(?bool $display_in_forms): self
    {
        $this->display_in_forms = $display_in_forms;

        return $this;
    }
}
