<?php

namespace App\Controller;

use App\Repository\BrancheRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;

class AdminController extends AbstractController
{
    #[Route('/admin', name: 'app_admin')]
    public function index(BrancheRepository $brancheRepository): Response
    {
        return $this->render('admin/index.html.twig', [
            'branches' => $brancheRepository->findAll(),
        ]);
    }
    #[Route('/admin/dashboard', name: 'dashboard')]
    public function dashboard(): Response
    {
        return $this->render('admin/dashboard.html.twig', [
        ]);
    }

}
