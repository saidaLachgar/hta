<?php

namespace App\Doctrine;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryItemExtensionInterface;
use ApiPlatform\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;

use App\Entity\Visite;
use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Metadata\Operation;

class VisiteExtension implements QueryCollectionExtensionInterface
{

    public function applyToCollection(
        QueryBuilder $queryBuilder,
        QueryNameGeneratorInterface $queryNameGenerator,
        string $resourceClass,
        Operation $operation = null,
        array $context = []): void 
    {}


    public function getResult(array $visites, string $resourceClass, string $operationName = null)
    {
        if (Visite::class === $resourceClass) {
            // Loop through each object and add the custom value
            foreach ($visites as $key => $visit) {
                $visit->setNbSupport(10000);
            }
        }
        dump($visites);exit;
        return $visites;
    }

}
