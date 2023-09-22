<?php

namespace App\Entity;

use App\Repository\EdgeRepository;
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
 *   normalizationContext={"groups"={"edge"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'edges_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'edges_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'edges_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'edges_add')"},
 *      "get"= {"pagination_enabled"=true},
 *      "by_range"= {
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
 *          "department.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_b.id"=SearchFilter::STRATEGY_EXACT,
 *          "commune.id"=SearchFilter::STRATEGY_EXACT,
 *          "section"=SearchFilter::STRATEGY_EXACT,
 *          "longueur"=SearchFilter::STRATEGY_EXACT,
 *          "marque"=SearchFilter::STRATEGY_PARTIAL
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
     * @ORM\ManyToOne(targetEntity=Department::class, inversedBy="edges")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"edge","anomalies"})
     */
    private $department;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="a_edges")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"edge","anomalies"})
     */
    private $node_a;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="b_edges")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"edge","anomalies"})
     */
    private $node_b;

     /**
     * @ORM\ManyToOne(targetEntity=Commune::class, inversedBy="edges")
     * 
     * @Groups({"edge"})
     */
    private $commune;


    /**
     * @ORM\Column(type="float", nullable=true)
     * 
     * @Groups({"edge"})
     */
    private $section;

    /**
     * @ORM\Column(type="float", nullable=true)
     * 
     * @Groups({"edge"})
     */
    private $longueur;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * 
     * @Groups({"edge"})
     */
    private $marque;

    public function __toString()
    {
        return $this->node_a->getTitre() . " → " . $this->node_b->getTitre();
    }

    public function getId(): ?int
    {
        return $this->id;
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

    public function getCommune(): ?Commune
    {
        return $this->commune;
    }

    public function setCommune(?Commune $commune): self
    {
        $this->commune = $commune;

        return $this;
    }


    public function getLongueur(): ?float
    {
        return $this->longueur;
    }

    public function setLongueur(?float $longueur): self
    {
        $this->longueur = $longueur;

        return $this;
    }
    public function getSection(): ?float
    {
        return $this->section;
    }

    public function setSection(?float $section): self
    {
        $this->section = $section;

        return $this;
    }

    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(?string $marque): self
    {
        $this->marque = $marque;

        return $this;
    }
}