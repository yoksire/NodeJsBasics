const mongoose = require("mongoose")
const likeSchema = new mongoose.Schema({
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"post"
        },
        
        user:{
            type:String,
            required:true,
            maxLength:200
        }
})

module.exports = mongoose.model("like",likeSchema)