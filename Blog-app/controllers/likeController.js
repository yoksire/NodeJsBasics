const Post = require("../models/postModel")
const Like = require("../models/likeModel")

exports.createLike = async(req,res)=>{
    try {
        const{ post,user}= req.body
    
        const like = new Like({post,user})
        const savedLike = await like.save()
        const updatedPost = await Post.findByIdAndUpdate(post,{$push:{like:savedLike._id}},{new:true}).populate("like").exec()
        res.json({ 
            post:updatedPost
        })
}catch(err){
    return res.status(200).json({
        error:"Error while liking the post"
    })

}
}
exports.deleteLike = async(req,res)=>{
    try{
        const{like,post,user} = req.body
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like,user:user})

        

        const updatedPost= await Post.findByIdAndUpdate(post,{$pull:{like:deletedLike._id}},{new: true})
        res.json({
            post:updatedPost
        })
    }
    catch(err){
        return res.status(200).json({
            error:err.message
        })
    }
}