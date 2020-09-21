const db  = require('../models/index')
const Todo = db.Todo


exports.listd = async(req,res) => {
    console.log("Helloe")
    console.log(`${Todo}`)
    try{
        
        const todo = await Todo.findAll()
        return res.status(200).json({
            success:true,
            data:todo
        })
    } catch(err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:err
        })
    }
}