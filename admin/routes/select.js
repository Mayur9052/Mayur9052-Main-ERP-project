const express = require('express');
const app=express();
const router = express.Router();

const { pool } = require('./connection');

pool.connect((err, res) => {
  if(err) return console.error(err.message);
  else return console.log("SELECT FILE CONNECTED");
});

// account page

router.get('/account', checkNotAuthenticated, (req, res) => {
    try {
      const sql_select = "select * from account";
    pool.query( sql_select, [], (err, result) => {
      if(err) return console.error(err.message);
      res.render("account", { Account_details : result.rows})
    });
    } catch (error) {
      console.log(error);
    }
  })

  // production page

router.get('/production',  checkNotAuthenticated,(req, res) => {
    try {
      const sql_select = "select * from product";
    pool.query( sql_select, [], (err, result) => {
      if(err) return console.error(err.message);
      res.render("production", { product_details : result.rows})
  });
    } catch (error) {
      console.log(error);
    }
})

// contact details page 

router.get('/contact_details',  checkNotAuthenticated,(req, res) => {
   try {
    const sql_select = "select * from contact";
    pool.query( sql_select, [], (err, result) => {
      if(err) return console.error(err.message);
      res.render("contact_details", { contact_details : result.rows})
  });
   } catch (error) {
    console.log(error);
   }
})

// feedback details page

router.get('/feedback_details',  checkNotAuthenticated,(req, res) => {
  try {
    const sql_select = "select * from feedback";
    pool.query( sql_select, [], (err, result) => {
      if(err) return console.error(err.message);
      res.render("feedback_details", { feedback_details : result.rows})
  });
  } catch (error) {
    console.log(error);
  }
})

// leave details page

router.get('/leave_details',  checkNotAuthenticated,(req, res) => {
   try {
    const sql_select = "select * from leave";
    pool.query( sql_select, [], (err, result) => {
      if(err) return console.error(err.message);
      res.render("leave_details", { leave_details : result.rows})
  });
   } catch (error) {
    console.log(error);
   }
})



// employee profile page  

router.get('/employee', checkNotAuthenticated,(req, res)=>{
  const sql_select="select * from signup"; 
  pool.query(sql_select,[],(err,result)=>{
    if(err) return console.error(err.message);
    res.render("employee",{ Employee : result.rows})
    console.log(result.rows[0]);
  });
})


// software details page 

router.get('/software',  checkNotAuthenticated,(req, res) => {
  try {
    const sql_select="select * from project";
  pool.query(sql_select,[],(err,result)=>{
    if(err) return console.error(err.message);
    res.render("software",{ software_details : result.rows})
  });
  } catch (error) {
    console.log(error);
  }
})

// New users page 

router.get('/all_users',  checkNotAuthenticated,(req, res) => {
 try {
  const sql_select="select * from users";
  pool.query(sql_select,[],(err,result)=>{
    if(err) return console.error(err.message);
    res.render("all_users",{ users_details : result.rows})
  });
 } catch (error) {
  console.log(error);
 }
})

//employee profile page  

router.get('/employee',(req, res)=>{
  const sql_select="select * from signup";
  pool.query(sql_select,[],(err,result)=>{
    if(err) return console.error(err.message);
    res.render("employee",{ Employee : result.rows[0]})
    console.log(result.rows[0]);
  });
})

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/api/admin/");
}

module.exports = router;
