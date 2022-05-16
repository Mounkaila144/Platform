<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220515172138 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE article (id INT AUTO_INCREMENT NOT NULL, update_at DATETIME NOT NULL, price INT NOT NULL, nom VARCHAR(100) NOT NULL, image_name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE branche (id INT AUTO_INCREMENT NOT NULL, nom VARCHAR(100) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE commande (id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, panier LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', INDEX IDX_6EEAA67DA76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE etudiant (id INT AUTO_INCREMENT NOT NULL, filier_id INT NOT NULL, nom VARCHAR(50) NOT NULL, prenom VARCHAR(50) NOT NULL, numero INT NOT NULL, INDEX IDX_717E22E36CDDA31B (filier_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE filier (id INT AUTO_INCREMENT NOT NULL, branche_id INT NOT NULL, nom VARCHAR(100) NOT NULL, INDEX IDX_6B3A6F3E9DDF9A9E (branche_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE matiere (id INT AUTO_INCREMENT NOT NULL, filier_id INT NOT NULL, users_id INT NOT NULL, nom VARCHAR(100) NOT NULL, INDEX IDX_9014574A6CDDA31B (filier_id), INDEX IDX_9014574A67B3B43D (users_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles LONGTEXT NOT NULL COMMENT \'(DC2Type:json)\', password VARCHAR(255) NOT NULL, username VARCHAR(20) NOT NULL, nom VARCHAR(20) NOT NULL, telephone VARCHAR(20) NOT NULL, is_verified TINYINT(1) NOT NULL, UNIQUE INDEX UNIQ_1483A5E9E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE commande ADD CONSTRAINT FK_6EEAA67DA76ED395 FOREIGN KEY (user_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE etudiant ADD CONSTRAINT FK_717E22E36CDDA31B FOREIGN KEY (filier_id) REFERENCES filier (id)');
        $this->addSql('ALTER TABLE filier ADD CONSTRAINT FK_6B3A6F3E9DDF9A9E FOREIGN KEY (branche_id) REFERENCES branche (id)');
        $this->addSql('ALTER TABLE matiere ADD CONSTRAINT FK_9014574A6CDDA31B FOREIGN KEY (filier_id) REFERENCES filier (id)');
        $this->addSql('ALTER TABLE matiere ADD CONSTRAINT FK_9014574A67B3B43D FOREIGN KEY (users_id) REFERENCES users (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE filier DROP FOREIGN KEY FK_6B3A6F3E9DDF9A9E');
        $this->addSql('ALTER TABLE etudiant DROP FOREIGN KEY FK_717E22E36CDDA31B');
        $this->addSql('ALTER TABLE matiere DROP FOREIGN KEY FK_9014574A6CDDA31B');
        $this->addSql('ALTER TABLE commande DROP FOREIGN KEY FK_6EEAA67DA76ED395');
        $this->addSql('ALTER TABLE matiere DROP FOREIGN KEY FK_9014574A67B3B43D');
        $this->addSql('DROP TABLE article');
        $this->addSql('DROP TABLE branche');
        $this->addSql('DROP TABLE commande');
        $this->addSql('DROP TABLE etudiant');
        $this->addSql('DROP TABLE filier');
        $this->addSql('DROP TABLE matiere');
        $this->addSql('DROP TABLE users');
    }
}
