var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srbalaji435@gmail.com',
    pass: 'bimuhwlgjgwmxvat'
  }
});

var mailOptions = {
  from: 'srbalaji435@gmail.com',
  to: 'balajis.k2020cce@sece.ac.in',
  subject: 'Sending Email using Node.js',
//   text: 'Hello Balaji & Nirmal!',
  html: '<h1>Welcome</h1><p>Nirmal & Balaji!</p>'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});