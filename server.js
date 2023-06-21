const express = require('express');
const inquirer = require('inquirer');
const db = require('./db/connection');

const PORT = process.env.PORT || 3001;
const app = express();

//setting up middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

  inquirer
    .prompt([
      {
        type: "rawlist",
        name: "startMenu",
        message: "What would you like to do?",
        choices: [
          "view all departments",
          "view all roles",
          "view all employees",
          "add a department",
          "add a role",
          "add an employee",
          "update an employee role",
        ],
      },
    ])


app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });