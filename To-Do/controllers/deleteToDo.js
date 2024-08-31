const Todo= require("../models/ToDo")
exports.deleteToDoById = async(req,res)=>{
    try{
        const id = req.params.id
        const response = await Todo.deleteOne({_id:id})
        if(response.deletedCount===0){
            return res.status(404).json({
                success:false,
                message:"No such id in the database"
            })
        }
        res.status(200)
        .json({
            success:true,
            data:response,
            message:`To-Do ${id} deleted`
        })
    }
    catch(err){
        res.status(200)
        .json({
            success:false,
            error:err.message,
            message:'Server Error'
        })

    }
}