const express=require('express');
const ejs = require('ejs');
const app=express();
const methodOverride = require('method-override');
const session = require('express-session');
const flash = require('express-flash');
const passport = require('passport');
const path = require("path");
const port=1000;
const bodyParser=require('body-parser');
const { pool } = require('./routes/connection');

const intializepassport = require('./passportconfig');
intializepassport(passport);

app.use(express.static(path.join(__dirname + '/public')));  
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use(
  session({
    secret: 'helloworld!',
    resave: false,
    saveUninitialized: false
  })
)

app.use(flash());
app.use(bodyParser.urlencoded({extended: false}))
app.use(passport.initialize());
app.use(passport.session());

app.use('/api/client', require('./routes/select'));
app.use('/api/client', require('./routes/insert'));
app.use('/api/client', require('./routes/update'));
app.use('/api/client', require('./routes/autheticate'));

app.listen(port, (err, res) => {
  if(err) {
    console.log(err);
  }
  else {
    console.log(`Example app listening on port ${port}!`)   
  }
});

