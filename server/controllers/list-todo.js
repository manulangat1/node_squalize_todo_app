const db  = require('../models/index')
const Todo = db.Todo


exports.listd = async(req,res) => {
    try{       
        const todo = await Todo.findAll()
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