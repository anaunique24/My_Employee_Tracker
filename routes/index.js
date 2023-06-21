const express = require('express');

const departmentRouter = require('./department');
const employeeRouter = require('./employee');
const rolesRouter = require('./roles');

const app = express();

app.use('/department', departmentRouter);
app.use('/employee', employeeRouter);
app.use('/roles', rolesRouter);

module.exports = app;