const Todo = require(".../models/ToDo")

exports.createToDo= async(req,res)=>{
    try{
        //extract title & description from the request body
        const {title,description} = req.body()
        //create a new todo Obj & insert in DB
        const res = await Todo.create({ title,description})
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Successfully"
        })
    }
    catch(error){
         
        console.log("error occured: "+error)
        res.status(500).json(
            {
                success:false,
                data:"Internal Server error",
                message:error.message
            }

        )

    }
}


