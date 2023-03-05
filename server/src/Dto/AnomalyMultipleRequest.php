<?php
// This DTO defines the payload format for bulk operations on Anomaly entities.
//  It includes an array of ids and a action parameter that specifies the type of operation to perform.

namespace App\Dto;

use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Serializer\Annotation\Groups;
use App\Entity\Anomaly;

class AnomalyMultipleRequest
{
    /**
     * @var ?array
     * @Assert\NotBlank
     * @Groups({"anomalies_dnrml"})
     */
    private $ids = null;


     /**
     *  @var Anomaly[]
     * 
     * @Groups({"anomalies_dnrml"})
     * @Assert\NotBlank(groups={"invitation_multiple_create"})
     * @Assert\Unique(groups={"invitation_multiple_create"})
     */
    public ?array $anomalies = null;


    public function __construct(?array $ids, ?array $anomalies)
    {
        $this->ids = $ids;
        $this->anomalies = $anomalies;
    }

    public function getIds(): ?array
    {
        return $this->ids;
    }

    public function getAnomalies(): ?array
    {
        return $this->anomalies;
    }
}
