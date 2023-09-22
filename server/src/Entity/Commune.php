<?php

namespace App\Entity;

use App\Repository\CommuneRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

/**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"commune"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'communes_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'communes_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'communes_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'communes_add')"},
 *      "get"= {},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=CommuneRepository::class)
 */
class Commune
{
    public static $TRANSLATED_NAME = "commune";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"commune","postes", "edge"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"commune","postes", "edge"})
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=Edge::class, mappedBy="commune")
     */
    private $edges;

    /**
     * @ORM\OneToMany(targetEntity=MissionCommune::class, mappedBy="Commune", orphanRemoval=true)
     */
    private $missionCommunes;

    public function __construct()
    {
        $this->missionCommunes = new ArrayCollection();
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
            $edge->setNodeA($this);
        }

        return $this;
    }

    public function removeEdge(Edge $edge): self
    {
        if ($this->a_edges->removeElement($edge)) {
            // set the owning side to null (unless already changed)
            if ($edge->getNodeA() === $this) {
                $edge->setNodeA(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, MissionCommune>
     */
    public function getMissionCommunes(): Collection
    {
        return $this->missionCommunes;
    }

    public function addMissionCommune(MissionCommune $missionCommune): self
    {
        if (!$this->missionCommunes->contains($missionCommune)) {
            $this->missionCommunes[] = $missionCommune;
            $missionCommune->setCommune($this);
        }

        return $this;
    }

    public function removeMissionCommune(MissionCommune $missionCommune): self
    {
        if ($this->missionCommunes->removeElement($missionCommune)) {
            // set the owning side to null (unless already changed)
            if ($missionCommune->getCommune() === $this) {
                $missionCommune->setCommune(null);
            }
        }

        return $this;
    }
}
