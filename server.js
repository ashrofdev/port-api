const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let contact = []
console.log(contact)

app.get('/', (req, res) =>{
    res.json(contact)
    console.log(contact, '........')
})

app.post('/contact-me', (req, res) => {
    contact.push({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    console.log(contact)
    .then((data)=>{
        res.json(data)
    })
    
})

app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
})
