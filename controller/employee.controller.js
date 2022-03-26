const employeeModel = require('../models/employee.model.js');


exports.insertEMP = (req, res) =>{
    console.log("TEST controller");
    const emp = new employeeModel({
        emp_name:req.body.emp_name,
        emp_phone : req.body.emp_phone,
        emp_email : req.body.emp_email,
        emp_dob : req.body.emp_dob,
        emp_address : req.body.emp_address,
        emp_dept : req.body.emp_dept,
        emp_designation : req.body.emp_designation
    });
console.log(emp);
    employeeModel.insert(emp,(err, data)=>{
        console.log(err);
        console.log(data);
        if(err){
            res.json({status:0,message:"error while inserting"});
        }else if(data>0){
            res.json({status:1,message:"Success"});
        }else{
            res.json({status:0,message:"Failed to insert"});
        }
    });
}