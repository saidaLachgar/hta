<?php

namespace App\Entity;
use DateTime;

use App\Repository\AnomalyRepository;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\BooleanFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\DateFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Dto\AnomalyMultipleRequest;
use App\Dto\AnomalyMultipleResponse;
use App\Action\AnomalyAction;
// https://github.com/api-platform/api-platform/issues/294
/**
 * @ApiResource(
 *   order= {"id" = "DESC"},
 *   normalizationContext={"groups"={"anomalies"}},
 *  itemOperations={
 *      "put"= {"access_control"="is_granted('hasPermission', 'anomalies_update')"},
 *      "get"= {"access_control"="is_granted('hasPermission', 'anomalies_details')"},
 *      "delete"= {"access_control"="is_granted('hasPermission', 'anomalies_delete')"},
 *   },
 *   collectionOperations={
 *      "post"= {"access_control"="is_granted('hasPermission', 'anomalies_add')"},
 *      "get"= { "access_control"="is_granted('hasPermission', 'anomalies_show')"},
 *      "bulk"= {
 *          "method"="POST",
 *          "path"="/anomalies/bulk",
 *          "input"=AnomalyMultipleRequest::class,
 *          "controller"=AnomalyAction::class,
 *          "normalizationContext"={"groups"={"anomalies_nrml"}},
 *          "denormalizationContext"={"groups"={"anomalies_dnrml"}},
 *          "validation_groups"={"default", "anomalies_dnrml"},
 *          "openapi_context"={
 *              "summary"="Bulk create, edit, delete",
 *              "parameters"={
 *                {
 *                  "in"="query",
 *                  "name"="action",
 *                  "required"=true,
 *                  "schema"={
 *                    "type"="string"
 *                  }
 *                },
 *              },
 *          },
 *      },
 *   },
 * )
 * 
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "title"=SearchFilter::STRATEGY_PARTIAL,
 *          "severity"=SearchFilter::STRATEGY_EXACT,
 *          "edge.id"=SearchFilter::STRATEGY_EXACT,
 *          "edge.department.id"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(BooleanFilter::class, properties={"status"})
 * @ApiFilter(PropertyFilter::class)
 * @ApiFilter(DateFilter::class, properties={"createdAt"})
 * @ORM\Entity(repositoryClass=AnomalyRepository::class)
 * @ORM\HasLifecycleCallbacks
 */

class Anomaly
{
    public static $TRANSLATED_NAME = "anomalie";
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"anomalies"})
     */
    private $id;

    /**
     * @ORM\Column(type="boolean", nullable=false, options={"default": false})
     * @Groups({"anomalies"})
     */
    private $status = false; // done, undone

    /**
     * @ORM\Column(type="string", length=25, nullable=true)
     * @Groups({"anomalies"})
     */
    private $severity; // ELEVE, FAIBLE OU NORMAL

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups({"anomalies"})
     */
    private $title;

    /**
     * @ORM\ManyToOne(targetEntity=User::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"anomalies"})
     */
    private $createdBy;

    /**
     * @ORM\ManyToOne(targetEntity=Edge::class)
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"anomalies"})
     */
    private $edge;

    /**
     * @ORM\Column(type="datetime")
     * @var \DateTime
     * @Groups({"anomalies"})
     */

     private $createdAt;


     public function __toString()
    {
        return (string)$this->title;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function isStatus(): ?bool
    {
        return $this->status;
    }

    public function setStatus(bool $status): self
    {
        $this->status = $status;

        return $this;
    }

    public function getSeverity(): ?string
    {
        return $this->severity;
    }

    public function setSeverity(?string $severity): self
    {
        $this->severity = $severity;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(?string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getCreatedBy(): ?User
    {
        return $this->createdBy;
    }

    public function setCreatedBy(?User $createdBy): self
    {
        $this->createdBy = $createdBy;

        return $this;
    }

    public function getEdge(): ?Edge
    {
        return $this->edge;
    }

    public function setEdge(?Edge $edge): self
    {
        $this->edge = $edge;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
     /**
     * @ORM\PrePersist
     *
     * @return void
     */
    public function onPrePersist()
    {
        $this->createdAt = new DateTime();
    }
}
