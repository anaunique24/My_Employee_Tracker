const express = require('express');
const db = require('../db/connection');

const app = express();

//Read
app.get('/api/role', (req, res) => {
    db.query('SELECT * FROM role;', (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data)
    })
});

//Create
app.post(`api/add-role`, (req, res) => {
  db.query('INSERT INTO role (title, salary, department_id) VALUES (?)', [req.body.role], (err, result) => {
      if (err) {
          console.log(err);
      }
      res.json(result);
  });
});

module.exports = app;