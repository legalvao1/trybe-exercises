SELECT * FROM customer;
SELECT * FROM customer WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';
SELECT first_name FROM customer WHERE active IS FALSE AND first_name <>'kenneth' AND store_id = 2
ORDER BY first_name;

SELECT * FROM film;
SELECT title, description, release_year, replacement_cost FROM film
WHERE rating  = 'PG-13' and replacement_cost > 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

SELECT * FROM customer;
SELECT COUNT(*) FROM customer WHERE active IS TRUE AND store_id = 1; 
SELECT * FROM customer WHERE active IS NOT TRUE AND store_id = 1; 

SELECT * FROM film;
SELECT * FROM film
WHERE rating = 'NC-17' ORDER BY rental_rate, title
LIMIT 50;


