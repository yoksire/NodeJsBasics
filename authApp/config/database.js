const mongoose = require("mongoose")
require("dotenv").config()

exports.dbConnect = mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("database connected sucessfully")})
.catch((err)=>{
    console.log("error while connecting to database")
})
