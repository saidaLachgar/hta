<?php
// This class receives an instance of AnomalyMultipleRequest as input and performs the bulk operation 
// on the corresponding Anomaly entities.
namespace App\Action;

use App\Dto\AnomalyMultipleResponse;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Security;
use Symfony\Component\HttpFoundation\RequestStack;

use App\Entity\Anomaly;
use App\Dto\AnomalyMultipleRequest;
use App\Repository\AnomalyRepository;

class AnomalyAction extends AbstractController
{
    private $em;
    private $repository;
    private $security;
    private $requestStack;

    public function __construct(EntityManagerInterface $entityManager, AnomalyRepository $repo, RequestStack $requestStack, Security $security)
    {
        $this->em = $entityManager;
        $this->repository = $repo;
        $this->security = $security;
        $this->requestStack = $requestStack;
    }

    /**
     * React to a resend action on an Anomaly entity.
     *
     * @param AnomalyMultipleRequest $data
     *   Anomaly multiple request entity.
     *
     * @return AnomalyMultipleResponse
     *   Anomaly multiple response entity.
     */

    public function __invoke(AnomalyMultipleRequest $data): AnomalyMultipleResponse
    {
        $response = new AnomalyMultipleResponse();

        $request = $this->requestStack->getCurrentRequest();
        $action = $request->query->get('action');
        if (!in_array($action, ['create', 'update', 'delete'])) {
            throw new \InvalidArgumentException(sprintf('Invalid action "%s"', $action));
        }
        
        $anomalies = $data->getAnomalies();
        $ids = $data->getIds();
        

        if ($action === 'delete') {
            foreach ($ids as $id) {
                $anomaly = $this->repository->find($id);
                if (!$anomaly) continue;
                $this->em->remove($anomaly);
            }
        } elseif ($action === 'update') {
            foreach ($anomalies as $key => $anomaly) {
                $anomalyEntity = $this->repository->find($ids[$key]);
                if (!$anomalyEntity) continue;
                $response->removeAnomaly($anomaly);
    
                $anomaly->isStatus() && $anomalyEntity->setStatus($anomaly->isStatus());
                $anomalyEntity->setSeverity($anomaly->getSeverity());
                $anomalyEntity->setTitle($anomaly->getTitle());
                $anomaly->getEdge() && $anomalyEntity->setEdge($anomaly->getEdge());
                
                $response->addAnomaly($anomaly);
                // $this->em->merge($anomaly);
            }
        } elseif ($action === 'create') {
            foreach ($anomalies as $anomaly) {
                $anomalyEntity = new Anomaly();
    
                $anomaly->isStatus() && $anomalyEntity->setStatus($anomaly->isStatus());
                $anomaly->getCreatedAt() && $anomalyEntity->setCreatedAt($anomaly->getCreatedAt());
                $anomaly->getEdge() && $anomalyEntity->setEdge($anomaly->getEdge());
                
                $anomalyEntity->setSeverity($anomaly->getSeverity());
                $anomalyEntity->setTitle($anomaly->getTitle());
                $anomalyEntity->setCreatedBy($this->security->getUser());
                
                // Save the invitation.
                $this->em->persist($anomalyEntity);
                $response->addAnomaly($anomalyEntity);
            }
        } else {
            throw new \Exception(sprintf('Invalid action %s', $action));
        }

        $this->em->flush();

        return $response;
    }

   
}
