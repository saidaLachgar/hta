<?php

namespace App\Entity;

use App\Repository\MissionPosteRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=MissionPosteRepository::class)
 */
class MissionPoste
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity=Mission::class, inversedBy="missionPostes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $mission;

    /**
     * @ORM\ManyToOne(targetEntity=Poste::class, inversedBy="missionPostes")
     * @ORM\JoinColumn(nullable=false)
     */
    private $poste;

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

    public function getPoste(): ?Poste
    {
        return $this->poste;
    }

    public function setPoste(?Poste $poste): self
    {
        $this->poste = $poste;

        return $this;
    }
}
