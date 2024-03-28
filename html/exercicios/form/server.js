const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extend:true}))


app.post('/usuarios', (req,resp)=>{
    console.log(req.body)
    resp.send('<h1>parabéns. Usuario incluido<h1>')
})


app.post('/usuarios/:id', (req,resp)=>{
    app.post('/usuarios', (req,resp)=>{    
    console.log(req.params.id)
    resp.send('<h1>parabéns<h1>')
})
    resp.send('<h1>parabéns. Usuario alterado<h1>')
})

app.listen(3003)