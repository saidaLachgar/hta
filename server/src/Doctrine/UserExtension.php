<?php

namespace App\Doctrine;

use ApiPlatform\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\User;
use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Metadata\Operation;
use Symfony\Component\Security\Core\Security;

class UserExtension implements QueryCollectionExtensionInterface
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
            User::class !== $resourceClass ||
            in_array('ROLE_SUPER_ADMIN', $user->getRoles())
        ) {
            return;
        }

        // Retrieve the user's team
        $userTeam = $user->getTeam();

        // Apply a filter to fetch data related to the user's team
        $rootAlias = $queryBuilder->getRootAliases()[0];
        $queryBuilder->join($rootAlias .'.team', 't');

        if (
            in_array('ROLE_ADMIN', $user->getRoles())
        ) {
            // Retrieve the user's dp
            $dp = $user->getTeam()->getDps();
            // admin can see only data of his Dp
            $queryBuilder
                ->andWhere('t.dps = :dp')
                ->setParameter('dp', $dp);
        } else {
            // user can see only data of his team
            $queryBuilder
                ->andWhere('t = :userTeam')
                ->setParameter('userTeam', $userTeam);
        }
    }
}
