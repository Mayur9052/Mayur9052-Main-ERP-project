const express = require('express');
const { pool } = require('./connection');
const app=express();
const router = express.Router();
const bodyParser=require('body-parser');

router.use(express.urlencoded({ extended: false}));
router.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

pool.connect((err, res) => {
    if(err) return console.error(err.message);
    else return console.log("DELETE FILE CONNECTED");
});

// account page

router.get('/account/:id',( req, res) => {
    try {
        pool.query(` select * from account where id = ${ parseInt(req.params.id) } `, ( err, result) => {
            if(err) return console.error(err.message);
            res.render("account", { Account_details : result.rows[0] });
        });
    } catch (error) {
        console.log(error);
    }
});


router.post("/account/:id", ( req, res ) => {
   try {
        pool.query(`delete from account where id =${req.params.id} `, ( err, result ) => {
            if(err) return console.error(err.message);
          // res.render("account",{ id : req.params.id });
           res.redirect("/api/admin/account");
        })
   } catch (error) {
        console.log(error);
   }
})

// production page


router.get('/production/:id',( req, res) => {
    try {
        pool.query(` select * from product where id = ${ parseInt(req.params.id) } `, ( err, result) => {
            if(err) return console.error(err.message);
            res.render("product", { product_details : result.rows[0] });
        });
    } catch (error) {
        console.log(error);
    }
});

//porduction
router.post("/production/:id", ( req, res ) => {
   try {
        pool.query(`delete from product where id =${req.params.id} `, ( err, result ) => {
            if(err) return console.error(err.message);
            res.redirect("/api/admin/production");
        })
   } catch (error) {
        console.log(error);
   }
})

//project
router.post("/software/:id",(req, res)=>{
    try{
        pool.query(`delete from project where id =${req.params.id}`,(err,result)=>{
            if(err) return console.error(err.message);
            res.redirect("/api/admin/software");
        })
    }catch(error){
        console.log(error);
    }
})

// all_employee page 

router.post("/all_employee/:id",(req, res)=>{
    try{
        pool.query(`delete from signup where id =${req.params.id}`,(err,result)=>{
            if(err) return console.error(err.message);
            res.redirect("/api/admin/all_employee");
        })
    }catch(error){
        console.log(error);
    }
})


// users page 

router.post("/all_users/:id",(req, res)=>{
    try{
        pool.query(`delete from users where id =${req.params.id}`,(err,result)=>{
            if(err) return console.error(err.message);
            res.redirect("/api/admin/all_users");
        })
    }catch(error){
        console.log(error);
    }
})

// contact page 

router.post("/contact_details/:id",(req, res)=>{
    try{
        pool.query(`delete from contact where id =${req.params.id}`,(err,result)=>{
            if(err) return console.error(err.message);
            res.redirect("/api/admin/contact_details");
        })
    }catch(error){
        console.log(error);
    }
})


// feedback page 

router.post("/feedback_details/:id",(req, res)=>{
    try{
        pool.query(`delete from feedback where id =${req.params.id}`,(err,result)=>{
            if(err) return console.error(err.message);
            res.redirect("/api/admin/feedback_details");
        })
    }catch(error){
        console.log(error);
    }
})


// Leave page 

router.post("/Leave_details/:id",(req, res)=>{
    try{
        pool.query(`delete from leave where id =${req.params.id}`,(err,result)=>{
            if(err) return console.error(err.message);
            res.redirect("/api/admin/Leave_details");
        })
    }catch(error){
        console.log(error);
    }
})

module.exports = router;