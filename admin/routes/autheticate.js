const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const passport = require('passport');
const { pool } = require('./connection');
const e = require('express');

pool.connect((err, res) => {
    if(err) return console.error(err.message);
    else return console.log("AUTHETICATE FILE CONNECTED");
});

router.get("/signup", checkAuthenticated, (req, res) => {
  res.render("signup");
});

router.get("/", checkAuthenticated, (req, res) => {
  // console.log(req.session.flash.error);
  res.render("index");
});

router.get("/Dashboard", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("Dashboard");
});

// router.get("/logout",(req, res)=>{
//   req.logout (function(err) {
//     if(err) {return next(err); }
//     res.redirect('/api/admin/');
//   });
// });
router.get("/logout", (req, res) => {
  req.logout(function(err) {
    if (err) { return next(err) ; }
    res.redirect('/api/admin/');
  });
});



router.get("/addaccount", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("addaccount");
});

router.get("/addproduct", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  res.render("addproduct");
});


router.get('/software', checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("software");
});

router.get('/employee', checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("employee");
});

router.get('/contact', checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("contact");
});

router.get('/feedback', checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("feedback");
});

router.get("/leaveletter", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("leaveletter");
});

router.get("/project", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("project");
});

router.get("/users", checkNotAuthenticated, (req, res) => {
  console.log(req.isAuthenticated());
  
  res.render("users");
});


router.post("/signup", async (req, res) => {
  let { signup_enroll, signup_name, signup_position, signup_department, signup_email, signup_password, signup_Cpassword, signup_mobileno, signup_qualification, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest  } = req.body;

  let errors = [];

  console.log({signup_enroll, signup_name, signup_position, signup_department, signup_email, signup_password, signup_Cpassword, signup_mobileno, signup_qualification, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest
  });

  if(!signup_enroll || !signup_name || !signup_position || !signup_department || !signup_email || !signup_password || !signup_Cpassword || !signup_mobileno || !signup_qualification || !signup_age || !signup_address || !signup_dob || !signup_gender || !signup_Experience || !signup_interest) {
    errors.push({ message: "Please enter all fields" });
  }

  if (signup_password.length < 6) {
    errors.push({ message: "Password must be a least 6 characters long" });
  }

  if (signup_password !== signup_Cpassword) {
    errors.push({ message: "Passwords do not match" });
  }

  if (errors.length > 0) {
    res.render("signup", { errors, signup_enroll, signup_name, signup_position, signup_department, signup_email, signup_password, signup_Cpassword, signup_mobileno, signup_qualification, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest });
  } else {
    hashedPassword = await bcrypt.hash(signup_password, 10);
    console.log(hashedPassword);
    
    pool.query(
      `SELECT * FROM signup
        WHERE email = $1`,
      [signup_email],
      (err, results) => {
        if (err) {
          console.log(err);
        }
        console.log(results.rows);

        if (results.rows.length > 0) {
          return res.render("signup", {
            message: "Email already registered"
          });
        } else {
          pool.query(
            `Insert into signup ( enroll, name, position, department, email, password, mobileno, qualification, age, address, dob, gender, experience, interest ) values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)   
            RETURNING id, password`,
            [signup_enroll, signup_name, signup_position, signup_department, signup_email, hashedPassword, signup_mobileno, signup_qualification, signup_age, signup_address, signup_dob, signup_gender, signup_Experience, signup_interest],
            (err, results) => {
              if (err) {
                throw err;
              }
              console.log(results.rows);
              req.flash("success_msg", "You are now registered. Please log in");
              res.redirect("/api/admin/");
            }
          );
        }
      }
    );
  }
});


router.post(
  "/",
  passport.authenticate("local", {
    successRedirect: "/api/admin/Dashboard",
    failureRedirect: "/api/admin/",
    failureFlash: true
  })
  
);

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect("/api/admin/Dashboard");
  } 
  next();
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/api/admin/");
}


module.exports = router;
