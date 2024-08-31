// const Post = require("post") 

// exports.showPost= async(req,res)=>{
//     try{
//         const response = await Post.find({})
//         res.status(200)
//         .json({
//             success:true,
//             data:response,
//             message:"All Posts are fetched"
//         })

//     }
//     catch(err){
//         res.status(200)
//         .json({
//             success:false,
//             message:err.message,
//             data:"Internal Server Error"
//         })
//     }
// }