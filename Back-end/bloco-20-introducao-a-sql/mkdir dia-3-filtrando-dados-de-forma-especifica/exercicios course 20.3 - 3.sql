-- Encontra qualquer resultado finalizando com "don"
SELECT * FROM sakila.film
WHERE title LIKE '%don';

-- Encontra qualquer resultado iniciando com "plu"
SELECT * FROM sakila.film
WHERE title LIKE 'plu%';

-- Encontra qualquer resultado que contém "plu"
SELECT * FROM sakila.film
WHERE title LIKE '%plu%';

-- Encontra qualquer resultado que inicia com "p" e finaliza com "r"
SELECT * FROM sakila.film
WHERE title LIKE 'p%r';

-- Encontra qualquer resultado em que o segundo caractere da frase é "C"
SELECT * FROM sakila.film
WHERE title LIKE '_C%';

-- Encontra qualquer resultado em que o título possui exatamente 8 caracteres
SELECT * FROM sakila.film
WHERE title LIKE '________';

-- Encontra todas as palavras com no mínimo 3 caracteres e que iniciam com E
SELECT * FROM sakila.film
WHERE title LIKE 'E__%';

SELECT * FROM film WHERE title LIKE '%ace%';
SELECT * FROM film WHERE description LIKE '%china';
SELECT * FROM film WHERE description LIKE '%girl%' AND title LIKE '%lord';
SELECT * FROM film WHERE title LIKE '___gon%' LIMIT 2;
SELECT * FROM film WHERE title LIKE '___gon%' AND description LIKE '%documentary%';
SELECT * FROM film WHERE title LIKE '%academy' OR title LIKE 'mosquito%' LIMIT 2;
SELECT * FROM film WHERE description LIKE '%monkey%' AND description LIKE '%sumo%';

SELECT * FROM rental WHERE customer_id IN (269, 239, 126, 399, 142);
SELECT * FROM address WHERE district IN ('QLD', 'Nagasaki', 'California', 'Attika', 'Mandalay', 'Nantou', 'Texas');
SELECT first_name, last_name, email FROM customer 
WHERE last_name in ( 'hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY  first_name;

SELECT email FROM customer 
-- WHERE address_id in ( 172, 173, 174, 175, 176)
WHERE address_id BETWEEN 172 AND 176
ORDER BY  first_name;

SELECT COUNT(*) quantidade_de_pagamentos FROM payment 
WHERE payment_date BETWEEN '2005-05-01' AND '2005-08-01';

SELECT * FROM film; 
SELECT title, release_year, length, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title;

SELECT title, rating FROM film
WHERE rating IN ( 'G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;

SELECT * FROM payment; 
-- Encontra todos os pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-31';

-- Encontra todos pagamentos deste dia, ignorando horas, minutos e segundos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-07-31%';

-- Encontra um pagamento com dia e hora exatos
SELECT * FROM sakila.payment
WHERE payment_date LIKE '2005-08-20 00:30:52';

-- Encontra pagamentos especificando um valor mínimo e um valor máximo para a data
SELECT *
FROM sakila.payment
WHERE payment_date BETWEEN '2005-05-26 00:00:00' AND '2005-05-27 23:59:59';

-- Teste cada um dos comandos a seguir:
SELECT DATE(payment_date) FROM sakila.payment; -- YYYY-MM-DD
SELECT YEAR(payment_date) FROM sakila.payment; -- Ano
SELECT MONTH(payment_date) FROM sakila.payment; -- Mês
SELECT DAY(payment_date) FROM sakila.payment; -- Dia
SELECT HOUR(payment_date) FROM sakila.payment; -- Hora
SELECT MINUTE(payment_date) FROM sakila.payment; -- Minuto
SELECT SECOND(payment_date) FROM sakila.payment; -- Segundo