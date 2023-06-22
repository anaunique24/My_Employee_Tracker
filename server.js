const inquirer = require('inquirer');
const db = require('./db/connection');

function start(){
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
          "Exit",
        ],
    },
])
.then(function (answer) {
  switch (answer) {
    case "View all departments":
      viewAllDepartments();
      break;
    case "Add a department":
      addDepartment();
      break;
    case "View all roles":
      viewAllRoles();
      break;
    case "Add a role":
      addRole();
      break;
    case "View all employees":
      viewAllEmployees();
      break;
    case "Add an employee":
      addEmployee();
      break;
    case "Update an existing employees role":
      updateRole();
      break;
    case "Exit":
      connect.end;
      break;
  }
})
}

function viewAllDepartments() {
  db.query('SELECT * FROM department;', (err, res) => {
    if (err) {
      console.log(err);
  }
  res.json(result);
  });
};
function addDepartment() {
  inquirer
    .prompt({
      name: "department",
      type: "input",
      message: "Please enter the name of the new department"
    })
    .then(function (answer) {
      connection.query("INSERT INTO department SET ?", { name: answer.department }, function (err, res) {
          if (err) throw err;
          console.log("Department added successfully!");
          start();
        })
      })
}

function viewAllEmployees() {
  db.query('SELECT * FROM employee;', (err, res) => {
    if (err) {
      console.log(err);
  }
  res.json(result);
  });
};
function addEmployee() {
  inquirer
    .prompt({
      name: "employees",
      type: "input",
      message: "Please enter the name of the new employee"
    })
    .then(function (answer) {
      connection.query("INSERT INTO employee SET ?", { name: answer.employee }, function (err, res) {
          if (err) throw err;
          console.log("Empolyee added successfully!");
          start();
        })
      })
};
function viewAllRoles() {
  db.query('SELECT * FROM role;', (err, res) => {
    if (err) {
      console.log(err);
  }
  res.json(result);
  });
};
function addRole() {
  inquirer
    .prompt({
      name: "roles",
      type: "input",
      message: "Please enter the name of the new role"
    })
    .then(function (answer) {
      connection.query("INSERT INTO role SET ?", { name: answer.role }, function (err, res) {
          if (err) throw err;
          console.log("New role added successfully!");
          start();
        })
      })
};
function updateRole() {
  inquirer
      .prompt([
          {
              name: 'employeeId',
              type: 'list',
              message: 'Which employee role would you like to update?',
              choices: employeeChoices,
          },
          {
              name: 'roleId',
              type: 'list',
              message: 'Which role would you like to assign to the employee?',
              choices: roleChoices,
          },
      ])
      .then(function (answer) {
          connection.query('UPDATE employee SET ? WHERE ?', [{ role_id: answer.roleId }, { id: answer.employeeId }], function (err) {
              if (err) throw err;
              console.log('Employee role updated successfully!');
              start();
          });
      });
};

start();