<?php
namespace App\Service;

use App\Dto\MissionOutput;
use App\Entity\Anomaly;
use App\Entity\Mission;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\PersistentCollection;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor;
use Symfony\Component\Serializer\Extractor\ObjectPropertyListExtractor;
use Doctrine\Common\Collections\Collection;

class EntityCopyService
{
    private $em;
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    // Function to copy data from one object to another
    function copyAttributes($sourceEntity, $targetEntity, $limitDepth = false)
    {
        // Assuming $sourceEntity and $targetEntity are your two entities with the same attributes and getters/setters
        $reflectionExtractor = new ReflectionExtractor();
        $propertyListExtractor = new ObjectPropertyListExtractor($reflectionExtractor);
        // Get the list of properties (attributes) for the source entity
        $properties = $propertyListExtractor->getProperties($sourceEntity);
        // Use PropertyAccessor to read and write property values
        $propertyAccessor = PropertyAccess::createPropertyAccessor();

        foreach ($properties as $property) {
            if ($propertyAccessor->isReadable($sourceEntity, $property) && $propertyAccessor->isWritable($targetEntity, $property)) {
                $value = $propertyAccessor->getValue($sourceEntity, $property);

                // Handle Mission property separately
                // @todo make it work for any self referring entity
                if ($value instanceof Mission and $limitDepth == false) {
                    $missionOutput = new MissionOutput();
                    $this->copyAttributes($value, $missionOutput, true);
                    $propertyAccessor->setValue($targetEntity, $property, $missionOutput);
                }
                // Handle ArrayCollection property separately
                else if ($value instanceof Collection || $value instanceof ArrayCollection || $value instanceof PersistentCollection) {
                    // Create a new ArrayCollection for the target entity
                    $clonedCollection = new ArrayCollection();

                    // Loop through the collection elements and clone each item
                    foreach ($value as $item) {
                        if ($item instanceof Mission) {
                            $clonedMission = new MissionOutput();

                            $anomalyRepository = $this->em->getRepository(Anomaly::class);
                            $anomalies = $anomalyRepository->getTotalAnomalies($item);

                            $this->copyAttributes($item, $clonedMission, true);

                            $clonedMission->setTotalAnomalies($anomalies ? $anomalies["total"] : null);
                            $clonedMission->setUndoneAnomalies($anomalies ? $anomalies["undone"] : null);

                            $clonedCollection->add($clonedMission);
                        } else {
                            $clonedCollection->add(clone $item);
                        }
                    }
                    // Set the cloned ArrayCollection to the target entity
                    $propertyAccessor->setValue($targetEntity, $property, $clonedCollection);
                } else {
                    // For non-collection properties, simply copy the value
                    try {
                        $propertyAccessor->setValue($targetEntity, $property, $value);
                    } catch (\Throwable $th) {
                        // dump($property);
                        // dd($value);
                        continue;
                    }
                }
            }
        }
    }
}
