USE local_festival;

CREATE TABLE `festival_api_first` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `content_id` int not NULL,
    `title` varchar(255) not NULL,
    `image` varchar(255) not NULL,
    `start_date` varchar(255) not NULL,
    `end_date` varchar(255) not NULL,
    `location` varchar(255) not NULL,
    `tel` varchar(255) not NULL
  
);

CREATE TABLE `festival_api_second` (
    `id` int PRIMARY KEY AUTO_INCREMENT,
    `content_id` int not NULL,
    `overview` varchar(4080) not Null,
    `url` varchar(2040) not Null
);
