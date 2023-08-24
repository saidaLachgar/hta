<?php

namespace App\Entity;

use App\Repository\MissionCommuneRepository;
use Doctrine\ORM\Mapping as ORM;

// this entity represents the client count per community for a specific mission.

/**
 * @ORM\Entity(repositoryClass=MissionCommuneRepository::class)
 */
class MissionCommune
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Mission::class, inversedBy="missionCommunes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $mission;

    /**
     * @ORM\ManyToOne(targetEntity=Commune::class, inversedBy="missionCommunes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $Commune;

    /**
     * @ORM\Column(type="integer")
     */
    private $clientCount;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMission(): ?Mission
    {
        return $this->mission;
    }

    public function setMission(?Mission $mission): self
    {
        $this->mission = $mission;

        return $this;
    }

    public function getCommune(): ?Commune
    {
        return $this->Commune;
    }

    public function setCommune(?Commune $Commune): self
    {
        $this->Commune = $Commune;

        return $this;
    }

    public function getClientCount(): ?int
    {
        return $this->clientCount;
    }

    public function setClientCount(int $clientCount): self
    {
        $this->clientCount = $clientCount;

        return $this;
    }
}
