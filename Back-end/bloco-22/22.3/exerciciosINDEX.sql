-- 1 Verifique o impacto de um FULLTEXT INDEX na tabela category (banco de dados sakila ), adicionando-o na 
-- coluna name . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan , como já 
-- foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure 
-- novamente esse custo.
SELECT *
FROM sakila.category;

SHOW INDEX FROM sakila.category;

CREATE FULLTEXT INDEX name_index ON category(name);

-- Após ter criado o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE MATCH(name) AGAINST('action');  -- 0.35

DROP INDEX name_index ON category;

-- Após ter excluído o índice, mensure o custo com a seguinte query:
SELECT *
FROM sakila.category
WHERE name LIKE '%action%'; -- 1.85


-- 2 Verifique o impacto de um INDEX na tabela address (banco de dados sakila ) adicionando-o na coluna 
-- postal_code . Após ter adicionado o índice, mensure o custo da query utilizando o execution plan, como já 
-- foi feito em lições anteriores. Após ter criado e mensurado o custo da query, exclua o índice e mensure 
-- novamente esse custo.
SELECT *
FROM sakila.address;

CREATE INDEX postal_code_index ON address(postal_code);

SHOW INDEX FROM sakila.address;

-- Mensure o custo com a seguinte query:
SELECT *
FROM sakila.address
WHERE postal_code = '36693'; -- 0.95

DROP INDEX postal_code_index ON address; -- 65.40

