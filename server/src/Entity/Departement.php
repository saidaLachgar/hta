<?php

namespace App\Entity;

use App\Repository\DepartementRepository;
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
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"depar:read"}},
 *   itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'departements_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'departements_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'departements_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'departements_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'departements_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "team.id"=SearchFilter::STRATEGY_EXACT,
 *          "longueur"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=DepartementRepository::class)
 */
class Departement
{
    public static $ROUTE_NAME = "departements/details/:id";
    public static $TRANSLATED_NAME = "département";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"teams","depar:read", "postes", "visite", "appareils", "travaux"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"teams","depar:read", "postes", "visite", "appareils", "travaux"})
     */
    private $titre;

    /**
     * @ORM\OneToOne(targetEntity=MediaObject::class, cascade={"persist"})
     * @ORM\JoinColumn(nullable=true)
     * 
     * @Groups({"depar:read"})
     */
    private ?MediaObject $visuel = null;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class, inversedBy="departements")
     * 
     * @Groups({"depar:read"})
     */
    private $team;

    /**
     * @ORM\Column(type="float", nullable=true)
     * 
     * @Groups({"depar:read"})
     */
    private $longueur;

    /**
     * @ORM\OneToMany(targetEntity=Poste::class, mappedBy="departement")
     */
    private $postes;

    /**
     * @ORM\OneToMany(targetEntity=AppareilCoupeur::class, mappedBy="departement")
     */
    private $appareilsCoupeur;

    /**
     * @ORM\OneToMany(targetEntity=Travaux::class, mappedBy="departement")
     */
    private $travaux;

    public function __construct()
    {
        $this->postes = new ArrayCollection();
        $this->appareilsCoupeur = new ArrayCollection();
        $this->travaux = new ArrayCollection();
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

    public function setTitre(?string $titre): self
    {
        $this->titre = $titre;

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
    public function getVisuel(): ?MediaObject
    {
        return $this->visuel;
    }

    public function setVisuel(?MediaObject $visuel): self
    {
        $this->visuel = $visuel;

        return $this;
    }

    public function getLongueur(): ?float
    {
        return $this->longueur;
    }

    public function setLongueur(?float $longueur): self
    {
        $this->longueur = $longueur;

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
            $poste->setDepartement($this);
        }

        return $this;
    }

    public function removePoste(Poste $poste): self
    {
        if ($this->postes->removeElement($poste)) {
            // set the owning side to null (unless already changed)
            if ($poste->getDepartement() === $this) {
                $poste->setDepartement(null);
            }
        }

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
            $appareilsCoupeur->setDepartement($this);
        }

        return $this;
    }

    public function removeAppareilsCoupeur(AppareilCoupeur $appareilsCoupeur): self
    {
        if ($this->appareilsCoupeur->removeElement($appareilsCoupeur)) {
            // set the owning side to null (unless already changed)
            if ($appareilsCoupeur->getDepartement() === $this) {
                $appareilsCoupeur->setDepartement(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Travaux>
     */
    public function getTravaux(): Collection
    {
        return $this->travaux;
    }

    public function addTravaux(Travaux $travaux): self
    {
        if (!$this->travaux->contains($travaux)) {
            $this->travaux[] = $travaux;
            $travaux->setDepartement($this);
        }

        return $this;
    }

    public function removeTravaux(Travaux $travaux): self
    {
        if ($this->travaux->removeElement($travaux)) {
            // set the owning side to null (unless already changed)
            if ($travaux->getDepartement() === $this) {
                $travaux->setDepartement(null);
            }
        }

        return $this;
    }
}
