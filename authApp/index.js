const express = require("express")
const app = express()
 require('dotenv').config()
 const PORT = process.env.PORT || 4000

 app.use(express.json())
 require("./config/database").dbConnect()
 const user = require("./routes/user")
 app.use("/api/v1",user)

 app.listen(PORT ,()=>{
    console.log(`connected to ${PORT} succesfully`)

 })

 app.get("/",(req,res)=>{
    res.send("<h1>This is HomePage</h1>")
 })