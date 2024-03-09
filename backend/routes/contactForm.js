const { handleContactForm } =require( "../controller/contactForm")
const express = require('express')
const router2= express.Router()
router2.post('/',handleContactForm)
module.exports=router2


