const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');
const path = require('path');

const api = require('./routes/index');

const PORT = process.env.PORT || 3001;
const app = express();

//setting up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/', api);

const startPage =
inquirer.prompt([
    {
        type: "list",
        name: "startMenu",
        message: "What would you like to do?",
        choices: [
          "View all departments",
          "Add a department",
          "View all roles",
          "Add role",
          "View all employees",
          "Add an employee",
          "Update an employee role",
        ],
    },
    {
        type: "list",
        message: "Choose the Department you would like to view.",
        name: "departments",
        choices: ["Sales", "Legal", "Finance", "Engineering"],
    },
    {
        type: "input",
        message: "Please enter the name of the new department.",
        name: "add-department",
    },
    {
        type: "list",
        message: "Choose the role you would like to view",
        name: "roles",
        choices: ["Account Manager", "Accountant", "Sales Manager", "Salesperson", "Lead Engineer", "Software Engineer", "Legal Team Lead", "Lawyer"],
    },
    {
        type: "input",
        message: "Please enter the role you would like to add.",
        name: "add-role",
    },
    {
        type: "list",
        message: "Which Employee would you like to view",
        name: "employee options",
        choices: [""]
    },
    {
        type: "input",
        message: "Please enter the name of the new employee",
        name: "new-employee",
    },
    {
        type: "input",
        message: "Who's role would you like to update?",
        name: "update-role",
    },
])


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });