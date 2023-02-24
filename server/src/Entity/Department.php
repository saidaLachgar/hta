<?php

namespace App\Entity;

use App\Repository\DepartmentRepository;
use Symfony\Component\Serializer\Annotation\Groups;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

 /**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"depar"}},
 *   itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'departments_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'departments_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'departments_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'departments_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'departments_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "team.id"=SearchFilter::STRATEGY_EXACT,
 *          "longueur"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=DepartmentRepository::class)
 */
class Department
{
    public static $TRANSLATED_NAME = "dépar";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"depar", "teams", "postes", "nodes", "edge", "missions","anomalies"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"depar", "teams", "postes", "nodes", "edge", "missions","anomalies"})
     */
    private $titre;

    /**
     * @ORM\OneToOne(targetEntity=MediaObject::class, cascade={"persist"})
     * @ORM\JoinColumn(nullable=true)
     * 
     * @Groups({"depar"})
     */
    private ?MediaObject $visuel = null;
    // * @Groups({"depar"})

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, inversedBy="departments")
     * 
     * @Groups({"depar"})
     */
    private $team;

    /**
     * @ORM\Column(type="float", nullable=true)
     * 
     * @Groups({"depar"})
     */
    private $longueur;

    /**
     * @ORM\OneToMany(targetEntity=Edge::class, mappedBy="department", orphanRemoval=true)
     */
    private $edges;

    public function __construct()
    {
        $this->edges = new ArrayCollection();
    }
    // * @Groups({"depar"})



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

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): self
    {
        $this->team = $team;

        return $this;
    }
    public function getVisuel(): ?MediaObject
    {
        return $this->visuel;
    }

    public function setVisuel(?MediaObject $visuel): self
    {
        $this->visuel = $visuel;

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

    /**
     * @return Collection<int, Edge>
     */
    public function getEdges(): Collection
    {
        return $this->edges;
    }

    public function addEdge(Edge $edge): self
    {
        if (!$this->edges->contains($edge)) {
            $this->edges[] = $edge;
            $edge->setDepartment($this);
        }

        return $this;
    }

    public function removeEdge(Edge $edge): self
    {
        if ($this->edges->removeElement($edge)) {
            // set the owning side to null (unless already changed)
            if ($edge->getDepartment() === $this) {
                $edge->setDepartment(null);
            }
        }

        return $this;
    }

   
}
