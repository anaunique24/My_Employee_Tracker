const express = require('express');
const inquirer = require('inquirer');
const sql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

app.listen(PORT, () => {
    console.log(`App listening at http://localhost:${PORT}`);
  });