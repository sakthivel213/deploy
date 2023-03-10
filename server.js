const express= require('express')
const dotenv= require('dotenv');
const cors= require('cors')
const route = require('./routes/router');
const app= express();
app.use(cors())
app.use(express.json())
const mongoose= require('mongoose')
mongoose.connect('mongodb+srv://sakthivel:tirunelveli@cluster0.xth57f5.mongodb.net/test',{ useNewUrlParser: true, useUnifiedTopology: true }).then(console.log('connected')).catch((err)=>{
    console.log(err)
})
dotenv.config()
app.use('/', route)
const port =process.env.port
app.listen(`${port}`,()=>{
    console.log(`this api is listening in port ${port}`)
})
