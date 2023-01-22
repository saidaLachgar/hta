<?php

namespace App\Entity;

use App\Repository\PosteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

/**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"postes"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'postes_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'postes_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'postes_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'postes_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'postes_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "designation"=SearchFilter::STRATEGY_PARTIAL,
 *          "MLE"=SearchFilter::STRATEGY_PARTIAL,
 *          "PKVA"=SearchFilter::STRATEGY_EXACT,
 *          "nb_clients"=SearchFilter::STRATEGY_EXACT,
 *          "departement.id"=SearchFilter::STRATEGY_EXACT,
 *          "commune.id"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(DateFilter::class, properties={"date_mst"})
 * @ORM\Entity(repositoryClass=PosteRepository::class)
 */
class Poste
{
    public static $ROUTE_NAME = "postes/details/:id";
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
     * @Groups({"postes", "appareils"})
     */
    private $designation;

    /**
     * @ORM\ManyToOne(targetEntity=Departement::class, inversedBy="postes")
     * @Groups({"postes", "appareils"})
     */
    private $departement;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"postes"})
     */
    private $MLE;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"postes"})
     */
    private $PKVA;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"postes"})
     */
    private $nb_clients;

    /**
     * @ORM\ManyToOne(targetEntity=Commune::class, inversedBy="postes")
     * @Groups({"postes"})
     */
    private $commune;

    /**
     * @ORM\Column(type="date", nullable=true)
     * @Groups({"postes"})
     */
    private $date_mst;

    /**
     * @ORM\ManyToMany(targetEntity=AppareilCoupeur::class, mappedBy="postes")
     * @Groups({"postes"})
     */
    private $appareilsCoupeur;

    public function __construct()
    {
        $this->appareilsCoupeur = new ArrayCollection();
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

    public function getDepartement(): ?Departement
    {
        return $this->departement;
    }

    public function setDepartement(?Departement $departement): self
    {
        $this->departement = $departement;

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

    public function getPKVA(): ?string
    {
        return $this->PKVA;
    }

    public function setPKVA(?string $PKVA): self
    {
        $this->PKVA = $PKVA;

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

    public function getCommune(): ?Commune
    {
        return $this->commune;
    }

    public function setCommune(?Commune $commune): self
    {
        $this->commune = $commune;

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

    /**
     * @return Collection<int, AppareilCoupeur>
     */
    public function getAppareilsCoupeur(): Collection
    {
        return $this->appareilsCoupeur;
    }

    public function addAppareilsCoupeur(AppareilCoupeur $appareilsCoupeur): self
    {
        if (!$this->appareilsCoupeur->contains($appareilsCoupeur)) {
            $this->appareilsCoupeur[] = $appareilsCoupeur;
            $appareilsCoupeur->addPoste($this);
        }

        return $this;
    }

    public function removeAppareilsCoupeur(AppareilCoupeur $appareilsCoupeur): self
    {
        if ($this->appareilsCoupeur->removeElement($appareilsCoupeur)) {
            $appareilsCoupeur->removePoste($this);
        }

        return $this;
    }
}
