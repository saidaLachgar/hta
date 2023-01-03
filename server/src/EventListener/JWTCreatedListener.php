<?php

namespace App\EventListener;
use Lexik\Bundle\JWTAuthenticationBundle\Event\JWTCreatedEvent;

class JWTCreatedListener
{
	public function __construct(){}

	/**
	 * @param JWTCreatedEvent $event
	 *
	 * @return void
	 */
	public function onJWTCreated(JWTCreatedEvent $event)
	{
		$user = $event->getUser();
		$payload = $event->getData();
        $payload['id'] = $user->getId();

        $event->setData($payload);

		$header = $event->getHeader();
		$header['cty'] = 'JWT';

		$event->setHeader($header);
	}
}