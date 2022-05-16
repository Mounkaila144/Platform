<?php

namespace App\Entity;

use App\Repository\MatiereRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MatiereRepository::class)]
class Matiere
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $nom;

    #[ORM\ManyToOne(targetEntity: filier::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $filier;

    #[ORM\ManyToOne(targetEntity: users::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $users;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): self
    {
        $this->nom = $nom;

        return $this;
    }

    public function getFilier(): ?filier
    {
        return $this->filier;
    }

    public function setFilier(?filier $filier): self
    {
        $this->filier = $filier;

        return $this;
    }


    public function getUsers(): ?users
    {
        return $this->users;
    }

    public function setUsers(?users $users): self
    {
        $this->users = $users;

        return $this;
    }
}
