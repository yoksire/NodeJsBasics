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