const mongoose = require("mongoose")
require("dotenv").config()

const dbConnect = ()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true
    })
    .then(()=>console.log("Database connected successfuly"))
    .catch((err)=>{
        console.log("Error Occurred: " + err)
        process.exit(1)
    })
}

module.exports = dbConnect