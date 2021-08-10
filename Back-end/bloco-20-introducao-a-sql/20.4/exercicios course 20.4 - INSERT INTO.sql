SELECT * FROM staff;
INSERT INTO staff(first_name, last_name, address_id, store_id, active, username)
VALUES('Mary', 'Williams', 5, 1, 2, 'Mary');

INSERT INTO staff(first_name, last_name, address_id, store_id, active, username)
VALUES
('John', 'Wick', 6, 2, 2, 'John'),
('Will', 'Johnson',7, 1, 1, 'Will');

SELECT * FROM customer limit 5;
INSERT INTO actor(first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;
SELECT * FROM actor;

SELECT * FROM category;
INSERT INTO category (name)
VALUES 
('Sports'),
('Games'),
('Cats');

SELECT * FROM store;
INSERT INTO store(manager_staff_id, address_id)
VALUES(3, 2);