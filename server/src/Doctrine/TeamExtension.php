<?php

namespace App\Doctrine;

use ApiPlatform\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\Team;
use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Metadata\Operation;
use Symfony\Component\Security\Core\Security;

class TeamExtension implements QueryCollectionExtensionInterface
{
    private $security;
    public function __construct(Security $security)
    {
        $this->security = $security;
    }

    public function applyToCollection(
        QueryBuilder $queryBuilder,
        QueryNameGeneratorInterface $queryNameGenerator,
        string $resourceClass,
        Operation $operation = null,
        array $context = []): void 
    {
        $this->addWhere($queryBuilder, $resourceClass);
    }

    private function addWhere(QueryBuilder $queryBuilder, string $resourceClass): void
    {
        $user = $this->security->getUser();
        // Check if the user is a super admin
        if (
            Team::class !== $resourceClass ||
            in_array('ROLE_SUPER_ADMIN', $user->getRoles())
        ) {
            return;
        }

        // Retrieve the user's department/team
        $userTeam = $user->getTeam();

        // Apply a filter to fetch data related to the user's department/team
        $rootAlias = $queryBuilder->getRootAliases()[0];

        if (
            in_array('ROLE_ADMIN', $user->getRoles())
        ) {
            // Retrieve the user's dp
            $dp = $user->getTeam()->getDps();
            // admin can see only data of his Dp
            $queryBuilder
                ->andWhere($rootAlias .'.dps = :dp')
                ->setParameter('dp', $dp);
        } else {
            // user can see only his team
            $queryBuilder
                ->andWhere($rootAlias .' = :userTeam')
                ->setParameter('userTeam', $userTeam);
        }
    }
}
