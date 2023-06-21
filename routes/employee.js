const express = require('express');
const db = require('../db/connection');

const app = express();

//Read
app.get('/api/employee', (req, res) => {
    db.query('SELECT * FROM employee;', (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data)
    })
});

//Create
app.post(`api/add-employee`, (req, res) => {
  db.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?)', [req.body.employee], (err, result) => {
      if (err) {
          console.log(err);
      }
      res.json(result);
  });
});

//Update
app.put(`/api/update-role`, (req, res) => {
    db.query('UPDATE role SET role = ? WHERE employee_id = ?', [req.body.role, req.body.employee], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});

module.exports = app;