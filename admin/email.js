var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: 'mayurkatla802@outlook.com',
    pass: '@Mayurjoker802'
  }
});

var mailOptions = {
  from: 'mayurkatla802@outlook.com',
  to: 'mayurkatla802@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Hello Bro'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});