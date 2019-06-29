const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer');
const mailConfig = require('../config/mailConfig.js')
const mailTemplate = require('../config/mailTemplate.js')
const jsonfile = require('jsonfile')
const fs = require('fs');

const db = "./db/db.json"

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works')
})

/* Sending Mail to ikismail7@gmail.com */
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: mailConfig.auth
});


router.route('/user/mailservice')
  .post((req, res) => {

    const object = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.message,
      sentDate: new Date().toLocaleString()
    }

    let profiles = []

    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        profiles = JSON.parse(data); //now it an object
        profiles.push(object); //add some data
        json = JSON.stringify(profiles); //convert it back to json
        fs.writeFile(db, json, 'utf8', (err, data) => {
          if (err) console.log(err)
          console.log(data)
        }); // write it back 
      }
    });


    const mailObj = {
      from: req.body.email,
      to: "ikismail7@gmail.com",
      subject: "🔥 from ikismail-portfolio 👨‍💻",
      html: mailTemplate.template(req.body.email, req.body.name, req.body.message)
    }

    transporter.sendMail(mailObj, function (error, info) {
      if (error) {
        console.log(error);
        res.send(error)
      } else {
        console.log('Email sent: ' + info.response);
        res.send(info)
      }
    });
  })
  .get((req, res) => {
    fs.readFile(db, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
        res.send(err)
      } else {
        profiles = JSON.parse(data); //now it an object
        res.json(profiles)
      }
    })
  })

module.exports = router
