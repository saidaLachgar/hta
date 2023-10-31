<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\ExistsFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use Symfony\Component\Serializer\Annotation\MaxDepth;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Repository\MissionRepository;
use App\Dto\MissionOutput;

use Symfony\Component\Serializer\Annotation\Groups;


/**
 * @ApiResource(
 *  order= {"id" = "DESC"},
 *  output=MissionOutput::class,
 *  normalizationContext={"groups"={"missions"}, "enable_max_depth"=true},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'missions_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'missions_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'missions_delete')"},
 *      "clone"= {
 *          "access_control"="is_granted('hasPermission', 'missions_add')",
 *          "method"="GET",
 *          "path"="/mission/{id}/clone"
 *      },
 *   },
 *   
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'missions_add')"},
 *      "get"= { 
 *          "access_control"="is_granted('hasPermission', 'missions_show')",
 *          "normalization_context"={"groups"={"missions_colec"}}
 *      }
 *   },
 * )
 * 
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "id"=SearchFilter::STRATEGY_EXACT,
 *          "team.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.department.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.department.team.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_b.id"=SearchFilter::STRATEGY_EXACT,
 *          "causes"=SearchFilter::STRATEGY_EXACT,
 *          "DMS"=SearchFilter::STRATEGY_EXACT,
 *          "IFS"=SearchFilter::STRATEGY_EXACT,
 *          "END"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * 
 * @ApiFilter(BooleanFilter::class, properties={"type"})
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(ExistsFilter::class, properties={"parent"})
 * @ApiFilter(DateFilter::class, properties={"dateStart"})
 * @ORM\Entity(repositoryClass=MissionRepository::class)
 */
class Mission
{
    public static $TRANSLATED_NAME = "travaux";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     * @Groups({"missions", "missions_colec"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @ORM\Column(type="datetime")
     * @var \DateTime
     * @Groups({"missions", "missions_colec"})
     */
    private $dateStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     * @Groups({"missions", "missions_colec"})
     */
    private $dateEnd;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     *
     * @Groups({"missions", "missions_colec"})
     */
    private $type; 
    // Déclenchement(Incident) true -- Coupeur / Ouverture(Coupeur) false

    /**
     * @ORM\Column(type="smallint", nullable=true)
     *
     * @Groups({"missions", "missions_colec"})
     */
    private $causes;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"missions", "missions_colec"})
     */
    private $DMS;
    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"missions", "missions_colec"})
     */
    private $IFS;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $END;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"missions", "missions_colec"})
     */
    private $nbClients;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="a_missions")
     * @ORM\JoinColumn(nullable=true)
     * @Groups({"missions", "missions_colec"})
     */
    private $node_a;

    /**
     * @ORM\ManyToMany(targetEntity=Node::class, inversedBy="b_missions")
     * @Groups({"missions", "missions_colec"})
     */
    private $node_b;

    /**
     * @ORM\Column(type="simple_array", nullable=true)
     * @Groups({"missions", "missions_colec"})
     */
    private $actions = [];

    /**
     * @ORM\OneToMany(targetEntity=MissionCommune::class, mappedBy="mission", orphanRemoval=true, cascade={"persist"})
     */
    private $missionCommunes;

    /**
     * @ORM\ManyToOne(targetEntity=Mission::class, inversedBy="children")
     * @ORM\JoinColumn(name="parent_id", referencedColumnName="id", onDelete="SET NULL", nullable=true)
     * @Groups({"missions"})
     * @MaxDepth(2)
     */
    // What onDelete="SET NULL" does is that when you delete a parent, its child element will get NULL value in parent_id column. This happens on DB level so you must doctrine:schema:update
    private $parent;

    /**
     * @ORM\OneToMany(targetEntity=Mission::class, mappedBy="parent")
     * @Groups({"missions_colec"})
     * @MaxDepth(2)
     */
    private $children;

    /**
     * @ORM\ManyToMany(targetEntity=Poste::class, inversedBy="missions")
     */
    private $postes;


    public function __construct()
    {
        $this->node_b = new ArrayCollection();
        $this->missionCommunes = new ArrayCollection();
        $this->children = new ArrayCollection();
        $this->postes = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->type ? (string) $this->id :
            ($this->type ? "Incident" : "Coupeur");
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(?\DateTimeInterface $dateStart): self
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(?\DateTimeInterface $dateEnd): self
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    public function isType(): ?bool
    {
        return $this->type;
    }

    public function setType(?bool $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getCauses(): ?int
    {
        return $this->causes;
    }

    public function setCauses(?int $causes): self
    {
        $this->causes = $causes;

        return $this;
    }

     
    public function getDMS(): ?float
    {
        return $this->DMS;
    }

    public function setDMS(?float $DMS): self
    {
        $this->DMS = $DMS;

        return $this;
    }
    public function getIFS(): ?float
    {
        return $this->IFS;
    }

    public function setIFS(?float $IFS): self
    {
        $this->IFS = $IFS;

        return $this;
    }
    public function getEND(): ?float
    {
        return $this->END;
    }

    public function setEND(?float $END): self
    {
        $this->END = $END;

        return $this;
    }

    public function getNbClients(): ?string
    {
        return $this->nbClients;
    }

    public function setNbClients(?string $nbClients): self
    {
        $this->nbClients = $nbClients;

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

    /**
     * @return Collection<int, Node>
     */
    public function getNodeB(): ?Collection
    {
        return $this->node_b;
    }

    public function addNodeB(Node $nodeB): self
    {
        if (!$this->node_b->contains($nodeB)) {
            $this->node_b[] = $nodeB;
        }

        return $this;
    }

    public function removeNodeB(Node $nodeB): self
    {
        $this->node_b->removeElement($nodeB);

        return $this;
    }

    public function getActions(): ?array
    {
        return $this->actions;
    }

    public function setActions(?array $actions): self
    {
        $this->actions = $actions;

        return $this;
    }

    /**
     * @return Collection<int, MissionCommune>
     */
    public function getMissionCommunes(): ?Collection
    {
        return $this->missionCommunes;
    }

    public function addMissionCommune(MissionCommune $missionCommune): self
    {
        if (!$this->missionCommunes->contains($missionCommune)) {
            $this->missionCommunes[] = $missionCommune;
            $missionCommune->setMission($this);
        }

        return $this;
    }

    public function removeMissionCommune(MissionCommune $missionCommune): self
    {
        if ($this->missionCommunes->removeElement($missionCommune)) {
            // set the owning side to null (unless already changed)
            if ($missionCommune->getMission() === $this) {
                $missionCommune->setMission(null);
            }
        }

        return $this;
    }

    public function getParent(): ?self
    {
        return $this->parent;
    }

    public function setParent(?self $parent): self
    {
        $this->parent = $parent;

        return $this;
    }

    
    public function getChildren(): ?Collection
    {
        return $this->children;
    }

    public function addChild(self $child): self
    {
        if (!$this->children->contains($child)) {
            $this->children[] = $child;
            $child->setParent($this);
        }

        return $this;
    }

    public function removeChild(self $child): self
    {
        if ($this->children->removeElement($child)) {
            // set the owning side to null (unless already changed)
            if ($child->getParent() === $this) {
                $child->setParent(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Poste>
     */
    public function getPostes(): Collection
    {
        return $this->postes;
    }

    public function addPoste(Poste $poste): self
    {
        if (!$this->postes->contains($poste)) {
            $this->postes[] = $poste;
        }

        return $this;
    }

    public function removePoste(Poste $poste): self
    {
        $this->postes->removeElement($poste);

        return $this;
    }
}
