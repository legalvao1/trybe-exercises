SELECT * FROM w3schools.shippers;
SELECT * FROM w3schools.customers;
SELECT * FROM w3schools.orders;

-- req 8

SELECT 
C.ContactName AS 'Nome de contato',
S.ShipperName AS 'Empresa que fez o envio',
O.OrderDate AS 'Data do pedido'
FROM w3schools.customers C
INNER JOIN w3schools.orders O ON O.CustomerID = C.CustomerID
INNER JOIN w3schools.shippers S ON S.ShipperID = O.ShipperID 
WHERE S.ShipperName IN('Speedy Express','United Package')
ORDER BY `Nome de contato`, `Empresa que fez o envio`, `Data do pedido`;

-- req 9

SELECT * FROM w3schools.shippers;
SELECT * FROM w3schools.employees;
SELECT * FROM w3schools.orders;

SELECT 
CONCAT(E.FirstName, ' ', E.LastName) AS 'Nome completo',
COUNT('Nome completo') AS 'Total de pedidos'
FROM w3schools.employees E
INNER JOIN w3schools.orders O ON O.EmployeeID = E.EmployeeID
GROUP BY `Nome completo`
ORDER BY `Total de pedidos`;

-- req 10 
SELECT * FROM w3schools.order_details;
SELECT * FROM w3schools.products;

SELECT 
P.ProductName AS 'Produto',
MIN(OD.Quantity) AS 'Mínima',
MAX(OD.Quantity) AS 'Máxima',
ROUND(AVG(OD.Quantity), 2) AS 'Média'
FROM w3schools.products P
INNER JOIN w3schools.order_details OD ON OD.ProductID = P.ProductID
GROUP BY P.ProductName
HAVING `Média` > 20
ORDER BY `Média`, `Produto` ; 

-- req 11
SELECT * FROM w3schools.customers;
SELECT * FROM w3schools.products;

SELECT 
c1.ContactName AS 'Nome',
c1.Country AS 'País',
(
SELECT 
COUNT(c2.Country)
FROM w3schools.customers c2
WHERE c2.Country = c1.Country AND c1.ContactName <> c2.ContactName
) AS 'Número de compatriotas'
FROM w3schools.customers as c1
ORDER BY c1.ContactName;





SELECT 
c1.ContactName AS 'Nome',
c1.Country AS 'País',
COUNT(c1.Country) AS 'Número de compatriotas'
FROM w3schools.customers c1, w3schools.customers c2
WHERE c2.Country = c1.Country 
AND c1.ContactName <> c2.ContactName 
GROUP BY c1.ContactName, c1.Country
HAVING `Número de compatriotas` > 0
ORDER BY c1.ContactName;



-- req 12 

SELECT * FROM hr.employees;

SELECT
CONCAT(E1.FIRST_NAME, ' ', E1.LAST_NAME) AS 'Nome completo funcionário 1',
E1.SALARY AS 'Salário funcionário 1',
E1.PHONE_NUMBER AS 'Telefone funcionário 1',
CONCAT(E2.FIRST_NAME, ' ', E2.LAST_NAME) AS 'Nome completo funcionário 2',
E2.SALARY AS 'Salário funcionário 2',
E2.PHONE_NUMBER AS 'Telefone funcionário 2'
FROM hr.employees E1, hr.employees E2
WHERE E1.JOB_ID = E2.JOB_ID 
AND CONCAT(E1.FIRST_NAME, ' ', E1.LAST_NAME)  <> CONCAT(E2.FIRST_NAME, ' ', E2.LAST_NAME)
ORDER BY `Nome completo funcionário 1`, `Nome completo funcionário 2`;

