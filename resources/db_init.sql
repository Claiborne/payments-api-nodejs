CREATE DATABASE IF NOT EXISTS payments_nodejs;
USE `payments_nodejs`;

CREATE USER IF NOT EXISTS
'payments-api'@'localhost' IDENTIFIED BY 'abc123';
GRANT ALL PRIVILEGES ON payments_nodejs.* TO 'payments-api'@'localhost';



