-- UNION / UNION ALL

-- 1 Todos os funcionários foram promovidos a atores. Monte uma query que exiba a união da tabela 
-- staff com a tabela actor , exibindo apenas o nome e o sobrenome . Seu resultado não deve excluir 
-- nenhum funcionário ao unir as tabelas.

select first_name, last_name from actor
UNION ALL
select first_name, last_name from  staff;


-- 2 Monte uma query que una os resultados das tabelas customer e actor , exibindo os nomes que contêm 
-- a palavra "tracy" na tabela customer e os que contêm "je" na tabela actor . Exiba apenas os resultados 
-- únicos.
select * from actor;

select * from  customer;

(select first_name, last_name from customer WHERE CONCAT(last_name, first_name) LIKE '%TRACY%')
UNION
(select first_name, last_name from actor WHERE CONCAT(last_name, first_name) LIKE '%JE%');

-- 3 Monte uma query que exiba a união dos cinco últimos nomes da tabela actor , o primeiro nome da 
-- tabela staff e cinco nomes a partir da 15ª posição da tabela customer . Não permita que dados 
-- repetidos sejam exibidos. Ordene os resultados em ordem alfabética.

(select first_name from actor ORDER BY actor_id DESC LIMIT 5)
UNION 
(select first_name from staff LIMIT 1)
UNION
(select first_name from customer LIMIT 5 OFFSET 15)
ORDER BY first_name;

-- 4 Você quer exibir uma lista paginada com os nomes e sobrenomes de todos os clientes e atores do 
-- banco de dados, em ordem alfabética. Considere que a paginação está sendo feita de 15 em 15 
-- resultados e que você está na 4ª página. Monte uma query que simule esse cenário.

(select first_name, last_name from customer ORDER BY first_name, last_name LIMIT 60)
UNION
(select first_name, last_name from actor ORDER BY first_name, last_name LIMIT 60)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;


-- SUBQUERY EXECUTION PLAN COST 61.15
SELECT
    first_name,
    (
        SELECT address
        FROM sakila.address
        WHERE address.address_id = tabela_externa.address_id
    ) AS address
FROM sakila.customer AS tabela_externa;


-- JOIN EXECUTION PLAN COST 270.8
SELECT c.first_name, ad.address
FROM sakila.customer c
INNER JOIN sakila.address ad ON c.address_id = ad.address_id;