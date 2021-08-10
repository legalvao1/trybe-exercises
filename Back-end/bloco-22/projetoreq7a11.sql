-- req 7
SELECT * FROM SpotifyClone.artists;
SELECT * FROM SpotifyClone.albuns;
SELECT * FROM SpotifyClone.user_artists;

CREATE VIEW perfil_artistas AS
SELECT 
CONCAT(a.first_name, ' ', a.last_name) 'artista',
al.name 'album',
(SELECT
COUNT(ua.user_id) 
FROM SpotifyClone.user_artists ua WHERE ua.artist_id = a.artist_id
) 'seguidores'
FROM SpotifyClone.artists a
INNER JOIN SpotifyClone.albuns al ON al.artist_id = a.artist_id
ORDER BY `seguidores` DESC, `artista`, `album`;

-- req 8 

SELECT user_id FROM users where name = 'Thati';
SELECT * FROM SpotifyClone.users;
SELECT * FROM SpotifyClone.music_history;
SELECT * FROM SpotifyClone.user_artists;

DROP TRIGGER trigger_usuario_delete;

USE SpotifyClone;
DELIMITER $$

CREATE TRIGGER trigger_usuario_delete
BEFORE  DELETE ON SpotifyClone.users
FOR EACH ROW
BEGIN
    DELETE FROM SpotifyClone.music_history WHERE OLD.user_id = user_id;
    DELETE FROM SpotifyClone.user_artists WHERE OLD.user_id = user_id;
END $$

DELIMITER ;

SET SQL_SAFE_UPDATES = 0;

DELETE FROM SpotifyClone.users WHERE name = 'Thati';


INSERT INTO music_history(user_id, song_id)
VALUES
(6, 1),
(6, 6),
(6, 14);

INSERT INTO user_artists(user_id, artist_id)
VALUES
(6, 1),
(6, 4),
(6, 3);

INSERT INTO users(name, age, plan_id)
VALUES 
('Thati', 23, 1);

--  req 9 -------------------------------------------------------------------------------------
DELIMITER $$

CREATE PROCEDURE albuns_do_artista (IN artist_name VARCHAR(50))
BEGIN
SELECT 
CONCAT(a.first_name, ' ', a.last_name) 'artista',
al.name 'album'
FROM SpotifyClone.artists a
INNER JOIN SpotifyClone.albuns al ON al.artist_id = a.artist_id
WHERE CONCAT(a.first_name, ' ', a.last_name) = artist_name
ORDER BY `album`;
END $$

DELIMITER ;

CALL albuns_do_artista('Walter Phoenix');

-- req 10


SELECT * FROM SpotifyClone.users;
SELECT * FROM SpotifyClone.music_history;
SELECT * FROM SpotifyClone.user_artists;


USE SpotifyClone;

DELIMITER $$

CREATE FUNCTION quantidade_musicas_no_historico(id INT)
RETURNS INT READS SQL DATA
BEGIN
DECLARE total_musicas INT;
SELECT COUNT(mh.song_id) 
FROM SpotifyClone.music_history mh
INNER JOIN SpotifyClone.users u ON u.user_id = mh.user_id
WHERE u.user_id = id INTO total_musicas;
RETURN total_musicas;
END $$

DELIMITER ;

SELECT quantidade_musicas_no_historico(3);

-- req 11

SELECT * FROM SpotifyClone.users;
SELECT * FROM SpotifyClone.music_history;
SELECT * FROM SpotifyClone.plans;

CREATE VIEW cancoes_premium AS
SELECT 
s.song 'nome',
COUNT(mh.song_id) 'reproducoes'
FROM SpotifyClone.songs s
INNER JOIN SpotifyClone.music_history mh ON mh.song_id = s.song_id
INNER JOIN SpotifyClone.users u ON u.user_id = mh.user_id
WHERE u.plan_id IN(2, 3)
GROUP BY `nome`
ORDER BY `nome`;
