<?php

namespace App\Dto;

use App\Entity\Team;
use App\Entity\Node;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class MissionOutput
{

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $id;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $dateStart;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $dateEnd;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $type;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $causes;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $DMS;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $IFS;
    
    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $END;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $nbClients;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $nbPostes;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $node_a;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    public $node_b;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $actions = [];

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $team;
    
    /**
     * @Groups({"missions_colec"})
     */
    private $children;

    /**
     * @Groups({"missions"})
     */
    private $parent;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $total_anomalies;

    /**
     * @Groups({"missions", "missions_colec"})
     */
    private $undone_anomalies;

    public function __construct()
    {
        $this->node_b = new ArrayCollection();
        $this->children = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }
    
    public function setID(?int $id): self
    {
        $this->id = $id;

        return $this;
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

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): self
    {
        $this->team = $team;

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

    public function getTotalAnomalies()
    {
        return $this->total_anomalies;
    }

    public function setTotalAnomalies($total_anomalies)
    {
        $this->total_anomalies = $total_anomalies;

        return $this;
    }

    public function getUndoneAnomalies()
    {
        return $this->undone_anomalies;
    }
    
    public function setUndoneAnomalies($undone_anomalies)
    {
        $this->undone_anomalies = $undone_anomalies;

        return $this;
    }
    
    public function getNbPostes()
    {
        return $this->nbPostes;
    }
    
    public function setNbPostes($nbPostes)
    {
        $this->nbPostes = $nbPostes;

        return $this;
    }

}