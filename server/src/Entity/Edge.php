<?php

namespace App\Entity;

use App\Repository\EdgeRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"edge"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'edges_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'edges_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'edges_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'edges_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'edges_show')"},
 *      "by_range"= {
 *          "access_control"="is_granted('hasPermission', 'edges_show')",
 *          "method"="GET",
 *          "path"="/edges/by-range",
 *          "openapi_context"={
 *              "summary"="Get edges within a range",
 *              "parameters"={
 *                {
 *                  "in"="query",
 *                  "name"="depar",
 *                  "required"=true,
 *                  "schema"={
 *                    "type"="string"
 *                  }
 *                },
 *                {
 *                  "in"="query",
 *                  "name"="node_a",
 *                  "required"=true,
 *                  "schema"={
 *                    "type"="string"
 *                  }
 *                },
 *                {
 *                  "in"="query",
 *                  "name"="node_b",
 *                  "required"=false,
 *                  "schema"={
 *                    "type"="string"
 *                  }
 *                }
 *              }
 *            }
 *      },
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "id"=SearchFilter::STRATEGY_EXACT,
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "department.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_b.id"=SearchFilter::STRATEGY_EXACT,
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=EdgeRepository::class)
 */
class Edge
{
    public static $TRANSLATED_NAME = "tronçon";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"edge","anomalies"})
     * 
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"edge","anomalies"})
     * 
     */
    private $titre;

    /**
     * @ORM\ManyToOne(targetEntity=Department::class, inversedBy="edges")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"edge","anomalies"})
     */
    private $department;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="a_edges")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"edge"})
     */
    private $node_a;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="b_edges")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"edge"})
     */
    private $node_b;

    /**
     * @ORM\OneToMany(targetEntity=Anomaly::class, mappedBy="edge", orphanRemoval=true)
     */
    private $anomalies;

    public function __construct()
    {
        $this->anomalies = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->titre;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitre(): ?string
    {
        return $this->titre;
    }

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDepartment(): ?Department
    {
        return $this->department;
    }

    public function setDepartment(?Department $department): self
    {
        $this->department = $department;

        return $this;
    }

    public function getNodeA(): ?Node
    {
        return $this->node_a;
    }

    public function setNodeA(?Node $node_a): self
    {
        $this->node_a = $node_a;

        return $this;
    }

    public function getNodeB(): ?Node
    {
        return $this->node_b;
    }

    public function setNodeB(?Node $node_b): self
    {
        $this->node_b = $node_b;

        return $this;
    }

    /**
     * @return Collection<int, Anomaly>
     */
    public function getAnomalies(): Collection
    {
        return $this->anomalies;
    }

    public function addAnomaly(Anomaly $anomaly): self
    {
        if (!$this->anomalies->contains($anomaly)) {
            $this->anomalies[] = $anomaly;
            $anomaly->setEdge($this);
        }

        return $this;
    }

    public function removeAnomaly(Anomaly $anomaly): self
    {
        if ($this->anomalies->removeElement($anomaly)) {
            // set the owning side to null (unless already changed)
            if ($anomaly->getEdge() === $this) {
                $anomaly->setEdge(null);
            }
        }

        return $this;
    }
}
