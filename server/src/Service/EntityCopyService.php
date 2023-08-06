<?php
namespace App\Service;

use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\PropertyAccess\PropertyAccess;
use Symfony\Component\PropertyInfo\Extractor\ReflectionExtractor;
use Symfony\Component\Serializer\Extractor\ObjectPropertyListExtractor;

class EntityCopyService
{
    // Function to copy data from one object to another
    function copyAttributes($sourceEntity, $targetEntity)
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

                // Handle ArrayCollection property separately
                if ($value instanceof ArrayCollection) {
                    // Create a new ArrayCollection for the target entity
                    $clonedCollection = new ArrayCollection();

                    // Clone each element in the collection and add it to the target entity's collection
                    foreach ($value as $item) {
                        $clonedCollection->add(clone $item);
                    }

                    // Set the cloned ArrayCollection to the target entity
                    $propertyAccessor->setValue($targetEntity, $property, $clonedCollection);
                } else {
                    // For non-collection properties, simply copy the value
                    $propertyAccessor->setValue($targetEntity, $property, $value);
                }
            }
        }
    }
}
