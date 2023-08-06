<?php

namespace App\Dto;

use App\Entity\Node;
use App\Entity\Team;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;

class VisiteOutput
{
    /**
     * @Groups({"visite"})
     */
    private $id;

    /**
     * @Groups({"visite"})
     */
    private $date;

    /**
     * @Groups({"visite"})
     */
    private $nbSupport;

    /**
     * @Groups({"visite"})
     */
    private $team;

    /**
     * @Groups({"visite"})
     */
    private $node_a;

    /**
     * @Groups({"visite"})
     */
    private $node_b;

    /**
     * @Groups({"visite"})
     */
    private $total_anomalies;

    /**
     * @Groups({"visite"})
     */
    private $undone_anomalies;

    /**
     * @Groups({"visite"})
     */
    private $edge_set_length;

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

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    public function getNbSupport(): ?float
    {
        return $this->nbSupport;
    }

    public function setNbSupport(?float $nbSupport): self
    {
        $this->nbSupport = $nbSupport;

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
    public function getNodeB(): Collection
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

    public function getEdgeSetLength()
    {
        return $this->edge_set_length;
    }

    public function setEdgeSetLength($edge_set_length)
    {
        $this->edge_set_length = $edge_set_length;

        return $this;
    }
}