<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use App\Repository\ObjectiveRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
 /**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"objective"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'objectives_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'objectives_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'objectives_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'objectives_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'objectives_show')"},
 *      "achievements"= {
 *          "access_control"="is_granted('hasPermission', 'objectives_show')",
 *          "method"="GET",
 *          "path"="/objectives/get-achievements",
 *          "openapi_context"={
 *              "summary"="Get count of achievements for each month by a given year",
 *              "parameters"={
 *                {
 *                  "in"="query",
 *                  "name"="year",
 *                  "required"=true,
 *                  "schema"={
 *                    "type"="string"
 *                  }
 *                }
 *              }
 *            }
 *      },
 *   },
 * )
 * @ORM\Entity(repositoryClass=ObjectiveRepository::class)
 */
class Objective
{
    public static $TRANSLATED_NAME = "état du suivi";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"objective"})
     */
    private $id;

    /**
     * @ORM\Column(type="date")
     * @Groups({"objective"})
     */
    private $date;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups({"objective"})
     */
    private $count;
    
    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups({"objective"})
     */
    private $planned_count;

    /**
     * @ORM\ManyToOne(targetEntity=Goal::class, inversedBy="objectives")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"objective"})
     */
    private $goal;

    public function __toString()
    {
        return $this->goal->getName();
    }

    public function getId(): ?int
    {
        return $this->id;
    }


    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getCount(): ?int
    {
        return $this->count;
    }

    public function setCount(?int $count): self
    {
        $this->count = $count;

        return $this;
    }

    public function getGoal(): ?goal
    {
        return $this->goal;
    }

    public function setGoal(?goal $goal): self
    {
        $this->goal = $goal;

        return $this;
    }

    public function getPlannedCount(): ?int
    {
        return $this->planned_count;
    }

    public function setPlannedCount(?int $planned_count): self
    {
        $this->planned_count = $planned_count;

        return $this;
    }
}
