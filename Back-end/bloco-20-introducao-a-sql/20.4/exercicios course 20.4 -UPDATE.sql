SET SQL_SAFE_UPDATES = 0;

SELECT * FROM actor WHERE first_name = 'JULIA';

UPDATE actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA'; 

SELECT * FROM category WHERE name = 'Sci-fi';

UPDATE category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

SELECT * FROM category WHERE name = 'Science Fiction';

SELECT * FROM film;

SELECT rental_rate FROM film
WHERE length > 100 
AND rating IN('G', 'PG', 'PG-13') 
-- AND(rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 20;


-- Foi determinado pelo setor financeiro que haverá um reajuste em todos os preços dos filmes, 
-- com base em sua duração. Para todos os filmes com duração entre 0 e 100, o valor do aluguel 
-- passará a ser $10,00, e o aluguel dos filmes com duração acima de 100 passará a ser de $20,00.
UPDATE film
SET rental_rate = 25
WHERE length > 100 AND rating IN('G', 'PG', 'PG-13') AND replacement_cost > 20;

UPDATE film
SET rental_rate = (
CASE WHEN length BETWEEN 0 AND 100 THEN 10
	 WHEN length > 100 THEN 20
END
);

