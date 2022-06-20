USE local_festival;

CREATE TABLE IF NOT EXISTS `festival_api_first` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `content_id` int not NULL,
    `title` varchar(255) not NULL,
    `image` varchar(255) not NULL,
    `start_date` varchar(255) not NULL,
    `end_date` varchar(255) not NULL,
    `location` varchar(255) not NULL,
    `tel` varchar(255) not NULL
  
);

CREATE TABLE IF NOT EXISTS `festival_api_second` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `content_id` int not NULL,
    `overview` varchar(4080) not Null,
    `url` varchar(2040) not Null
);

CREATE TABLE IF NOT EXISTS `users` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `username` varchar(255) not NULL,
    `password` varchar(255) not NULL,
    `nickname` varchar(255) not NULL,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS `pick` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `createdAt` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

ALTER TABLE festival_api_first ADD UNIQUE (content_id);

ALTER TABLE pick ADD user_id int;

ALTER TABLE pick ADD content_id int;

ALTER TABLE pick ADD FOREIGN KEY (user_id) REFERENCES users (id);

ALTER TABLE pick ADD FOREIGN KEY (content_id) REFERENCES festival_api_first (content_id);
