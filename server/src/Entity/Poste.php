<?php

namespace App\Entity;

use App\Repository\PosteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use App\Dto\PosteOutput;

/**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   output=PosteOutput::class,
 *   normalizationContext={"groups"={"postes"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'postes_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'postes_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'postes_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'postes_add')"},
 *      "get"= { },
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "designation"=SearchFilter::STRATEGY_PARTIAL,
 *          "MLE"=SearchFilter::STRATEGY_PARTIAL,
 *          "PKVA"=SearchFilter::STRATEGY_EXACT,
 *          "nb_clients"=SearchFilter::STRATEGY_EXACT,
 *          "node.commune.id"=SearchFilter::STRATEGY_EXACT,
 *          "node.department.id"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(DateFilter::class, properties={"date_mst"})
 * @ORM\Entity(repositoryClass=PosteRepository::class)
 */

class Poste
{
    public static $TRANSLATED_NAME = "poste";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"postes"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $designation;


    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $MLE;

    /**
     * @ORM\Column(type="float", nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $PKVA;

    /**
     * @ORM\Column(type="string", length=10, nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $type;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $marque;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $poste;

    /**
     * @ORM\Column(type="string", length=100, nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $n_serie;

    /**
     * @ORM\Column(type="float", nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $nb_clients;


    /**
     * @ORM\Column(type="date", nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $date_mst;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="postes")
     * @ORM\JoinColumn(nullable=true)
     * 
     * @Groups({"postes"})
     */
    private $node;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"postes"})
     */
    private $origine;

    /**
     * @ORM\ManyToMany(targetEntity=Mission::class, mappedBy="postes")
     */
    private $missions;


    public function __construct()
    {
        $this->missions = new ArrayCollection();
    }

    public function __toString()
    {
        return $this->designation;
    }
    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDesignation(): ?string
    {
        return $this->designation;
    }

    public function setDesignation(?string $designation): self
    {
        $this->designation = $designation;

        return $this;
    }


    public function getMLE(): ?string
    {
        return $this->MLE;
    }

    public function setMLE(?string $MLE): self
    {
        $this->MLE = $MLE;

        return $this;
    }

    public function getPKVA(): ?float
    {
        return $this->PKVA;
    }

    public function setPKVA(?float $PKVA): self
    {
        $this->PKVA = $PKVA;

        return $this;
    }
    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(?string $type): self
    {
        $this->type = $type;

        return $this;
    }
    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(?string $marque): self
    {
        $this->marque = $marque;

        return $this;
    }
    public function getPoste(): ?string
    {
        return $this->poste;
    }

    public function setPoste(?string $poste): self
    {
        $this->poste = $poste;

        return $this;
    }
    public function getNSerie(): ?string
    {
        return $this->n_serie;
    }

    public function setNSerie(?string $n_serie): self
    {
        $this->n_serie = $n_serie;

        return $this;
    }

    public function getNbClients(): ?float
    {
        return $this->nb_clients;
    }

    public function setNbClients(?float $nb_clients): self
    {
        $this->nb_clients = $nb_clients;

        return $this;
    }

    public function getDateMst(): ?\DateTimeInterface
    {
        return $this->date_mst;
    }

    public function setDateMst(?\DateTimeInterface $date_mst): self
    {
        $this->date_mst = $date_mst;

        return $this;
    }

    public function getNode(): ?Node
    {
        return $this->node;
    }

    public function setNode(?Node $node): self
    {
        $this->node = $node;

        return $this;
    }

    public function getOrigine(): ?string
    {
        return $this->origine;
    }

    public function setOrigine(?string $origine): self
    {
        $this->origine = $origine;

        return $this;
    }

    /**
     * @return Collection<int, Mission>
     */
    public function getMissions(): Collection
    {
        return $this->missions;
    }

    public function addMission(Mission $mission): self
    {
        if (!$this->missions->contains($mission)) {
            $this->missions[] = $mission;
            $mission->addPoste($this);
        }

        return $this;
    }

    public function removeMission(Mission $mission): self
    {
        if ($this->missions->removeElement($mission)) {
            $mission->removePoste($this);
        }

        return $this;
    }

    
}
