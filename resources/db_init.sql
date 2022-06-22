CREATE DATABASE IF NOT EXISTS payments_nodejs;
USE `payments_nodejs`;

CREATE USER IF NOT EXISTS
'payments-api'@'localhost' IDENTIFIED BY 'abc123';
ALTER USER 'payments-api'@'localhost' IDENTIFIED WITH mysql_native_password BY 'abc123';
GRANT ALL PRIVILEGES ON payments_nodejs.* TO 'payments-api'@'localhost';



