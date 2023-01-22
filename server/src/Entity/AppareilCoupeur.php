<?php

namespace App\Entity;


use App\Repository\AppareilCoupeurRepository;
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
 *  normalizationContext={"groups"={"appareils"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'appareils_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'appareils_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'appareils_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'appareils_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'appareils_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "departement.id"=SearchFilter::STRATEGY_EXACT,
 *          "postes.id"=SearchFilter::STRATEGY_EXACT
        }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=AppareilCoupeurRepository::class)
 */
class AppareilCoupeur
{

    public static $ROUTE_NAME = "appareils/details/:id";
    public static $TRANSLATED_NAME = "appareil";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"appareils", "postes", "travaux", "visite"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * 
     * @Groups({"appareils", "postes", "travaux", "visite"})
     */
    private $titre;

    /**
     * @ORM\ManyToOne(targetEntity=Departement::class, inversedBy="appareilsCoupeur")
     * 
     * @Groups({"appareils"})
     */
    private $departement;

    /**
     * @ORM\ManyToMany(targetEntity=Poste::class, inversedBy="appareilsCoupeur")
     * 
     * @Groups({"appareils"})
     */
    private $postes;

    /**
     * @ORM\OneToMany(targetEntity=Travaux::class, mappedBy="appareil")
     */
    private $travaux;


    public function __construct()
    {
        $this->postes = new ArrayCollection();
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

    public function setTitre(string $titre): self
    {
        $this->titre = $titre;

        return $this;
    }

    public function getDepartement(): ?departement
    {
        return $this->departement;
    }

    public function setDepartement(?departement $departement): self
    {
        $this->departement = $departement;

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
        }

        return $this;
    }

    public function removePoste(Poste $poste): self
    {
        $this->postes->removeElement($poste);

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
            $travaux->setAppareil($this);
        }

        return $this;
    }

    public function removeTravaux(Travaux $travaux): self
    {
        if ($this->travaux->removeElement($travaux)) {
            // set the owning side to null (unless already changed)
            if ($travaux->getAppareil() === $this) {
                $travaux->setAppareil(null);
            }
        }

        return $this;
    }
}
