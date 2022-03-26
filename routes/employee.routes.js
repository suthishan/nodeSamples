module.exports = app=>{

    var employeeController = require('../controller/employee.controller.js');
    var router = require('express').Router();
console.log("TEST");
    

    router.post('/insertEmp',employeeController.insertEMP);

    app.use('/api',router);
};