INSERT INTO department (name)
VALUES  ("Sales"),
        ("Legal"),
        ("Finance"),
        ("Engineering");

INSERT INTO role (title, salary, department_id)
VALUES  ("Sales Lead", 100000, 1),
        ("Salesperson", 80000, 1),
        ("Lead Engineer", 150000, 4),
        ("Software Engineer", 120000, 4),
        ("Account Manager", 160000, 3),
        ("Accountant", 125000, 3),
        ("Legal Team Lead", 250000, 2),
        ("Lawyer", 190000, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Doe", 1, NULL),
        ("Mike", "Chan", 2, 1),
        ("Jane", "Doe", 3, NULL),
        ("Janet", "Jackson", 4, 3),
        ("Molly", "Green", 5, NULL),
        ("Morgan", "Freewoman", 6, 5),
        ("Ben", "Doverman", 7, NULL),
        ("Phil", "McKracen", 8, 7);