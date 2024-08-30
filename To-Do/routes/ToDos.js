const express = require("express")
const router = express.Router()

 //import controller
 const {createToDo} = require("../controllers/createToDo")
 const {getToDo,getToDoById} = require("../controllers/getToDo")
 const {deleteToDoById} = require("../controllers/deleteToDo")
 const {updateToDo} = require("../controllers/updateToDo")

 //defineAPI route

 router.post("/createTodo",createToDo)
 router.get("/getTodo",getToDo)
 router.get("/getTodo/:id",getToDoById)
 router.delete("/deleteTodo/:id",deleteToDoById)
 router.post("/updateTodo/:id",updateToDo)

 module.exports = router