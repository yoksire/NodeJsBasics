const express = require("express")
const router = express.Router()

 //import controller
 const {createToDo} = require("../controllers/createToDo")
 const {getToDo} = require("../controllers/getToDo")

 //defineAPI route

 router.post("/createTodo",createToDo)
 router.get("/getTodo",getToDo)

 module.exports = router