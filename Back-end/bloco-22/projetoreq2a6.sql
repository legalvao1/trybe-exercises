-- req 2

SELECT * FROM SpotifyClone.artists;
SELECT * FROM SpotifyClone.songs;
SELECT * FROM SpotifyClone.albuns;

CREATE VIEW estatisticas_musicais AS
SELECT 
COUNT(s.song_id) 'cancoes',
COUNT(distinct(al.artist_id)) 'artistas',
COUNT(distinct(s.album_id)) 'albuns'
FROM SpotifyClone.songs s
INNER JOIN SpotifyClone.albuns al ON s.album_id = al.album_id;

select * from estatisticas_musicais;

-- req 3
SELECT * FROM SpotifyClone.songs;
SELECT * FROM SpotifyClone.music_history;
SELECT * FROM SpotifyClone.users;

CREATE VIEW historico_reproducao_usuarios AS
SELECT 
u.name 'usuario',
s.song 'nome'
FROM SpotifyClone.users u
INNER JOIN SpotifyClone.music_history mh ON u.user_id = mh.user_id
INNER JOIN SpotifyClone.songs s ON s.song_id = mh.song_id
ORDER BY `usuario`, `nome`;

-- REQ 4

SELECT * FROM SpotifyClone.artists;
SELECT * FROM SpotifyClone.user_artists;

CREATE VIEW top_3_artistas AS
SELECT 
CONCAT(a.first_name, ' ', a.last_name) 'artista',
COUNT(ua.user_id) 'seguidores'
FROM SpotifyClone.artists a
INNER JOIN SpotifyClone.user_artists ua ON ua.artist_id = a.artist_id
GROUP BY a.artist_id
ORDER BY `seguidores` DESC, `artista`
LIMIT 3;

-- req 5
SELECT * FROM SpotifyClone.songs;
SELECT * FROM SpotifyClone.music_history;
SELECT * FROM SpotifyClone.users;

CREATE VIEW top_2_hits_do_momento AS
SELECT 
s.song 'cancao',
COUNT(mh.user_id) 'reproducoes'
FROM SpotifyClone.songs s
INNER JOIN music_history mh ON s.song_id = mh.song_id
GROUP BY s.song 
HAVING `reproducoes` > 1
ORDER BY`reproducoes` DESC, `cancao`
LIMIT 2;

-- req 6
SELECT * FROM SpotifyClone.plans;
SELECT * FROM SpotifyClone.users;


CREATE VIEW faturamento_atual AS
SELECT
MIN(p.price) 'faturamento_minimo',
MAX(p.price) 'faturamento_maximo',
ROUND(SUM(p.price) / COUNT(u.user_id), 2) 'faturamento_medio',
SUM(p.price) 'faturamento_total'
FROM SpotifyClone.plans p 
INNER JOIN SpotifyClone.users u ON u.plan_id = p.plan_id;