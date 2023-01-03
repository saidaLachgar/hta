<?php

namespace App\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;

use App\Repository\TravauxRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ApiResource(
 *  order= {"id" = "DESC"},
 *  normalizationContext={"groups"={"travaux"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'travaux_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'travaux_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'travaux_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'travaux_add')"},
 *      "list"={
 *          "method"="GET",
 *          "path"="/travaux/list",
 *          "access_control"="is_granted('hasPermission', 'travaux_show')"
 *       }
 *   },
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass=TravauxRepository::class)
 */
class Travaux
{

    public static $ROUTE_NAME = "travaux/details/:id";
    public static $TRANSLATED_NAME = "interruption";

    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     *
     * @Groups({"travaux"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $dateStart;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $dateEnd;

    /**
     * @ORM\Column(type="boolean", nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $type;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $causes;

    /**
     * @ORM\ManyToOne(targetEntity=Departement::class, inversedBy="travaux")
     * @ORM\JoinColumn(nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $departement;

    /**
     * @ORM\ManyToOne(targetEntity=AppareilCoupeur::class, inversedBy="travaux")
     * @ORM\JoinColumn(nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $appareil;

    /**
     * @ORM\ManyToOne(targetEntity=AppareilCoupeur::class, inversedBy="ps_travaux")
     * @ORM\JoinColumn(nullable=true)
     *
     * @Groups({"travaux"})
     */
    private $ps;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"postes"})
     */
    private $DMS;

    public function __toString()
    {
        return (string)$this->id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(?\DateTimeInterface $dateStart): self
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(?\DateTimeInterface $dateEnd): self
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    public function isType(): ?bool
    {
        return $this->type;
    }

    public function setType(?bool $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function getCauses(): ?int
    {
        return $this->causes;
    }

    public function setCauses(?int $causes): self
    {
        $this->causes = $causes;

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

    public function getAppareil(): ?AppareilCoupeur
    {
        return $this->appareil;
    }

    public function setAppareil(?AppareilCoupeur $appareil): self
    {
        $this->appareil = $appareil;

        return $this;
    }

    public function getPs(): ?AppareilCoupeur
    {
        return $this->ps;
    }

    public function setPs(?AppareilCoupeur $ps): self
    {
        $this->ps = $ps;

        return $this;
    }

    public function getDMS(): ?string
    {
        return $this->DMS;
    }

    public function setDMS(?string $DMS): self
    {
        $this->DMS = $DMS;

        return $this;
    }
}
