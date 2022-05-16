<?php

namespace App\Entity;

use App\Repository\FilierRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: FilierRepository::class)]
class Filier
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 100)]
    private $nom;

    #[ORM\OneToMany(mappedBy: 'filier', targetEntity: Etudiant::class)]
    private $etudiants;

    #[ORM\ManyToOne(targetEntity: Branche::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $branche;

    public function __toString(): string
    {
        return $this->getNom();
    }


    public function __construct()
    {
        $this->etudiants = new ArrayCollection();
    }

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

    /**
     * @return Collection<int, Etudiant>
     */
    public function getEtudiants(): Collection
    {
        return $this->etudiants;
    }

    public function addEtudiant(Etudiant $etudiant): self
    {
        if (!$this->etudiants->contains($etudiant)) {
            $this->etudiants[] = $etudiant;
            $etudiant->setFilier($this);
        }

        return $this;
    }

    public function removeEtudiant(Etudiant $etudiant): self
    {
        if ($this->etudiants->removeElement($etudiant)) {
            // set the owning side to null (unless already changed)
            if ($etudiant->getFilier() === $this) {
                $etudiant->setFilier(null);
            }
        }

        return $this;
    }

    public function getBranche(): ?Branche
    {
        return $this->branche;
    }

    public function setBranche(?Branche $branche): self
    {
        $this->branche = $branche;

        return $this;
    }
}
