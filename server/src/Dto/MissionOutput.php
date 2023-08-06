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
     * @Groups({"missions"})
     */
    private $id;

    /**
     * @Groups({"missions"})
     */
    private $dateStart;

    /**
     * @Groups({"missions"})
     */
    private $dateEnd;

    /**
     * @Groups({"missions"})
     */
    private $type;

    /**
     * @Groups({"missions"})
     */
    private $causes;

    /**
     * @Groups({"missions"})
     */
    private $DMS;

    /**
     * @Groups({"missions"})
     */
    private $IFS;
    
    /**
     * @Groups({"missions"})
     */
    private $END;

    /**
     * @Groups({"missions"})
     */
    private $nbClients;

    /**
     * @Groups({"missions"})
     */
    private $node_a;

    /**
     * @Groups({"missions"})
     */
    public $node_b;

    /**
     * @Groups({"missions"})
     */
    private $actions = [];

    /**
     * @Groups({"missions"})
     */
    private $team;

    /**
     * @Groups({"missions"})
     */
    private $total_anomalies;

    /**
     * @Groups({"missions"})
     */
    private $undone_anomalies;

    public function __construct()
    {
        $this->node_b = new ArrayCollection();
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

    public function getTeam(): ?Team
    {
        return $this->team;
    }

    public function setTeam(?Team $team): self
    {
        $this->team = $team;

        return $this;
    }

    public function getTotalAnomalies()
    {
        return $this->total_anomalies;
    }

    public function getUndoneAnomalies()
    {
        return $this->undone_anomalies;
    }

    /**
     * Set the value of total_anomalies
     *
     * @return  self
     */
    public function setTotalAnomalies($total_anomalies)
    {
        $this->total_anomalies = $total_anomalies;

        return $this;
    }

    /**
     * Set the value of undone_anomalies
     *
     * @return  self
     */
    public function setUndoneAnomalies($undone_anomalies)
    {
        $this->undone_anomalies = $undone_anomalies;

        return $this;
    }

}