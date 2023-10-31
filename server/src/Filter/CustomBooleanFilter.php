<?php

namespace App\Filter;

use ApiPlatform\Doctrine\Orm\Filter\AbstractFilter;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use ApiPlatform\Metadata\Operation;
use Doctrine\ORM\QueryBuilder;
use Symfony\Component\PropertyInfo\Type;

final class CustomBooleanFilter extends AbstractFilter
{

    protected function filterProperty(string $property, $value, QueryBuilder $queryBuilder, QueryNameGeneratorInterface $queryNameGenerator, string $resourceClass, Operation $operation = null, array $context = [])
    {
        // dd("klk");
        $rootAlias = $queryBuilder->getRootAliases()[0];
        foreach (array_keys($this->getProperties()) as $prop) { //NOTE: we use array_keys because getProperties() returns a map of property => strategy
            if (!$this->isPropertyEnabled($prop, $resourceClass) || !$this->isPropertyMapped($prop, $resourceClass)) {
                return;
            }

            $parameterName = $queryNameGenerator->generateParameterName($prop);

            if ($value == 'false') {
                $queryBuilder
                    ->andWhere(sprintf('%s.%s IS NULL OR o.%s = false', $rootAlias, $prop, $rootAlias, $prop));
            } else {
                $queryBuilder
                    ->andWhere(sprintf('%s.%s = :%s', $rootAlias, $prop, $parameterName))
                    ->setParameter($parameterName, $value);
            }

        }
    }

    // This function is only used to hook in documentation generators (supported by Swagger and Hydra)
    public function getDescription(string $resourceClass): array
    {
        if (!$this->properties) {
            return [];
        }

        $description = [];
        foreach ($this->properties as $property => $strategy) {
            $description["not_$property"] = [
                'property' => $property,
                'type' => Type::BUILTIN_TYPE_BOOL,
                'required' => false,
                'description' => 'Filter records where the specified property is not equal to the given value.',
            ];
        }

        return $description;
    }
}