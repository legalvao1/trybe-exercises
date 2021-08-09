-- Arredondando Valores
-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

 -- O arredondamento sempre para cima pode ser feito com o CEIL :
SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

-- O arredondamento sempre para baixo pode ser feito com o FLOOR :
SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.2); -- 10

-- Exponenciação e Raiz Quadrada

SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

-- Gerando valores aleatórios

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

-- 1 Monte uma query que gere um valor entre 15 e 20 .
SELECT ROUND(15 + (RAND() * 5));

-- 2 Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.
SELECT ROUND(15.7515971, 5); 

-- 3 Estamos com uma média de 39.494 de vendas de camisas por mês. 
-- Qual é o valor aproximado para baixo dessa média?
SELECT FLOOR(39.494);

-- 4 Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. 
-- Qual é o valor aproximado para cima dessa média?
SELECT CEIL(85.234);