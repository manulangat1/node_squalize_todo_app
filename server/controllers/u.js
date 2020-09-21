const Todo = require('../models').Todo


exports.updated = async (req,res) => {
    console.log(req.params.id)
    try{
        const todo = await Todo.findByPk(req.params.id)
        await todo.update({title:req.body.title})
        return res.status(200).json({
            success:true,
            data:todo
        })
    } catch (err){
        console.log(err)
        return res.status(500).json({
            success:false,
            message:err
        })
    }
}