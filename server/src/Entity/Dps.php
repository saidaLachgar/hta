<?php

namespace App\Entity;

use App\Repository\DpsRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
 /**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"dps"}},
 *   itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'dps_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'dps_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'dps_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'dps_add')"},
 *      "get"= {},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "titre"=SearchFilter::STRATEGY_PARTIAL,
 *          "nbClients"=SearchFilter::STRATEGY_PARTIAL,
 *          "team.id"=SearchFilter::STRATEGY_EXACT,
 *      }
 *    )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=DpsRepository::class)
 */

class Dps
{
    public static $TRANSLATED_NAME = "DP";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"dps"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"dps"})
     */
    private $titre;

    /**
     * @ORM\OneToMany(targetEntity=Team::class, mappedBy="dps")
     * @Groups({"dps"})
     */
    private $team;

    /**
     * @ORM\Column(type="integer", nullable=true)
     */
    private $nbClients;

    public function __construct()
    {
        $this->team = new ArrayCollection();
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
     * @return Collection<int, Team>
     */
    public function getTeam(): Collection
    {
        return $this->team;
    }

    public function addTeam(Team $team): self
    {
        if (!$this->team->contains($team)) {
            $this->team[] = $team;
            $team->setDps($this);
        }

        return $this;
    }

    public function removeTeam(Team $team): self
    {
        if ($this->team->removeElement($team)) {
            // set the owning side to null (unless already changed)
            if ($team->getDps() === $this) {
                $team->setDps(null);
            }
        }

        return $this;
    }

    public function getNbClients(): ?int
    {
        return $this->nbClients;
    }

    public function setNbClients(?int $nbClients): self
    {
        $this->nbClients = $nbClients;

        return $this;
    }
}
