<?php

namespace App\Entity;


use App\Repository\NodeRepository;
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
 *  order= {"id" = "DESC"},
 *  normalizationContext={"groups"={"nodes"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'nodes_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'nodes_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'nodes_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'nodes_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'nodes_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "department.id"=SearchFilter::STRATEGY_EXACT,
        }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=NodeRepository::class)
 */

class Node
{

    public static $TRANSLATED_NAME = "appareil";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"nodes","postes", "edge", "missions", "visite"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"nodes","postes", "edge", "missions", "visite","anomalies"})
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=Edge::class, mappedBy="node_a", orphanRemoval=true)
     */
    private $a_edges;

    /**
     * @ORM\OneToMany(targetEntity=Edge::class, mappedBy="node_b", orphanRemoval=true)
     */
    private $b_edges;

    /**
     * @ORM\OneToMany(targetEntity=Poste::class, mappedBy="node", orphanRemoval=true)
     * 
     * @Groups({"nodes"})
     */
    private $postes;

    /**
     * @ORM\OneToMany(targetEntity=Mission::class, mappedBy="node_a")
     */
    private $a_missions;

    /**
     * @ORM\ManyToMany(targetEntity=Mission::class, mappedBy="node_b")
     */
    private $b_missions;

    /**
     * @ORM\OneToMany(targetEntity=Visite::class, mappedBy="node_a")
     */
    private $a_visites;

    /**
     * @ORM\ManyToMany(targetEntity=Visite::class, mappedBy="node_b")
     */
    private $b_visites;

    /**
     * @ORM\ManyToOne(targetEntity=Department::class)
     * @ORM\JoinColumn(nullable=false)
     * 
     * @Groups({"nodes","postes", "missions", "visite"})
     */
    private $department;

    public function __construct()
    {
        $this->a_edges = new ArrayCollection();
        $this->b_edges = new ArrayCollection();
        $this->postes = new ArrayCollection();
        $this->a_missions = new ArrayCollection();
        $this->b_missions = new ArrayCollection();
        $this->a_visites = new ArrayCollection();
        $this->b_visites = new ArrayCollection();
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
    public function getAEdges(): Collection
    {
        return $this->a_edges;
    }

    public function addAEdge(Edge $aedge): self
    {
        if (!$this->a_edges->contains($aedge)) {
            $this->a_edges[] = $aedge;
            $aedge->setNodeA($this);
        }

        return $this;
    }

    public function removeAEdge(Edge $aedge): self
    {
        if ($this->a_edges->removeElement($aedge)) {
            // set the owning side to null (unless already changed)
            if ($aedge->getNodeA() === $this) {
                $aedge->setNodeA(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Edge>
     */
    public function getBEdges(): Collection
    {
        return $this->b_edges;
    }

    public function addBEdge(Edge $bEdge): self
    {
        if (!$this->b_edges->contains($bEdge)) {
            $this->b_edges[] = $bEdge;
            $bEdge->setNodeB($this);
        }

        return $this;
    }

    public function removeBEdge(Edge $bEdge): self
    {
        if ($this->b_edges->removeElement($bEdge)) {
            // set the owning side to null (unless already changed)
            if ($bEdge->getNodeB() === $this) {
                $bEdge->setNodeB(null);
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
            $poste->setNode($this);
        }

        return $this;
    }

    public function removePoste(Poste $poste): self
    {
        if ($this->postes->removeElement($poste)) {
            // set the owning side to null (unless already changed)
            if ($poste->getNode() === $this) {
                $poste->setNode(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Mission>
     */
    public function getAMissions(): Collection
    {
        return $this->a_missions;
    }

    public function addAMission(Mission $aMission): self
    {
        if (!$this->a_missions->contains($aMission)) {
            $this->a_missions[] = $aMission;
            $aMission->setNodeA($this);
        }

        return $this;
    }

    public function removeAMission(Mission $aMission): self
    {
        if ($this->a_missions->removeElement($aMission)) {
            // set the owning side to null (unless already changed)
            if ($aMission->getNodeA() === $this) {
                $aMission->setNodeA(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Mission>
     */
    public function getBMissions(): Collection
    {
        return $this->b_missions;
    }

    public function addBMission(Mission $bMission): self
    {
        if (!$this->b_missions->contains($bMission)) {
            $this->b_missions[] = $bMission;
            $bMission->addNodeB($this);
        }

        return $this;
    }

    public function removeBMission(Mission $bMission): self
    {
        if ($this->b_missions->removeElement($bMission)) {
            $bMission->removeNodeB($this);
        }

        return $this;
    }

    /**
     * @return Collection<int, Visite>
     */
    public function getAVisites(): Collection
    {
        return $this->a_visites;
    }

    public function addAVisite(Visite $aVisite): self
    {
        if (!$this->a_visites->contains($aVisite)) {
            $this->a_visites[] = $aVisite;
            $aVisite->setNodeA($this);
        }

        return $this;
    }

    public function removeAVisite(Visite $aVisite): self
    {
        if ($this->a_visites->removeElement($aVisite)) {
            // set the owning side to null (unless already changed)
            if ($aVisite->getNodeA() === $this) {
                $aVisite->setNodeA(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Visite>
     */
    public function getBVisites(): Collection
    {
        return $this->b_visites;
    }

    public function addBVisite(Visite $bVisite): self
    {
        if (!$this->b_visites->contains($bVisite)) {
            $this->b_visites[] = $bVisite;
            $bVisite->addNodeB($this);
        }

        return $this;
    }

    public function removeBVisite(Visite $bVisite): self
    {
        if ($this->b_visites->removeElement($bVisite)) {
            $bVisite->removeNodeB($this);
        }

        return $this;
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
}
