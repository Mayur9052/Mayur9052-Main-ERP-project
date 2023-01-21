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

function checkNotAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/api/admin/");
  }

module.exports = router;