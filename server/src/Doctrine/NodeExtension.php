<?php

namespace App\Doctrine;

use ApiPlatform\Doctrine\Orm\Extension\QueryCollectionExtensionInterface;
use ApiPlatform\Doctrine\Orm\Util\QueryNameGeneratorInterface;
use App\Entity\Node;
use Doctrine\ORM\QueryBuilder;
use ApiPlatform\Metadata\Operation;
use Symfony\Component\Security\Core\Security;

class NodeExtension implements QueryCollectionExtensionInterface
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
            Node::class !== $resourceClass ||
            in_array('ROLE_SUPER_ADMIN', $user->getRoles())
        ) {
            return;
        }

        // Retrieve the user's department/team
        $userTeam = $user->getTeam();

        // Apply a filter to fetch data related to the user's department/team
        $rootAlias = $queryBuilder->getRootAliases()[0];
        $queryBuilder->join($rootAlias .'.department', 'd')
            ->join('d.team', 't')
            ->andWhere('t = :userTeam')
            ->setParameter('userTeam', $userTeam);
    }
}
