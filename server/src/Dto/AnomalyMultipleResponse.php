<?php

namespace App\Dto;

use App\Entity\Anomaly;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Symfony\Component\Serializer\Annotation\Groups;
use ApiPlatform\Core\Annotation\ApiResource;

/**
 * Class AnomalyMultipleResponse.
 *
 * Custom input DTO to wrap multiple invitations response.
 */

/**
 * @ApiResource(
 *   normalizationContext={"groups"={"anomalies_nrml"}},
 *   denormalizationContext={"groups"={"anomalies_dnrml"}},
 *   output=AnomalyMultipleResponse::class,
 * )
 */
final class AnomalyMultipleResponse
{
    /**
     * @var ?array
     * @Groups({"anomalies_nrml"})
     */
    private $ids = null;

    /**
     * Anomaly entities.
     *
     * @var ?Collection<Anomaly>
     *
     * @Groups({"anomalies_nrml"})
     */
    private ?Collection $anomalies = null;

    public function __construct(?array $ids = null, ?Collection $anomalies = null)
    {
        $this->ids = $ids ?? $ids;
        $this->anomalies = $anomalies ?? new ArrayCollection();
    }

    public function getIds(): ?array
    {
        return $this->ids;
    }

    public function getAnomalies(): ?Collection
    {
        return $this->anomalies;
    }

    public function setAnomalies(?Collection $anomalies): void
    {
        $this->anomalies = $anomalies;
    }

    public function addAnomaly(Anomaly $anomaly): void
    {
        $this->anomalies->add($anomaly);
    }
    public function removeAnomaly(Anomaly $anomaly): self
    {
        $this->anomalies->removeElement($anomaly);

        return $this;
    }

}