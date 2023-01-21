const express = require('express');
const app=express();
const router = express.Router();
const { pool } = require('./connection');
const bodyParser=require('body-parser');
const authenticate = require('./autheticate');

router.use(express.urlencoded({ extended: false}));
router.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));

pool.connect((err, res) => {
  if(err) return console.error(err.message);
  else return console.log("INSERT FILE CONNECTED");
});

// addaccount page

router.post('/addaccount', (req, res) => {
    try {
      const { acc_name, acc_mobileno, acc_accountname, acc_accountno, acc_code, acc_ammount, acc_date } = req.body;
    const sql_insert = "Insert into account (acc_name, mobile_no, account_name, account_no, account_ifsc_code, total_ammount, order_date ) values($1, $2, $3, $4, $5, $6, $7)";
  
    pool.query( sql_insert, [ acc_name, acc_mobileno, acc_accountname, acc_accountno, acc_code, acc_ammount, acc_date ], ( err, res ) => {
      if (err) return console.error(err.message);
      console.log(res);
    });
    res.redirect("account");
    } catch (error) {
      console.log(error);
    }
  })
  
// Add Product Page

router.post('/addproduct', (req, res) => {
   try {
    const { pro_name, pro_mobileno, pro_productname, pro_producttype, pro_quantity, pro_date, pro_price } = req.body;
    const sql_insert = "Insert into product (name, mobile_no, pro_name, pro_type, pro_quan, pro_date, pro_price ) values($1, $2, $3, $4, $5, $6, $7)";
  
    pool.query( sql_insert, [ pro_name, pro_mobileno, pro_productname, pro_producttype, pro_quantity, pro_date, pro_price ], ( err, res ) => {
      if (err) return console.error(err.message);
      console.log(res);
    });
    res.redirect("production");
   } catch (error) {
    console.log(error);
   }
  })

// Add Contact Page

router.post('/contact', (req, res) => {
  try {
    const { contact_name, contact_email, contact_mess } = req.body;
  const sql_insert = "Insert into contact ( name, email, message) values($1, $2, $3)";

  pool.query( sql_insert, [ contact_name, contact_email, contact_mess ], ( err, res ) => {
    if (err) return console.error(err.message);
    console.log(res);
  });
  res.redirect("contact_details");
  } catch (error) {
    console.log(error);
  }
})

// Add feedback Page

router.post('/feedback', (req, res) => {
  try {
    const { feedback_name, feedback_email, feedback_mess } = req.body;
  const sql_insert = "Insert into feedback ( name, email, message ) values($1, $2, $3)";

  pool.query( sql_insert, [ feedback_name, feedback_email, feedback_mess ], ( err, res ) => {
    if (err) return console.error(err.message);
    console.log(res);
  });
  res.redirect("feedback_details");
  } catch (error) {
    console.log(error);
  }
})

// Add Leave Page

router.post('/leaveletter', (req, res) => {
 try {
  const { leave_name, leave_email, leave_sub, leave_purpose } = req.body;
  const sql_insert = "Insert into leave ( name, email, subject, purpose ) values($1, $2, $3, $4)";

  pool.query( sql_insert, [ leave_name, leave_email, leave_sub, leave_purpose ], ( err, res ) => {
    if (err) return console.error(err.message);
    console.log(res);
  });
  res.redirect("leave_details");
 } catch (error) {
  console.log(error);
 }
})

// Add Signup Page

// router.post('/signup', (req, res) => {
//   const { signup_enroll, signup_name, signup_position, signup_department, signup_email, signup_password, signup_mobileno, signup_qualification, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest } = req.body;
//   const sql_insert = "Insert into signup ( enroll, name, position, department, email, password, mobileno, qualification, age, address, dob, gender, experience, interest ) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)";

//   pool.query( sql_insert, [ signup_enroll, signup_name, signup_position, signup_department, signup_email, signup_password, signup_mobileno, signup_qualification, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest ], ( err, res ) => {
//     if (err) return console.error(err.message);
//     console.log(res);
    
//   });
//   res.redirect("signup");
  
// })

//project

router.post('/project', (req, res) =>{
  try {
    const  { proj_name,project_email,project_name,project_language,project_link,project_report } = req.body;

  const sql_insert = "insert into project (name,email,projectname,languages,link,report) values($1 ,$2 ,$3 ,$4 ,$5 ,$6)";

  pool.query(sql_insert, [proj_name,project_email,project_name,project_language,project_link,project_report] , (err,res)=>{
    if (err) return console.error(err.message);
    console.log(res);
  });
  res.redirect("software");
  } catch (error) {
    console.log(error);
  }
})


router.post('/users', (req, res) => {
  try {
    const { signup_name, signup_position, signup_email, signup_password, signup_department, signup_mobileno, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest, signup_qualification } = req.body;
  const sql_insert = "Insert into users ( name, position, email, password, department, mobileno,  age, address, dob, gender, experience, interest, qualification) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)";

  pool.query( sql_insert, [signup_name, signup_position, signup_email, signup_password, signup_department, signup_mobileno, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest, signup_qualification ], ( err, res ) => {
    if (err) return console.error(err.message);
    console.log(res);
    
  });
  res.redirect("users");
  } catch (error) {
    console.log(error);
  }
  
})

module.exports=router;