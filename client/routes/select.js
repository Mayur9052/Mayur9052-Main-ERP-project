const express = require('express');
const app=express();
const router = express.Router();

const { pool } = require('./connection');

pool.connect((err, res) => {
  if(err) return console.error(err.message);
  else return console.log("SELECT FILE CONNECTED");
});


// employee profile page  

router.get('/employee',(req, res)=>{
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


function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/api/client/");
}

module.exports = router;
