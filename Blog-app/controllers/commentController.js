const Post = require("../models/postModel")
const Comment = require("../models/commentModel")

exports.createComment = async(req,res)=>{
    try{
        const {post,body,user,createdAt} = req.body
        const comment = new Comment({
            post,body,user,createdAt
        })
        const savedComment = await comment.save()
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{comment:savedComment._id}},{new:true}).populate("comments").exec()

        res.json({
            post:updatedPost
        })
        

    }catch(err){
        return res.status(200).json({
            error:"Error While Creating comment"
        })
    }
} 