const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const nodemailer = require('nodemailer')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let cont = []
console.log(cont)

app.get('/', (req, res) =>{
    res.json(cont)
    console.log(cont, '........')
})

app.get('/contact-me', (req, res) => {


    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    service: 'gmail',
    secure: true,
    auth: {
        user: 'ashsal2001@gmail.com',
        pass: 'salmanashrafatmagul'
      }
    });

    const mailOptions = {
    from: 'ashsal2001@gmail.com',
    to: 'ashsall115@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'WOW it actually worked! from port'
    };

    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
        res.json({
            error
        })
    } else {
        console.log('Email sent: ' + info.response);
        res.json({
            result: info.response,
            cont: cont
        })
    }
    });

  
    console.log(cont)
    
})

app.listen(process.env.PORT || 3002)
