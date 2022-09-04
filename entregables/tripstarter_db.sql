CREATE DATABASE tripstarter_db;
USE tripstarter_db;
CREATE TABLE users (
ID INT NOT NULL AUTO_INCREMENT,
email VARCHAR(100), 
name VARCHAR(100), 
celular INTEGER, 
password VARCHAR(100),
avatar VARCHAR (100),
PRIMARY KEY (ID)
);

CREATE TABLE products (
ID INT NOT NULL AUTO_INCREMENT,
name VARCHAR(255),
price INTEGER,
description VARCHAR(100),
image VARCHAR(100),
continent VARCHAR(30),
rate INTEGER,
opinions INTEGER,
country VARCHAR(100),
city VARCHAR (100),
imageProductDetail VARCHAR(100),
discount VARCHAR(100),
PRIMARY KEY (ID)
);

CREATE TABLE users_products (
ID INT NOT NULL AUTO_INCREMENT,
users_id INTEGER,
products_id INTEGER,
PRIMARY KEY (ID),
FOREIGN KEY (users_id) REFERENCES users(ID),
FOREIGN KEY (products_id) REFERENCES products(ID)
);

