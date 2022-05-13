const {Router} = require("express")
const router = Router()
const Todo = require("../models/Todo")
const Task = require("../models/Task")
const authMiddleware = require("../middleware/auth.middleware")
const {Types} = require("mongoose")

router.get("/", authMiddleware, async (req, res) => {
    try{
        const todos = await Todo.find({owner: req.user.userId})
        res.status(200).json(todos)
    } catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})


router.post("/add", authMiddleware, async (req, res) => {
    try{
        const todo = new Todo({
            ...req.body.todo,
            owner: req.user.userId
        })
        await todo.save()

        res.status(201).json({id: todo._id})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})


router.post("/complete", authMiddleware, async (req, res) => {
    try{
        await Todo.findByIdAndUpdate(req.body.todoId, {completed: true})
        res.status(200).json({message: "Todo was completed"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})


router.post("/uncomplete", authMiddleware, async (req, res) => {
    try{
        await Todo.findByIdAndUpdate(req.body.todoId, {completed: false})
        res.status(200).json({message: "Todo was uncompleted"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})


router.delete("/", authMiddleware, async (req, res) => {
    try{
        await Todo.findByIdAndDelete(req.body.todoId)
        res.status(200).json({message: "Deleting was success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

module.exports = router
