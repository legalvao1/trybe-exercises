SELECT * FROM Provides WHERE Provider = 'RBT';
SELECT * FROM Provides ORDER BY price DESC LIMIT 5;
SELECT DISTINCT Provider, Price FROM Provides 
ORDER BY price DESC 
LIMIT 4 
OFFSET 3;

SELECT * FROM Provides WHERE Provider = 'HAL' ORDER BY Price DESC;
SELECT COUNT(Provider) FROM Provides WHERE Piece = 1;
