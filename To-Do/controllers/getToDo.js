const Todo= require("../models/ToDo")

exports.getToDo = async(req,res)=>{
    try{
            //will fetch all To-Do item
            const response = await Todo.find({})
            res.status(200)
            .json({
                success:true,
                data:response,
                message:"Entire To-Do data is fetched"
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
exports.getToDoById = async(req,res)=>{
    try{
        const id = req.params.id
        const response = await Todo.findById({_id:id})
        if(!response){
            return res.status(404).json({
                success:false,
                message:"No such id in the database"
            })
        }
        res.status(200)
        .json({
            success:true,
            data:response,
            message:`To-Do ${id} fetched`
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


