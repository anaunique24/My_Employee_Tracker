DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR (30)
);

CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30),
    salary INT NOT NULL,
    department INT,
    FOREIGN KEY (department),
    REFERENCES department(id),
    ON DELETE SET NULL
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role INT,
    FOREIGN KEY (role),
    REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id),
    REFERENCES employee(id),
    ON DELETE SET NULL
);