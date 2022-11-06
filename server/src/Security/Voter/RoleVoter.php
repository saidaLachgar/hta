<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Authorization\Voter\Voter;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Entity\UserPermissions;

class RoleVoter extends Voter
{
    /**
     * @var EntityManagerInterface
     */
    private $em;
    public const hasPermission = "hasPermission";

    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }
    protected function supports(string $attribute, $subject): bool
    {
        return $attribute == self::hasPermission;
    }

    protected function voteOnAttribute(string $attribute, $subject, TokenInterface $token): bool
    {
        
        $user = $token->getUser();
        // if the user is anonymous, do not grant access
        if (!$user instanceof UserInterface) {
            return false;
        }

        // ... (check conditions and return true to grant permission) ...

        /** 
         * @var UserPermissionsRepository $repository 
         */
        $repository = $this->em->getRepository(UserPermissions::class);
        $permissions = $repository->createQueryBuilder('p')
            ->andWhere(':role = p.role')
            ->setParameter('role', $user->getRoles()[0])
            ->getQuery()->getResult()
        ;

        return in_array($subject, $permissions[0]->getPermissions(), true);
    }
}
