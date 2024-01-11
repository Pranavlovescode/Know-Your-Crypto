const contactMe = require("../model/contactMe");
const handleContactForm=async (req,res)=>{
    const {firstName,lastName,email,message}=req.body
    try {
        const info = await contactMe.create({firstName,lastName,email,message})
        res.status(200).json(info)
        console.log(info)
    } catch (err) {
        res.json({error:err})
    }
}

module.exports={
    handleContactForm
}