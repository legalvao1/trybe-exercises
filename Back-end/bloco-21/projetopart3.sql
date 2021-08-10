-- req 13
SELECT * FROM w3schools.orders;
SELECT * FROM w3schools.order_details;
SELECT * FROM w3schools.products;

SELECT 
P.ProductName 'Produto',
P.Price 'Preço'
FROM w3schools.products P
RIGHT JOIN w3schools.order_details O ON O.ProductID = P.ProductID
WHERE O.Quantity > 80
ORDER BY P.ProductName;

-- req 14

SELECT * FROM w3schools.customers;
SELECT * FROM w3schools.suppliers;

(SELECT Country AS 'País' FROM w3schools.customers) 
UNION 
(SELECT Country AS 'País' FROM w3schools.suppliers) 
ORDER BY `País` 
LIMIT 5;

-- req 15

SELECT * from hr.jobs;
SELECT * from hr.employees;


USE hr;

DELIMITER $$

CREATE PROCEDURE buscar_media_por_cargo(IN cargo VARCHAR(100))
BEGIN
SELECT 
ROUND(AVG(E.SALARY), 2) AS 'Média salarial'
FROM hr.employees E
INNER JOIN hr.jobs J ON E.JOB_ID = J.JOB_ID
WHERE JOB_TITLE = cargo;
END $$

DELIMITER ;

CALL buscar_media_por_cargo('Programmer');

-- req 16

SELECT * from hr.employees;
SELECT * from hr.job_history;

SELECT COUNT(JH.JOB_ID)
FROM hr.job_history JH
INNER JOIN hr.employees E ON JH.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE E.EMAIL = 'NKOCHHAR';


USE hr;
DELIMITER $$

CREATE FUNCTION buscar_quantidade_de_empregos_por_funcionario(email VARCHAR(100))
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_empregos INT;
SELECT COUNT(JH.JOB_ID)
FROM hr.job_history JH
INNER JOIN hr.employees E ON JH.EMPLOYEE_ID = E.EMPLOYEE_ID
WHERE E.EMAIL = email INTO total_empregos;
RETURN total_empregos;
END$$

DELIMITER ;

SELECT buscar_quantidade_de_empregos_por_funcionario('NKOCHHAR');

-- req 17

SELECT * from w3schools.orders;

USE w3schools;

DELIMITER $$

CREATE TRIGGER insert_order_date
BEFORE INSERT ON w3schools.orders
FOR EACH ROW
BEGIN
    SET NEW.OrderDate = NOW();
END $$

DELIMITER $$ ;
