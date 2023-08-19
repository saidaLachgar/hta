<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;


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
 *  normalizationContext={"groups"={"missions"}},
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
 *      "get"= { "access_control"="is_granted('hasPermission', 'missions_show')"}
 *   },
 * )
 * 
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "team.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.department.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.department.team.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_b.id"=SearchFilter::STRATEGY_EXACT,
 *          "causes"=SearchFilter::STRATEGY_EXACT,
 *          "DMS"=SearchFilter::STRATEGY_EXACT,
 *          "IFS"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * 
 * @ApiFilter(BooleanFilter::class, properties={"type"})
 * @ApiFilter(PropertyFilter::class)
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
     * @Groups({"missions"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @ORM\Column(type="datetime")
     * @var \DateTime
     * @Groups({"missions"})
     */
    private $dateStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     * @Groups({"missions"})
     */
    private $dateEnd;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     *
     * @Groups({"missions"})
     */
    private $type; 
    // Déclenchement(Incident) true -- Coupeur / Ouverture(Coupeur) false

    /**
     * @ORM\Column(type="smallint", nullable=true)
     *
     * @Groups({"missions"})
     */
    private $causes;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"missions"})
     */
    private $DMS;
    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"missions"})
     */
    private $IFS;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $END;

    /**
     * @ORM\Column(type="string", length=50, nullable=true)
     * @Groups({"missions"})
     */
    private $nbClients;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="a_missions")
     * @ORM\JoinColumn(nullable=true)
     * @Groups({"missions"})
     */
    private $node_a;

    /**
     * @ORM\ManyToMany(targetEntity=Node::class, inversedBy="b_missions")
     * @Groups({"missions"})
     */
    private $node_b;

    /**
     * @ORM\Column(type="simple_array", nullable=true)
     * @Groups({"missions"})
     */
    private $actions = [];

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbPostes;


    public function __construct()
    {
        $this->node_b = new ArrayCollection();
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

    public function getNbPostes(): ?int
    {
        return $this->nbPostes;
    }

    public function setNbPostes(?int $nbPostes): self
    {
        $this->nbPostes = $nbPostes;

        return $this;
    }
}
