const express = require('express');
const app=express();
const router = express.Router();
const bodyParser=require('body-parser');
const { pool } = require('./connection');

router.use(express.urlencoded({ extended: false}));
router.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

pool.connect((err, res) => {
    if(err) return console.error(err.message);
    else return console.log("UPDATE FILE CONNECTED");
});

// Update account page

router.get('/edit_account/:id', checkNotAuthenticated, ( req, res) => {
    try {
        pool.query(` select * from account where id = ${ req.params.id } `, ( err, result) => {
            if(err) return console.error(err.message);
            res.render("edit_account", { Account_details : result.rows[0] });
         
        });
    } catch (error) {
        
        console.log(error);
    }
});

router.post('/edit_account/:id', (req, res) => {
    const { acc_name, acc_mobileno, acc_accountname, acc_accountno, acc_code, acc_ammount, acc_date } = req.body;

    try {
        pool.query( `update account set acc_name = $1, mobile_no = $2, account_name = $3, account_no = $4, account_ifsc_no = $5, total_ammount = $6, order_date = $7 where id = ${ req.params.id }`, [ acc_name, acc_mobileno, acc_accountname, acc_accountno, acc_code, acc_ammount, acc_date ], ( err, result ) => {
            if(err) return console.error(err.message);
            res.redirect('/api/admin/account');
        });
    } catch (error) {
        
        console.log(error);
    }
});

// // update product page 

router.get('/edit_product/:id', checkNotAuthenticated,( req, res) => {
    try {
        pool.query(` select * from product where id = ${ req.params.id } `, ( err, result) => {
            if(err) return console.error(err.message);
            res.render("edit_product", { product_details : result.rows[0] });
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/edit_product/:id', (req, res) => {
    const { pro_name, pro_mobileno, pro_productname, pro_producttype, pro_quantity, pro_date, pro_price } = req.body;

    try {
        pool.query( `update product set name = $1, mobile_no = $2, pro_name = $3, pro_type = $4, pro_quan = $5, pro_date = $6, pro_price = $7 where id = ${ req.params.id }`, [ pro_name, pro_mobileno, pro_productname, pro_producttype, pro_quantity, pro_date, pro_price ], ( err, result ) => {
            if(err) return console.error(err.message);
            res.redirect('/api/admin/production');
        });
    } catch (error) {
        console.log(error);
    }
});

// edit employee page 

router.get('/edit_employee/:id', checkNotAuthenticated,( req, res) => {
    try {
        pool.query(` select * from signup where id = ${req.params.id}`, ( err, result) => {
            if(err) return console.error(err.message);
            res.render("edit_employee", { Employee_details : result.rows[0] });
        });
    } catch (error) {
        console.log(error);
    }
});

router.post('/edit_employee/:id', (req, res) => {
    const { signup_name,signup_department, signup_mobileno, signup_gender, signup_dob, signup_age,  signup_interest,signup_Experience ,signup_qualification} = req.body;

    try {
        pool.query( `update signup set  name = $1, department = $2, mobileno = $3, gender=$4,  dob = $5, age = $6, interest = $7, experience= $8, qualification =$9  where id = ${ req.params.id }`, [signup_name,signup_department,signup_mobileno, signup_gender, signup_dob, signup_age, signup_interest,signup_Experience ,signup_qualification ], ( err, result ) => {
            if(err) return console.error(err.message);
            res.redirect('/api/admin/all_employee');
        });
    } catch (error) {
        console.log(error);
    }
});

//edit project

router.get('/edit_project/:id', checkNotAuthenticated, ( req, res) => {
    try {
        pool.query(` select * from project where id = ${req.params.id}`, ( err, result) => {
            if(err) return console.error(err.message);
            res.render("edit_project", { software_details : result.rows[0] });
        });
    } catch (error) {
        console.log(error);
    }
});
router.post('/edit_project/:id',(req,res)=>{
    const{proj_name,project_email,project_name,project_language,project_link,project_report} = req.body;

    try{
        pool.query(`update project set name = $1, email = $2, projectname = $3, languages = $4, link = $5, report = $6 where id = ${req.params.id}`, [proj_name,project_email,project_name,project_language,project_link,project_report],(err,result)=>{
        if(err) return console.error(err.message);
        res.redirect('/api/admin/software');
        });
     
    } catch (error) {
        console.log(error);
     }
});

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/api/admin/");
  }

module.exports = router;