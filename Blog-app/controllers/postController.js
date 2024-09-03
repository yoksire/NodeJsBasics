const Post = require("../models/postModel") 

exports.showPost= async(req,res)=>{
    try{
        const posts = await Post.find().populate("like").populate("comment").exec()
        res.status(200)
        .json({
            posts,
            message:"All Posts are fetched"
        })

    }
    catch(err){
        res.status(200)
        .json({
            success:false,
            message:err.message,
            data:"Internal Server Error"
        })
    }
}

exports.createPost= async(req,res)=>{
    try{
        const {body,user,title} = req.body
        const post = new Post({
            body, user , title
        })
        const savedPost = await post.save()

        res.status(200).json({
            post:savedPost
        })

    }catch(err){
        return res.status(200).json({
            error:"Error While saving the post"
         })
    }
}

exports.deletePost = async(req,res)=>{
    try{
        const {id} = req.params.id
        const response = await Post.deleteOne({_id:id})
        res.status(200).json({
            post:response
        })

    }catch(err){
        return res.status(200).json({    
            error:"Error while deleting the post" 
        })
    }
}