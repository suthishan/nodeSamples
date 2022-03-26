const db = require('../db/db.js');


const employeemodel = function(employeeModel){
    this.emp_id = employeeModel.emp_id;
    this.emp_name = employeeModel.emp_name;
    this.emp_phone = employeeModel.emp_phone;
    this.emp_email = employeeModel.emp_email;
    this.emp_dob = employeeModel.emp_dob;
    this.emp_address = employeeModel.emp_address;
    this.emp_dept = employeeModel.emp_dept;
    this.emp_designation = employeeModel.emp_designation
} 

employeemodel.insert = (valuefromController, result) =>{
    var sqlQuery = `INSERT INTO emp_users (emp_name, emp_email, emp_phone, emp_dob, emp_address, emp_dept, emp_designation) VALUES
                    ('${valuefromController.emp_name}', '${valuefromController.emp_email}', '${valuefromController.emp_phone}',
                    '${valuefromController.emp_dob}', '${valuefromController.emp_address}', '${valuefromController.emp_dept}', 
                    '${valuefromController.emp_designation}')`;
console.log(sqlQuery);
    db.query(sqlQuery, (err, res)=>{
        console.log(res);
        console.log(err);
        if(res.affectedRows>0){
            result(null,res.affectedRows);
        }else{
            result(null,res.affectedRows);
        }

    });                  
}


module.exports = employeemodel;