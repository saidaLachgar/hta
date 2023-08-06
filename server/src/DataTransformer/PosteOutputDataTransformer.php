<?php

namespace App\DataTransformer;

use ApiPlatform\Core\DataTransformer\DataTransformerInterface;

use App\Dto\PosteOutput;
use App\Entity\Poste;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\EntityCopyService;

class PosteOutputDataTransformer implements DataTransformerInterface
{

    private $em;
    private $entityCopyService;
    public function __construct(EntityManagerInterface $em, EntityCopyService $entityCopyService)
    {
        $this->em = $em;
        $this->entityCopyService = $entityCopyService;
    }

    /**
     * @param Poste $poste
     */
    public function transform($poste, string $to, array $context = [])
    {
        $posteRepository = $this->em->getRepository(Poste::class);
        $output = new PosteOutput();
        $this->entityCopyService->copyAttributes($poste, $output);
        // dd($poste->getNode());;
        $poste->getNode() && $output->setPuissance(
            $posteRepository->getPostePuissance($poste->getId(), $poste->getNode()->getDepartment()->getId())
        );

        return $output;
    }

    public function supportsTransformation($data, string $to, array $context = []): bool
    {
        return $data instanceof Poste && $to === PosteOutput::class;
    }
}