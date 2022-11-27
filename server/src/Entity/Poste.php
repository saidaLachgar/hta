<?php

namespace App\Entity;

use App\Repository\PosteRepository;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;

/**
  * @ApiResource(
 *   order= {"id" = "DESC"},
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
 *          "PKVA"=SearchFilter::STRATEGY_EXACT
 *          "nb_clients"=SearchFilter::STRATEGY_EXACT
 *          "departement.id"=SearchFilter::STRATEGY_EXACT
 *          "commune.id"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(DateFilter::class, properties={"date_mst"})
 * @ORM\Entity(repositoryClass=PosteRepository::class)
 */
class Poste
{
    public static $ROUTE_NAME = "postes/details/:id";
    public static $TRANSLATED_NAME = "postes";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $designation;

    /**
     * @ORM\ManyToOne(targetEntity=Departement::class, inversedBy="postes")
     */
    private $departement;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $MLE;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    private $PKVA;

    /**
     * @ORM\Column(type="float", nullable=true)
     */
    private $nb_clients;

    /**
     * @ORM\ManyToOne(targetEntity=Commune::class, inversedBy="postes")
     */
    private $commune;

    /**
     * @ORM\Column(type="date", nullable=true)
     */
    private $date_mst;

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
}
