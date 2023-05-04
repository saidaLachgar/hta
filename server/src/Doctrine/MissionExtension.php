<?php

namespace App\Doctrine;

use ApiPlatform\Core\Bridge\Doctrine\Orm\Extension\QueryItemExtensionInterface;
use ApiPlatform\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\Mission;
use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Metadata\Operation;

class MissionExtension implements QueryCollectionExtensionInterface
{

    public function applyToCollection(
        QueryBuilder $queryBuilder,
        QueryNameGeneratorInterface $queryNameGenerator,
        string $resourceClass,
        Operation $operation = null,
        array $context = []): void 
    {
        if ($resourceClass === Mission::class) {
            $rootAlias = $queryBuilder->getRootAliases()[0];
           
            $queryBuilder->innerJoin("$rootAlias.node_a", "n")
                ->leftJoin("n.department", "d")
                ->orderBy("DATE($rootAlias.dateStart)", "DESC")
                ->addOrderBy("d.id", "DESC")
                ->addOrderBy("$rootAlias.type", "DESC")
                ->addOrderBy("TIME($rootAlias.dateStart)", "ASC");
        }
    }
}
