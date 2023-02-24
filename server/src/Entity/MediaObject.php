<?php
// api/src/Entity/MediaObject.php
namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use App\Controller\CreateMediaObjectAction;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

/**
 *  An image file.
 *
 * @ORM\Entity
 * @Vich\Uploadable
 * @ApiResource(
 *   iri="http://schema.org/ImageObject",
 *   normalizationContext={"groups" = {"media_object=read"}},
 *   itemOperations={
 *      "put",
 *      "get",
 *      "delete"
 *   },
 *   collectionOperations={
 *     "get",
 *     "post" = {
 *       "controller" = CreateMediaObjectAction::class,
 *       "deserialize"= false, 
 *       "validation_context"= {"groups" = {"Default", "media_object_create"}},
 *      },
 *   },
 * )
 */

// * @Assert\File(
// *     maxSize = "5048k",
// *             mimeTypes = {"image/*"},
// *     mimeTypesMessage = "Please upload a valid cover image under 5048k")
// https://github.com/HoussemTN/upload_video_api_tmp_demo
// https://www.youtube.com/watch?v=E8hdiWtLKLU
// https://api-platform.com/docs/core/file-upload/
class MediaObject
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * 
     * @Groups({"media_object=read","depar"})
     */
    private ?int $id = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * 
     * @Groups({"media_object=read", "depar"})
     */
    public ?string $contentUrl = null;
    

    /**
     * @var File|null
     * 
     * @Vich\UploadableField(mapping="media_object", fileNameProperty="filePath")
     * 
     * @Groups({"media_object_create"})
     */
    public ?File $file = null;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     */
    public ?string $filePath = null;

    public function __toString() {
        return $this->contentUrl;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return File|null
     */
    public function getFile(): ?File
    {
        return $this->file;
    }

    /**
     * @param File|null $file
     */
    public function setFile(?File $file): void
    {
        $this->file = $file;
    }

    public function getFilePath(): ?string
    {
        return $this->filePath;
    }

    public function setFilePath(?string $filePath): self
    {
        $this->filePath = $filePath;

        return $this;
    }
    public function getContentUrl(): ?string
    {
        return $this->contentUrl;
    }

    public function setContentUrl(string $contentUrl): self
    {
        $this->contentUrl = $contentUrl;

        return $this;
    }
}