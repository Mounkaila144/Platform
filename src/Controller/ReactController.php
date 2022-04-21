<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactController extends AbstractController
{
    /**
     * @Route("/react/{reactRouting}", name="home", defaults={"reactRouting": null})
     */
    public function index(): Response
    {
        return $this->render('react/index.html.twig', [

        ]);
    }
    /**
     * @Route("/react/login/{reactRouting}", name="login", defaults={"reactRouting": null})
     */
    public function login(): Response
    {
        return $this->render('react/index.html.twig', [

        ]);
    }

    /**
     * @Route("materiel/{reactRouting}", name="materiel", defaults={"reactRouting": null})
     */
    public function materiel(): Response
    {
        return $this->render('react/index.html.twig', [

        ]);
    }

    /**
     * @Route("film/{reactRouting}", name="film", defaults={"reactRouting": null})
     */
    public function film(): Response
    {
        return $this->render('react/index.html.twig', [

        ]);
    }
    /**
     * @Route("serie/{reactRouting}", name="serie", defaults={"reactRouting": null})
     */
    public function serie(): Response
    {
        return $this->render('react/index.html.twig', [

        ]);
    }


}
