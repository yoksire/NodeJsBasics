const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    },
    body:{
        type:String,
        required:true,
        maxLength:200
    },
    user:{
        type:String,
        required : true,    
        maxLength: 50
    },
    createdAt:{
        type:String,
        required:true,
        default:Date.now()
    } 
})

module.exports = mongoose.model("comment",commentSchema)