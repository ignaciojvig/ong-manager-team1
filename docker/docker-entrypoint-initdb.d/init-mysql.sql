# create databases
CREATE DATABASE IF NOT EXISTS `mysqldb`;
CREATE DATABASE IF NOT EXISTS `mysqldb_test`;

CREATE USER 'admin'@'%' IDENTIFIED BY 'admin';
GRANT ALL PRIVILEGES ON *.* TO 'admin'@'%';