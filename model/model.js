const mongoose=require('mongoose')
const model=new mongoose.Schema(
    {
        firstname:String,
        lastname:String,
        email:String,
        password:String,
        address1:String,
        address2:String,
        city:String,
        state:String,
        zip:Number
    }
)
const user= new mongoose.model('user',model)
module.exports= user