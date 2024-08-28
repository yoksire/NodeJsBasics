const mongoose = require("mongoose")
require("dotenv").config();

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Database run sucessfully"))
    .catch((error)=>{
        console.log("Error Occured: "+error)
        process.exit(1)    
    })
}
module.exports = dbConnect;