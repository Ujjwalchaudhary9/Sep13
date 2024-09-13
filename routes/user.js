const express = require('express');
const usercontrollers = require('../controllers/usercontrollers')
const router = express.Router();

router.get('/users',(req,res)=>{
    usercontrollers.getAllUsers(req,res)
})
module.exports = router;