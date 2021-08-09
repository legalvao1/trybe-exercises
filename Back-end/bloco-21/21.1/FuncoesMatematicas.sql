-- Funções matemáticas do MySQL
SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- Divisão de inteiros com DIV e como encontrar seus restos com o MOD
-- O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número. 
-- Veja os exemplos abaixo:

SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

-- Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:
SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- 1 Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. 
-- Chame essa coluna de 'Par ou Ímpar' , onde ela pode dizer 'Par' ou 'Ímpar'.
SELECT IF(15 MOD 2 = 0, 'Par', 'Ímpar') AS 'Par ou Ímpar' ;

-- 2 Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12 pessoas 
-- podemos levar ao cinema sem que ninguém fique de fora?

SELECT 220 DIV 12;

-- 3 Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?
SELECT 220 MOD 12;