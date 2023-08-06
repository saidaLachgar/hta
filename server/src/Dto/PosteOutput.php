<?php

namespace App\Dto;

use App\Entity\Node;
use Symfony\Component\Serializer\Annotation\Groups;

class PosteOutput
{
    /**
     * @Groups({"postes"})
     */
    private $id;

    /**
     * @Groups({"postes"})
     */
    private $designation;


    /**
     * @Groups({"postes"})
     */
    private $MLE;

    /**
     * @Groups({"postes"})
     */
    private $PKVA;

    /**
     * @Groups({"postes"})
     */
    private $type;

    /**
     * @Groups({"postes"})
     */
    private $marque;

    /**
     * @Groups({"postes"})
     */
    private $poste;

    /**
     * @Groups({"postes"})
     */
    private $n_serie;

    /**
     * @Groups({"postes"})
     */
    private $nb_clients;


    /**
     * @Groups({"postes"})
     */
    private $date_mst;

    /**
     * @Groups({"postes"})
     */
    private $node;

    /**
     * @Groups({"postes"})
     */
    private $origine;

    /**
     * @Groups({"postes"})
     */
    private $puissance;


    public function getId(): ?int
    {
        return $this->id;
    }

    public function setID(?int $id): self
    {
        $this->id = $id;

        return $this;
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
    
    public function getPuissance(): ?float
    {
        return $this->puissance;
    }

    public function setPuissance(?float $puissance): self
    {
        $this->puissance = $puissance;

        return $this;
    }
}
