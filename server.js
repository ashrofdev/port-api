const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(bodyParser.json())

let cont = []
console.log(cont)

app.get('/', (req, res) =>{
    res.json(cont)
    console.log(cont, '........')
})

app.post('/contact-me', (req, res) => {
    cont.push({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    console.log(cont)
    .then((data)=>{
        res.json(data)
    }).catch((err)=>{
        console.log(err)
        res.json(err)
    })
    
})

app.listen(process.env.PORT, ()=>{
    console.log(process.env.PORT)
})
