const Todo = require('../models').Todo


exports.dels = async (req,res) => {
    try {
        const todo = await Todo.findByPk(req.params.id)
        await todo.destroy()
        return res.status(204).json({
            success:true,
            message:'Deleteion successfull'
        })
    } catch (err){
        return res.status(500).json({
            success:false,
            message:err
        })
    }
}