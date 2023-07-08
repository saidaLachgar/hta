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
 *          "departments.id"=SearchFilter::STRATEGY_EXACT
 *      }
 *    )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=TeamRepository::class)
 */
class Team
{
    public static $TRANSLATED_NAME = "équipe";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"teams", "users", "visite", "dps"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"teams", "depar", "users", "visite", "dps"})
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="team")
     * 
     * @Groups({"teams"})
     */
    private $membres;


    /**
     * @ORM\OneToMany(targetEntity=Department::class, mappedBy="team")
     * 
     * @Groups({"teams"})
     */
    private $departments;

    /**
     * @ORM\ManyToOne(targetEntity=Dps::class, inversedBy="team")
     */
    private $dps;

    public function __construct()
    {
        $this->membres = new ArrayCollection();
        $this->departments = new ArrayCollection();
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
     * @return Collection<int, Department>
     */
    public function getDepartments(): Collection
    {
        return $this->departments;
    }

    public function addDepartment(Department $department): self
    {
        if (!$this->departments->contains($department)) {
            $this->departments[] = $department;
            $department->setTeam($this);
        }

        return $this;
    }

    public function removeDepartment(Department $department): self
    {
        if ($this->departments->removeElement($department)) {
            // set the owning side to null (unless already changed)
            if ($department->getTeam() === $this) {
                $department->setTeam(null);
            }
        }

        return $this;
    }

    public function getDps(): ?Dps
    {
        return $this->dps;
    }

    public function setDps(?Dps $dps): self
    {
        $this->dps = $dps;

        return $this;
    }
}
