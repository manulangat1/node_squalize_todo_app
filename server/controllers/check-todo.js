const Todo = require('../models').Todo 

exports.getByName = async (req,res) => {
    try{
        const todo = await Todo.findOne({where:{'title':'emmanuelthed'}})
        return res.status(200).json({
            success:true,
            message:todo
        })
    } catch(err){
        console.log(`${err}`)
        return res.status(500).json({
            success:false,
            message:err
        })
    }
}