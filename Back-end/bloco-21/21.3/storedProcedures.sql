-- 1 Monte uma procedure que exiba os 10 atores mais populares, baseado em sua quantidade de filmes. 
-- Essa procedure não deve receber parâmetros de entrada ou saída e, quando chamada, deve exibir o id do 
-- ator ou atriz e a quantidade de filmes em que atuaram.

-- SELECT * FROM sakila.actor;
-- SELECT * FROM sakila.film_actor;

USE sakila;
DELIMITER $$

CREATE PROCEDURE BuscaDezAtoresMaisPopulares()
BEGIN

SELECT A.actor_id, A.first_name, COUNT(FA.film_id) AS 'total filmes'
FROM actor as A
INNER JOIN film_actor AS FA
ON A.actor_id = FA.actor_id
GROUP BY A.actor_id
ORDER BY `total filmes` DESC
LIMIT 10;
END $$

DELIMITER ;

CALL BuscaDezAtoresMaisPopulares();

-- 2 Monte uma procedure que receba como parâmetro de entrada o nome da categoria desejada em uma 
-- string e que exiba o id do filme , seu titulo , o id de sua categoria e o nome da categoria
--  selecionada. Use as tabelas film , film_category e category para montar essa procedure.


SELECT * FROM sakila.film;
SELECT * FROM sakila.film_category;
SELECT * FROM sakila.category;


USE sakila;
DELIMITER $$

CREATE PROCEDURE buscaPorCategoria(IN categoria VARCHAR(100))
BEGIN
SELECT F.film_id, F.title, FC.category_id, C.name
FROM sakila.film F
INNER JOIN sakila.film_category as FC ON F.film_id = FC.film_id
INNER JOIN sakila.category as C ON C.category_id = FC.category_id
WHERE C.name = categoria;
END $$

DELIMITER ;

CALL buscaPorCategoria('Children');


-- 3 Monte uma procedure que receba o email de um cliente como parâmetro de entrada e diga se o 
-- cliente está ou não ativo, através de um parâmetro de saída.


SELECT * FROM sakila.customer;

USE sakila;
DELIMITER $$

CREATE PROCEDURE IsActive(IN client_email VARCHAR(300), OUT isActive BOOl)
BEGIN
SELECT active INTO isActive
FROM sakila.customer
WHERE email = client_email;
END $$;

DELIMITER ;

CALL IsActive('SANDRA.MARTIN@sakilacustomer.org', @isActive);
SELECT @isActive;
