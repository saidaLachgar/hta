<?php

namespace App\Entity;

use App\Repository\VisiteRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use Doctrine\ORM\Mapping as ORM;
use App\Dto\VisiteOutput;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;


/**
 * @ApiResource(
 *  order= {"id" = "DESC"},
 *  output=VisiteOutput::class,
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
 *          "nbSupport"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.department.team.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.department.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_a.id"=SearchFilter::STRATEGY_EXACT,
 *          "node_b.id"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(DateFilter::class, properties={"date"})
 * @ORM\Entity(repositoryClass=VisiteRepository::class)
 */

class Visite
{
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
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"visite"})
     */
    private $nbSupport=0;

    /**
     * @ORM\ManyToOne(targetEntity=Node::class, inversedBy="a_visites")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"visite"})
     */
    private $node_a;

    /**
     * @ORM\ManyToMany(targetEntity=Node::class, inversedBy="b_visites")
     * @Groups({"visite"})
     */
    private $node_b;

    /**
     * @ORM\Column(type="float", nullable=true)
     * @Groups({"visite"})
     */
    private $edge_set_length;

    public function __construct()
    {
        $this->node_b = new ArrayCollection();
    }
    
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

    public function getNbSupport(): ?float
    {
        return $this->nbSupport;
    }

    public function setNbSupport(?float $nbSupport): self
    {
        $this->nbSupport = $nbSupport;

        return $this;
    }

    public function getNodeA(): ?Node
    {
        return $this->node_a;
    }

    public function setNodeA(?Node $node_a): self
    {
        $this->node_a = $node_a;

        return $this;
    }

    /**
     * @return Collection<int, Node>
     */
    public function getNodeB(): Collection
    {
        return $this->node_b;
    }

    public function addNodeB(Node $nodeB): self
    {
        if (!$this->node_b->contains($nodeB)) {
            $this->node_b[] = $nodeB;
        }

        return $this;
    }

    public function removeNodeB(Node $nodeB): self
    {
        $this->node_b->removeElement($nodeB);

        return $this;
    }

    public function getEdgeSetLength(): ?float
    {
        return $this->edge_set_length;
    }

    public function setEdgeSetLength(?float $edge_set_length): self
    {
        $this->edge_set_length = $edge_set_length;

        return $this;
    }

   
}
