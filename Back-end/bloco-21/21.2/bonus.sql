-- Exercício 10: Utilizando o INNER JOIN , selecione todas as informações dos filmes com avaliação 
-- maior que 8.

SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;

SELECT M.* FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id 
WHERE B.rating > 8 
AND M.theater_id IS NOT NULL;

-- Exercício 11: Utilizando o SELF JOIN , selecione os títulos e duração dos filmes que possuem o mesmo 
-- diretor.

SELECT M1.title, M1.length_minutes, M2.title, M2.length_minutes
FROM Pixar.Movies AS M1, Pixar.Movies AS M2
WHERE M1.director = M2.director
AND M1.title <> M2.title;

-- Exercício 12: Faça duas buscas, uma utilizando SUBQUERY e outra utilizando INNER JOIN , que retornem 
-- o título dos filmes que arrecadaram 500 milhões ou mais, e que possuem duração maior que 110 minutos.
SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;

SELECT title FROM Pixar.Movies AS M
INNER JOIN Pixar.BoxOffice AS B
ON B.movie_id = M.id
WHERE (B.domestic_sales >= 500000000 OR B.international_sales >= 500000000) AND M.length_minutes > 110;

SELECT 
    title
FROM
    Pixar.Movies
WHERE
    id IN (SELECT 
            movie_id
        FROM
            Pixar.BoxOffice
        WHERE
            international_sales >= 500000000)
        AND length_minutes > 110;
 