const mongoose = require("mongoose")
const postSchema = mongoose.Schema({
    body:{
        type:String,
        maxLength: 200,
        required:true
    },
    user:{
        type:String,
        maxLength:50,
        required:true
    },
    addedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    updatedDate:{
        type:Date,
        required:true,
        default:Date.now()
    },
    like:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'like'
    }],
    comment:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"post"
    }]
})

module.exports = mongoose.model("post",postSchema)