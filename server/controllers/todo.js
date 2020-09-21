const db  = require('../models/index')
const Todo = db.Todo


exports.creates = async(req,res) => {
    console.log("Hey")
    // console.log(req.body)
    // console.log(`${Todo}`)
    try {
        const todo = await Todo.create({title:req.body.title})
        console.log(todo)
        res.status(201).json({
            success:true,
            todo
        })
    } catch (err) {
        // console.log(err)
        return res.status(500).json({
            success:false,
            message:err
        })
    }
    }
