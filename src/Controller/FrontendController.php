<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class FrontendController extends AbstractController
{
    /**
     * @Route("/{vueRouting}", name="frontend", requirements={"vueRouting"="^(?!api|_(profiler|wdt)).*"})
     */
    public function index($vueRouting): Response
    {
        return $this->render('client.html.twig');
    }
}
