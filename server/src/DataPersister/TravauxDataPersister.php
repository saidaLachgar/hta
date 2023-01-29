<?php
// src/DataPersister/UserDataPersister.php

namespace App\DataPersister;

use App\Entity\AppareilCoupeur;
use App\Entity\Travaux;
use App\Repository\PosteRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Serializer\SerializerInterface;
use ApiPlatform\Core\DataPersister\ContextAwareDataPersisterInterface;
use App\Entity\Poste;
class TravauxDataPersister implements ContextAwareDataPersisterInterface
{
    private $em;
    private $serializer;

    public function __construct ( EntityManagerInterface $entityManager, SerializerInterface $serializer)
    {
        $this->em = $entityManager;
        $this->serializer = $serializer;
    }

    /**
     * {@inheritdoc}
     */
    public function supports($data, array $context = []): bool
    {
        return $data instanceof Travaux;
    }

    /**
     * @param Travaux $Travaux
     */
    public function persist($Travaux, array $context = [])
    {
        $DS = $Travaux->getDateStart();
        $DE = $Travaux->getDateEnd();
        $PS = $Travaux->getPs();
        $SR = $Travaux->getAppareil();
        // dd($Travaux->getPs());

        // add one day if date start smaller than date end
        if(!empty($DE) && !empty($DS) && $this->dateToTime($DE) < $this->dateToTime($DS)){
            $DE->modify('+1 day');
            $Travaux->setDateEnd($DE);
        }

        // CALC DMS IFS nbClients ---
            // Calculation conditions :
            // Only if depart has been chosen :
                // if (DMS is null) OR (depar, ps, source have changed) calculate everything
                // elseif duration changed -> update only dms duration with the old CC && CI

        // Depar is null
        if(is_null($Travaux->getDepartement()) && $PS->isEmpty() && is_null($SR)) {
            $Travaux->setIFS(null);
            $Travaux->setDMS(null);
            $Travaux->setNbClients(null);

        } else { 
            
            // get IDs of selected destinations
            $Destinations = $PS->isEmpty() ? [] : $PS->map(function($obj){return $obj->getId();})->getValues();

            // Get the previous state of the entity
            $previousData = $context['previous_data'] ?? null;
            if ($previousData) {
                // Compare the current and new states of the entity
                $attributes = ['Appareil', 'Departement', 'DateEnd', 'DateStart'];
                $timeChange = false;
                $majorChange = false;
                foreach ($attributes as $attribute) {
                    $getter = 'get' . $attribute;
                    if(empty($previousData->$getter()) && empty($Travaux->$getter())) continue;
                    if (
                        (empty($previousData->$getter()) && !empty($Travaux->$getter())) ||
                        (!empty($previousData->$getter()) && empty($Travaux->$getter()))
                    ){
                        $timeChange = true;
                        $majorChange = true;
                    }else{
                        if(!in_array($attribute,['DateEnd', 'DateStart'])){
                            if ($previousData->$getter()->getId() !== $Travaux->$getter()->getId()){
                                $majorChange = true;
                            }
                        } else if ($this->dateToTime($previousData->$getter()) != $this->dateToTime($Travaux->$getter())){
                            $timeChange = true;
                        }
                    }
                    
                    if($majorChange || $timeChange) break;
                }
                // compare the collections
                $PPS = $previousData->getPs();
                $previousDestinations = $PPS->isEmpty() ? [] : $PPS->map(function($obj){return $obj->getId();})->getValues();
                if (sort($Destinations) !== sort($previousDestinations)) {
                    $majorChange = true;
                }
            }

            if(is_null($Travaux->getDMS()) or $majorChange){ //||  depar, ps, source changed
                // dd("majorChange or dms was null");

                /** @var PosteRepository $PostRepo */
                $PostRepo = $this->em->getRepository(Poste::class);
                

                // Get Depar from appareilsCoupeur if depar is null
                if(is_null($Travaux->getDepartement())){
                    if(is_null($SR)){
                        // dump($PS);
                        $DeparId = $PS->first()->getDepartement()->getId();
                    }else{
                        $DeparId = $SR->getDepartement()->getId();
                    }
                } else {
                    $DeparId = $Travaux->getDepartement()->getId();
                }

                // Get clients connectés
                $CC = $PostRepo->ClientTotalInDepart($DeparId);   
                
                // Get Clients interrompus 
                if(is_null($SR) and $PS->isEmpty()) {
                    // source IS NULL & ps IS NULL
                    $CI = $CC;
                } else {
                    $CI = $PostRepo->ClientTotalInRange($DeparId, $SR, $Destinations);
                }

                // set DMS value depending if date end exists or not
                if( !is_null($DE) ){
                    $Travaux->setDMS($this->calcDMS($DE, $DS, $CI, $CC));
                } else{
                    $Travaux->setDMS(null);
                }

                $Travaux->setNbClients($CI."/".$CC);
                $Travaux->setIFS(round(($CI/$CC), 3));
                
            } elseif($timeChange){ // duration changed
                // dd("timeChange");
                // calc DMS with the old clients count
                $NbClients = preg_split("#/#", $Travaux->getNbClients());
                $Travaux->setDMS($this->calcDMS(
                    $DE, 
                    $DS, 
                    $NbClients[0], 
                    $NbClients[1]
                ));
            } else {
                // dd("no changes on dsm ifs :D");
                return;

            }
        }
        
        $this->em->persist($Travaux);
        $this->em->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function remove($data, array $context = [])
    {
        $this->em->remove($data);
        $this->em->flush();
    }
    public function calcDMS($dateEnd, $dateStart, $CI, $CC)
    {
        $differenceInSeconds =
            $this->dateToTime($dateEnd) -
            $this->dateToTime($dateStart); 

        $DMS = $differenceInSeconds * $CI / ($CC * 3600);
        return round($DMS, 3);
    }

    private function dateToTime($date) { return strtotime($date->format('Y-m-d H:i:s'));}
}