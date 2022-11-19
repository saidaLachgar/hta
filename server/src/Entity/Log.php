<?php

namespace App\Entity;

use DateTime;
use Doctrine\ORM\Mapping as ORM;

use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiFilter;
use ApiPlatform\Core\Bridge\Doctrine\Orm\Filter\SearchFilter;
use ApiPlatform\Core\Serializer\Filter\PropertyFilter;
use ApiPlatform\Doctrine\Orm\Filter\DateFilter;
use Symfony\Component\Serializer\Annotation\Groups;
// use ApiPlatform\Core\Annotation\ApiProperty;

/**
 * @ApiResource(
 *     order= {"id" = "DESC"},
 *     normalizationContext={"groups"={"logs_list"}},
 *     collectionOperations={
 *      "get"= { "access_control"="is_granted('hasPermission', 'logs_show')"},
 *   },
 * )
 * @ApiFilter(
 *      SearchFilter::class,
 *      properties={
 *          "id"=SearchFilter::STRATEGY_EXACT,
 *          "message"=SearchFilter::STRATEGY_PARTIAL,
 *          "extra"=SearchFilter::STRATEGY_PARTIAL,
 *          "user.id"=SearchFilter::STRATEGY_EXACT
 *      }
 * )
 * @ApiFilter(DateFilter::class, properties={"createdAt"})
 * @ApiFilter(PropertyFilter::class)
 * @ORM\Entity(repositoryClass="App\Repository\LogRepository")
 * @ORM\HasLifecycleCallbacks
 */

class Log
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups({"logs_list"})
     */
    private $id;

    /**
     * @Groups({"logs_list"})
     * @ORM\Column(type="text")
     */
    private $message;

    /**
     * @ORM\Column(type="array")
     */
    private $context = [];

    /**
     * @ORM\Column(type="smallint")
     */
    private $level;

    /**
     * @Groups({"logs_list"})
     * @ORM\Column(type="string", length=50)
     */
    private $levelName;

    /**
     * @Groups({"logs_list"})
     * @ORM\Column(type="array", nullable=true)
     */
    private $extra = [];

    /**
     * @Groups({"logs_list"})
     * @ORM\Column(type="datetime")
     * @var \DateTime
     */
    private $createdAt;
    
    // * @ApiProperty(
    // *    readableLink=true
    // *  )
    /**
     * @Groups({"logs_list"})
     * @ORM\ManyToOne(targetEntity="User", inversedBy="logs", fetch="EAGER")
     */
    private $user;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getContext(): ?array
    {
        return $this->context;
    }

    public function setContext(array $context): self
    {
        $this->context = $context;

        return $this;
    }

    public function getLevel(): ?int
    {
        return $this->level;
    }

    public function setLevel(int $level): self
    {
        $this->level = $level;

        return $this;
    }

    public function getLevelName(): ?string
    {
        return $this->levelName;
    }

    public function setLevelName(string $levelName): self
    {
        $this->levelName = $levelName;

        return $this;
    }

    public function getExtra(): ?array
    {
        return $this->extra;
    }

    public function setExtra(?array $extra): self
    {
        $this->extra = $extra;

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

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }
}