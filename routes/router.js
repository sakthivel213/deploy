const express= require('express')
const user = require('../model/model')
const route=express.Router()
route.get('/get',(req,res)=>{
    res.status(200).send()
})
route.post('/register',async(req,res)=>{
    try{
    const {firstname,lastname,email,password,address1,address2,city,state,zip}=req.body
    console.log(req.body)
    const reg= await user.find({"firstname":firstname,"lastname":lastname})
    if(reg.length==0){
        const use=new user({
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password" :password,
            "address1":address1,
            "address2":address2,
            "city":city,
            "state":state,
            "zip":zip
        })
        use.save()
        res.status(200).send(use)
    }
    else{
        console.log('user already exist')
        res.status(200).send('user already exist')
    }
}
catch(err){
    console.log(err)
}
})
route.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body
        console.log(email)
        const logi=await user.find({"email":email})
        if(logi.length==1)
        {
            if(logi[0].password==password){
                console.log('user logged in ')
                res.status(200).json({
                    message:"user logged in"
                })
            }
            else{
                console.log('wrong password')
            }
        }
        else{
            console.log('user not present, try to register');
        }
    }
    catch(err){
        console.log(err)
    }
})
module.exports= route
