<?php

namespace App\Entity;

use App\Repository\VisiteRepository;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;



/**
 * @ApiResource(
 *  order= {"id" = "DESC"},
 *  normalizationContext={"groups"={"visite"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'visites_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'visites_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'visites_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'visites_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'visites_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "departements.id"=SearchFilter::STRATEGY_EXACT,
 *          "team.id"=SearchFilter::STRATEGY_EXACT,
 *          "source.id"=SearchFilter::STRATEGY_EXACT,
 *          "destination.id"=SearchFilter::STRATEGY_EXACT,
 *          "nbSupport"=SearchFilter::STRATEGY_EXACT,
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(DateFilter::class, properties={"date"})
 * @ORM\Entity(repositoryClass=VisiteRepository::class)
 */
class Visite
{
    public static $ROUTE_NAME = "visites/details/:id";
    public static $TRANSLATED_NAME = "visite";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"visite"})
     */
    private $id;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups({"visite"})
     */
    private $date;

    /**
     * @ORM\ManyToOne(targetEntity=Departement::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"visite"})
     */
    private $departement;

    /**
     * @ORM\ManyToOne(targetEntity=AppareilCoupeur::class)
     * @Groups({"visite"})
     */
    private $source;

    /**
     * @ORM\ManyToOne(targetEntity=AppareilCoupeur::class)
     * @Groups({"visite"})
     */
    private $destination;

    /**
     * @ORM\Column(type="smallint", nullable=true)
     * @Groups({"visite"})
     */
    private $nbSupport;

    /**
     * @ORM\ManyToOne(targetEntity=Team::class)
     * @Groups({"visite"})
     */
    private $team;
    
    public function __toString()
    {
        return (string)$this->id;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(?\DateTimeInterface $date): self
    {
        $this->date = $date;

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

    public function getSource(): ?AppareilCoupeur
    {
        return $this->source;
    }

    public function setSource(?AppareilCoupeur $source): self
    {
        $this->source = $source;

        return $this;
    }

    public function getDestination(): ?AppareilCoupeur
    {
        return $this->destination;
    }

    public function setDestination(?AppareilCoupeur $destination): self
    {
        $this->destination = $destination;

        return $this;
    }

    public function getNbSupport(): ?int
    {
        return $this->nbSupport;
    }

    public function setNbSupport(?int $nbSupport): self
    {
        $this->nbSupport = $nbSupport;

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
}
