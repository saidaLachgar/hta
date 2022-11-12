<?php

namespace App\Utility;

use Symfony\Component\HttpFoundation\RequestStack;

class DbProcessor
{
    private $request;

    public function __construct(RequestStack $request)
    {
        $this->request = $request->getCurrentRequest();
    }

    public function __invoke(array $record)
    {
        //on modifie le $record pour ajouter nos infos.
        $record['extra']['clientIp'] = $this->request->getClientIp();
        // $record['extra']['url'] = $this->request->getBaseUrl();
        // $user = $this->security->getUser();
        // $record['extra']['user'] = $user;

        return $record;
    }
}