CREATE DATABASE IF NOT EXISTS concredito;
-- hola
USE concredito;

CREATE TABLE prospecto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    first_lastName VARCHAR(255) NOT NULL,
    second_lastName VARCHAR(255),
    street VARCHAR(255) NOT NULL,
    house_number VARCHAR(255) NOT NULL,
    street2 VARCHAR(255) NOT NULL,
    postal_code VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    rfc VARCHAR(255) NOT NULL,
    status ENUM('Sent', 'Approved', 'Declined') NOT NULL,
    observations TEXT
);

CREATE TABLE document (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  prospecto_id int NOT NULL,
  name varchar(255) NOT NULL,
  path varchar(255) NOT NULL,
  size int NOT NULL,
  mimetype varchar(255) NOT NULL,
  KEY prospecto_id (prospecto_id),
  FOREIGN KEY (prospecto_id) REFERENCES prospecto(id) ON DELETE CASCADE
);

DELIMITER //

CREATE PROCEDURE getProspectoAndDocumentsById(
    IN p_prospecto_id INT
)
BEGIN

    SELECT *
    FROM prospecto
    WHERE id = p_prospecto_id;
    
    SELECT *
    FROM document
    WHERE prospecto_id = p_prospecto_id;

END //

DELIMITER ;