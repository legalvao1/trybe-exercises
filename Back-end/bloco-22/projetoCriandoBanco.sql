DROP DATABASE IF EXISTS SpotifyClone;

CREATE DATABASE SpotifyClone;

USE SpotifyClone;

CREATE TABLE plans(
	plan_id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    price decimal(3,2) NOT NULL,
    PRIMARY KEY (plan_id)
)engine=InnoDB;

ALTER TABLE plans MODIFY price decimal(5,2) NOT NULL DEFAULT '0.00';

INSERT INTO plans(name, price)
VALUES 
('gratuito', 0.00),
('familiar', 7.99),
('universitário', 5.99);


CREATE TABLE users(
	user_id INT AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    age INT NOT NULL,
    plan_id INT NOT NULL,
    PRIMARY KEY (user_id),
    FOREIGN KEY (plan_id) REFERENCES plans (plan_id)
)engine=InnoDB;

INSERT INTO users(name, age, plan_id)
VALUES 
('Thati', 23, 1),
('Cintia', 35, 2),
('Bill', 20, 3),
('Roger', 45, 1);

CREATE TABLE artists(
	artist_id INT AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (artist_id)
)engine=InnoDB;

INSERT INTO artists(first_name, last_name)
VALUES 
('Walter', 'Phoenix'),
('Peter', 'Strong'),
('Lance', 'Day'),
('Freedie', 'Shannon');


CREATE TABLE albuns(
	album_id INT AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL,
    PRIMARY KEY (album_id),
    FOREIGN KEY (artist_id) REFERENCES artists (artist_id)
)engine=InnoDB;

INSERT INTO albuns (name, artist_id)
VALUES 
('Envious', 1),
('Exuberant', 1),
('Hallowed Steam', 2),
('Incandescent', 3),
('Temporary Culture', 4);

CREATE TABLE songs(
	song_id INT AUTO_INCREMENT,
    song VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    PRIMARY KEY (song_id),
    FOREIGN KEY (album_id) REFERENCES albuns(album_id)
)engine=InnoDB;

INSERT INTO songs (song, album_id)
VALUES 
('Soul For Us', 1),	
('Reflections Of Magic', 1),
('Dance With Her Own', 1),
('Troubles Of My Inner Fire', 2),
('Time Fireworks', 2),
('Magic Circus', 3),
('Honey, So Do I', 3),
('Sweetie, Let''s Go Wild', 3),
('She Knows', 3),
('Fantasy For Me', 4),
('Celebration Of More', 4),
('Rock His Everything', 4),
('Home Forever', 4),
('Diamond Power', 4),
('Honey, Let''s Be Silly', 4),
('Thang Of Thunder', 5),
('Words Of Her Life', 5),
('Without My Streets', 5);

CREATE TABLE user_artists(
	user_id INT NOT NULL ,
    artist_id INT NOT NULL,
     CONSTRAINT PRIMARY KEY(user_id, artist_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (artist_id) REFERENCES artists(artist_id)
)engine=InnoDB;

INSERT INTO user_artists(user_id, artist_id)
VALUES
(1, 1),
(1, 4),
(1, 3),
(2, 1),
(2, 3),
(3, 2),
(3, 1),
(4, 4);


CREATE TABLE music_history(
	user_id INT NOT NULL ,
    song_id INT NOT NULL,
     CONSTRAINT PRIMARY KEY(user_id, song_id),
    FOREIGN KEY (user_id) REFERENCES users(user_id),
    FOREIGN KEY (song_id) REFERENCES songs(song_id)
)engine=InnoDB;


INSERT INTO music_history(user_id, song_id)
VALUES
(1, 1),
(1, 6),
(1, 14),
(1, 16),
(2, 13),
(2, 17),
(2, 2),
(2, 15),
(3, 4),
(3, 16),
(3, 6),
(4, 3),
(4, 18),
(4, 11);