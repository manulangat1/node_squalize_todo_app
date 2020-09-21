const db = require('../models/index')
const Todo = db.Todo 


exports.listd = async(req,res) => {
    console.log("Helloe")
    try{
        const todo = await todo.list()
        return res.status(200).json({
            success:true,
            data:todo
        })
    } catch(err){
        return res.status(500).json({
            success:false,
            message:err
        })
    }
}