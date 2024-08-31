const express = require("express")
const app = express()
const blog = require("./routes/blog")
require("dotenv").config()



const PORT = process.env.PORT|| 4000

app.use(express.json())

app.use("/api/v1",blog)
app.listen(PORT,()=>
{
    console.log(`Port started at ${PORT}`)
})

const dbConnect = require("./config/database")
dbConnect()

app.get('/',(req,res)=>{
    res.send("<h1>This is homepage</h1>")

})
