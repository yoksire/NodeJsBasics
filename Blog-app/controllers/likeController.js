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