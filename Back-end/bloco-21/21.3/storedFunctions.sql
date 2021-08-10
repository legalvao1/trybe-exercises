-- 1 Utilizando a tabela sakila.payment , monte uma function que retorna a quantidade total de 
-- pagamentos feitos até o momento por um determinado customer_id .

SELECT * FROM sakila.payment;

USE sakila;
DELIMITER $$

CREATE FUNCTION GetCustomerPayments(id INT)
RETURNS INT READS SQL DATA
BEGIN
	DECLARE number_of_payments INT;
	SELECT COUNT(*) 
	FROM sakila.payment
	WHERE customer_id = id
    INTO number_of_payments;
    RETURN number_of_payments;
END $$

DELIMITER ;

SELECT GetCustomerPayments(3);

-- 2 Crie uma function que, dado o parâmetro de entrada inventory_id , retorna o nome do filme 
-- vinculado ao registro de inventário com esse id.

SELECT * FROM sakila.inventory;
SELECT * FROM sakila.film;

USE sakila;
DELIMITER $$

CREATE FUNCTION FilmNameByInventory(id INT)
RETURNS VARCHAR(100) READS SQL DATA
BEGIN
	DECLARE film_title VARCHAR(100);
	SELECT DISTINCT f.title
	FROM sakila.film f
	INNER JOIN sakila.inventory i 
	ON i.film_id = f.film_id
	WHERE i.inventory_id = id
    INTO film_title;
    RETURN film_title;
END $$

DELIMITER ;

DROP FUNCTION FilmNameByInventory;

SELECT FilmNameByInventory(2);

-- 3 Crie uma function que receba uma determinada categoria de filme em formato de texto (ex: 'Action' , 
-- 'Horror' ) e retorna a quantidade total de filmes registrados nessa categoria.

SELECT * FROM sakila.category;
SELECT * FROM sakila.film_category;


USE sakila;
DELIMITER $$

CREATE FUNCTION GetFilmByCategory(category VARCHAR(100))
RETURNS VARCHAR(100) READS SQL DATA

BEGIN
	DECLARE mivie_amont VARCHAR(100);
	SELECT COUNT(*) 
	FROM sakila.category c
	INNER JOIN sakila.film_category fc
	ON fc.category_id = c.category_id
	WHERE c.name = category INTO mivie_amont;
    return mivie_amont;
END $$

DELIMITER ;

SELECT GetFilmByCategory('CHILDREN');


