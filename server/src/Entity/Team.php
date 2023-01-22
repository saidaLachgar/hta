<?php

namespace App\Entity;

use App\Repository\TeamRepository;
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
 *   normalizationContext={"groups"={"teams"}},
 *   itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'teams_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'teams_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'teams_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'teams_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'teams_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "membres.id"=SearchFilter::STRATEGY_EXACT,
 *          "departements.id"=SearchFilter::STRATEGY_EXACT
 *      }
 *    )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=TeamRepository::class)
 */
class Team
{
    public static $ROUTE_NAME = "teams/details/:id";
    public static $TRANSLATED_NAME = "équipe";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @Groups({"teams","users", "visite", "depar:read"})
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @Groups({"teams","users", "visite", "depar:read"})
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $titre;

    /**
     * @Groups({"teams"})
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="team")
     */
    private $membres;

    /**
     * @Groups({"teams"})
     * @ORM\OneToMany(targetEntity=Departement::class, mappedBy="team")
     */
    private $departements;

    public function __construct()
    {
        $this->membres = new ArrayCollection();
        $this->departements = new ArrayCollection();
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

    /**
     * @return Collection<int, User>
     */
    public function getMembres(): Collection
    {
        return $this->membres;
    }

    public function addMembre(User $membre): self
    {
        if (!$this->membres->contains($membre)) {
            $this->membres[] = $membre;
            $membre->setTeam($this);
        }

        return $this;
    }

    public function removeMembre(User $membre): self
    {
        if ($this->membres->removeElement($membre)) {
            // set the owning side to null (unless already changed)
            if ($membre->getTeam() === $this) {
                $membre->setTeam(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Departement>
     */
    public function getDepartements(): Collection
    {
        return $this->departements;
    }

    public function addDepartement(Departement $departement): self
    {
        if (!$this->departements->contains($departement)) {
            $this->departements[] = $departement;
            $departement->setTeam($this);
        }

        return $this;
    }

    public function removeDepartement(Departement $departement): self
    {
        if ($this->departements->removeElement($departement)) {
            // set the owning side to null (unless already changed)
            if ($departement->getTeam() === $this) {
                $departement->setTeam(null);
            }
        }

        return $this;
    }
}
