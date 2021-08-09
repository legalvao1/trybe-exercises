CREATE DATABASE IF NOT EXISTS zoologico;

USE zoologico;


CREATE TABLE especie (
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE localizacao (
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE gerente (
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL
);

CREATE TABLE cuidador (
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);

CREATE TABLE animal (
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50) NOT NULL,
    idade INT NOT NULL,
    sexo VARCHAR(50) NOT NULL,
    especie_id INT,
	localizacao_id INT,
    FOREIGN KEY (especie_id) REFERENCES especie (especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id)
    
);

CREATE TABLE cuidador_animal (
	animal_id INT,
	cuidador_id INT,
    CONSTRAINT PRIMARY KEY(animal_id, cuidador_id),
	FOREIGN KEY (animal_id) REFERENCES animal (animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id)
);

