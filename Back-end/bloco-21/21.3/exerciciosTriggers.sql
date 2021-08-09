-- 1 Crie um Trigger para INSERT que deve definir o valor do campo release_year da tabela movies como o 
-- ano atual de forma dinâmica, sem haver a necessidade de digitar manualmente o valor do ano. 
-- Além disso, crie um outro Trigger para INSERT que adiciona um novo registro na tabela movies_logs , 
-- informando o movie_id do filme que acaba de ser inserido na tabela movies , a executed_action como 
-- 'INSERT' e a log_date como a data atual.

SELECT * FROM BeeMovies.movies;
SELECT * FROM BeeMovies.movies_logs;

USE BeeMovies;

DELIMITER $$

CREATE TRIGGER insert_release_year
BEFORE INSERT ON movies
FOR EACH ROW
BEGIN
    SET NEW.release_year = YEAR(NOW());
END $$ 

DELIMITER ;

-- ----------------------------------------------------------------------------------------

USE BeeMovies;

DELIMITER $$

CREATE TRIGGER insert_movie_logs
AFTER INSERT ON movies
FOR EACH ROW
BEGIN
    INSERT INTO movies_logs(movie_id, executed_action, log_date)
    VALUES(NEW.movie_id, 'INSERT', NOW());
END $$

DELIMITER ;

-- ----------------------------------------------------------
INSERT INTO BeeMovies.movies(ticket_price, ticket_price_estimation)
VALUES(20, 'vinte');

-- 2 Crie um Trigger para UPDATE que, ao receber uma alteração na tabela movies , deve comparar o 
-- valor anterior de ticket_price com o valor sendo inserido nesta atualização. Caso o valor seja maior 
-- que o anterior, insira na coluna ticket_price_estimation o valor de 'Increasing' . Caso contrário,
--  insira o valor 'Decreasing' . Adicionalmente, insira um novo registro na tabela movies_logs , 
-- contendo informações sobre o registro alterado ( movie_id , executed_action e log_date ).
DROP TRIGGER trigger_movie_update;

USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movie_update
	BEFORE UPDATE ON movies
    FOR EACH ROW
BEGIN 
	SET NEW.ticket_price_estimation = IF(NEW.ticket_price > OLD.ticket_price, 'Increasing', 'Decreasing');
    INSERT INTO movies_logs(movie_id,  executed_action, log_date)
    VALUES(NEW.movie_id, 'UPDATE', NOW());
END $$ 

DELIMITER $$;

-- 
UPDATE BeeMovies.movies
SET ticket_price = 20
WHERE movie_id = 1;

-- 3 Crie um Trigger na tabela movies que, ao ter algum de seus registros excluídos, deve enviar uma 
-- informação para a tabela movies_logs , onde devem ser guardados a data da exclusão, a 
-- executed_action 'DELETE' e o id do filme excluído.

USE BeeMovies;

DELIMITER $$
CREATE TRIGGER trigger_movie_delete
	AFTER DELETE ON movies
    FOR EACH ROW
BEGIN 
    INSERT INTO movies_logs(movie_id,  executed_action, log_date)
    VALUES(OLD.movie_id, 'DELETE', NOW());
END $$ 

DELIMITER $$;

DELETE FROM BeeMovies.movies WHERE movie_id = 1;


