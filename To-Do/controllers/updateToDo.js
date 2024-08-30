const Todo= require("../models/ToDo")
exports.updateToDo = async(req,res)=>{
    try{
        const id = req.params.id
        const {title,description} = req.body
        const response = await Todo.updateOne({_id:id},{"title":title,
            "description":description,
            "updatedAt":Date.now()
        })
        res.status(200)
        .json({
            success:true,
            data:response,
            message:`updated To-Do successfully`
        })
    }
    catch(err){
        res.status(200)
        .json({
            success:false,
            error:err.message,
            message:'Server Error '
        })

    }
}