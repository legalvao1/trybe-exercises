SELECT * FROM Pecas;
SELECT * FROM Pecas WHERE name LIKE 'GR%';
SELECT * FROM Fornecimentos;
SELECT * FROM Fornecimentos WHERE peca = 2 ORDER BY Fornecedor; 
SELECT peca, Preco, Fornecedor FROM Fornecimentos WHERE Fornecedor LIKE '%N%'; 
SELECT * FROM Fornecimentos WHERE Preco > 15 AND Preco < 40 ORDER BY Preco; 
SELECT * FROM Fornecimentos WHERE Preco BETWEEN 15 AND 40 ORDER BY Preco; 

SELECT * FROM Fornecedores;
SELECT * FROM Fornecedores WHERE name LIKE '%LTDA' ORDER BY name DESC;
SELECT COUNT(*) FROM Fornecedores WHERE code LIKE '%F%';

SELECT * FROM Vendas;
SELECT COUNT(*) FROM Vendas WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';