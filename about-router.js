const express = require('express');

const router = express.Router()


router.get('/',(req, res, next)=>{
    res.send('<h1>About</h1>')
})
router.get('/me',(req, res, next)=>{
    res.send('<h1>Me</h1>')
})


module.exports = router