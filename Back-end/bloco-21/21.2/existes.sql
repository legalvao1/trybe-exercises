-- 1 Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros que ainda não foram 
-- emprestados.

SELECT * FROM Books_Lent;
SELECT * FROM Books;

SELECT id, title FROM Books AS b
WHERE NOT EXISTS (
SELECT * FROM Books_Lent
WHERE b.Id = book_id
);

-- 2 Usando o EXISTS na tabela books_lent e books , exiba o id e título dos livros estão atualmente 
-- emprestados e que contêm a palavra "lost" no título.

SELECT id, title FROM Books AS b
WHERE EXISTS (
SELECT * FROM Books_Lent
WHERE b.Id = book_id 
) AND b.title LIKE '%lost%';

-- 3 Usando a tabela carsales e customers , exiba apenas o nome dos clientes que ainda não
-- compraram um carro.
SELECT * FROM CarSales;
SELECT * FROM Customers;

SELECT Name FROM Customers AS C
WHERE NOT EXISTS (
SELECT * FROM CarSales 
WHERE C.CustomerID = customerID);

-- 4 Usando o comando EXISTS em conjunto com JOIN e as tabelas cars , customers e carsales , exiba o 
-- nome do cliente e o modelo do carro de todos os clientes que fizeram compras de carros.
SELECT * FROM CarSales;
SELECT * FROM Customers;
SELECT * FROM Cars;


SELECT Cus.Name AS Customer, car.Name AS Car
FROM Customers AS Cus
INNER JOIN
Cars as car
WHERE EXISTS (
SELECT * FROM CarSales
WHERE CustomerID = Cus.CustomerID
AND CarID = Id);




