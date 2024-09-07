const express = require("express")
const {createServer} = require("node:http")
const {join}= require("node:path")
const {Server} = require("socket.io")

const app = express()
const server = createServer(app)
const io = new Server(server)


app.get('/',(req,res)=>{
    res.sendFile(join(__dirname,'index.html'))
})
server.listen(3000,()=>{
    console.log("Server is running at 3000 port")
})
io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
      console.log('message: ' + msg);
      io.emit('chat message',msg)
    });
  });



