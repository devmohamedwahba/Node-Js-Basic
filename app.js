const express = require('express');
const bodyParser = require('body-parser')
const aboutRouter = require('./about-router');



const app = express()
const bodyParserRouter = bodyParser.urlencoded({
    extended:true
})
// app.use(bodyParser.urlencoded({ extended: false }))

app.use('/about',aboutRouter)


app.get('/',(req, res, next)=>{
    res.send('<form action="/" method="POST"><label>User name : </label><input type="text" name="username"/><input type="submit"></form>')
  })

  app.post('/',bodyParserRouter,(req, res, next)=>{
    res.send(req.body.username)
  })



app.listen(3000,()=>{
    console.log('listen..............');
})