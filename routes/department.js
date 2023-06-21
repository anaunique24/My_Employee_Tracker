const express = require('express');
const db = require('../db/connection');

const app = express();

//Read
app.get('/api/department', (req, res) => {
    db.query('SELECT * FROM department;', (err, data) => {
      if (err) {
        throw err;
      }
      res.json(data)
    })
});

//Update
app.post(`api/add-department`, (req, res) => {
    db.query('INSERT INTO department (name) VALUES (?)', [req.body.department], (err, result) => {
        if (err) {
            console.log(err);
        }
        res.json(result);
    });
});

module.exports = app;