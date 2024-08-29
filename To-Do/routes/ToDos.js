const express = require("express")
const router = express.Router()

 //import controller
 const {createToDo} = require("../controllers/createToDo")

 //defineAPI route

 router.post("/createTodo",createToDo)

 module.exports = router