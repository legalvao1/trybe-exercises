SELECT COUNT(*) FROM payment WHERE DATE(payment_date) = '2005-05-25';
SELECT COUNT(payment_date) FROM payment WHERE payment_date LIKE '2005-05-25%';

SELECT COUNT(*) FROM payment WHERE payment_date BETWEEN '2005-07-01' AND '2005-08-22';

SELECT * FROM rental;
SELECT rental_date from rental WHERE rental_id = 10330;

SELECT 
YEAR (rental_date) AS year,
MONTH (rental_date) as month,
DAY (rental_date) as day,
HOUR(rental_date) as hour,
MINUTE(rental_date) as minute,
SECOND(rental_date) as second
FROM rental WHERE rental_id = 10330;

SELECT * FROM payment;
SELECT * FROM payment WHERE payment_date LIKE '2005-07-28 22%'; 