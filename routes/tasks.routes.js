const Router = require("express")
const authMiddleware = require("../middleware/auth.middleware")
const Task = require("../models/Task")

router = Router()

router.get("/", authMiddleware, async (req, res) => {
    try{
        console.log("in get tasks")
        const tasks = await Task.find({owner: req.user.userId})
        return res.status(200).json(tasks)
    }catch(e){
        res.status(500).json({message: "something was wrong"})
    }
})

router.delete("/",authMiddleware, async (req, res) => {
    try{
        console.log("in deleteing task")
        res.status(200).json({message: "task was deleted"})
    }catch(e){
        res.status(500).json({message: "something was wrong"})
    }
})

module.exports = router