const express = require("express")
const app = express();
const todoRoutes = require("./routes/ToDos")


require("dotenv").config()
const PORT=process.env.PORT || 4000

app.use(express.json())

app.use("/api/v1",todoRoutes)

app.listen(PORT,()=>{
    console.log(`Server started at ${PORT}`)
})

const dbConnect = require("./config/database")

dbConnect()
//default route

app.get("/",(req,res)=>{
    res.send(`<h1>This is HomePage</h1>`)
})