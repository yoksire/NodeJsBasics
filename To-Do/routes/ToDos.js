const express = require("express")
const router = express.router()

 //import controller
 const {createTodo} = require("../controllers/createToDo")

 //defineAPI route

 router.post("/createToDo",createTodo)