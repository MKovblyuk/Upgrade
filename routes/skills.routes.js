const Router = require("express")
const router = Router()
const Skill = require("../models/Skill")
const authMiddleware = require("../middleware/auth.middleware")
const Task = require("../models/Task")
const {Types} = require("mongoose")

const complexFunc = () => {
    let sum = 0
    for(let i = 0; i < 999999999; i++){
        sum += i
    }
    sum = 0
    for(let i = 0; i < 999999999; i++){
        sum += i
    }
    sum = 0
    for(let i = 0; i < 999999999; i++){
        sum += i
    }
}

router.get("/", authMiddleware ,async (req, res) => {
    try{ 
        const skills = await Skill.aggregate([
            {
                $match: {owner: Types.ObjectId(req.user.userId)}
            },
            {
                $lookup: {
                    from: "tasks",
                    localField: "_id",
                    foreignField: "owner",
                    as: "tasks"
                }
            }
        ])

        complexFunc()

        return res.status(200).json(skills)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

router.post("/add", authMiddleware, async (req, res) => {
    try{
        const skill = new Skill({
            name: req.body.skillName,
            achievedPoints: 0,
            level: 0,
            owner: req.user.userId
        })
        
        await skill.save()
        return res.status(201).json({message: "Skill was created", skill})

    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

router.post("/update", authMiddleware, async (req, res) => {
    try{
        await Skill.findByIdAndUpdate(req.body.skill._id, req.body.skill)
        return res.status(200).json({message: "Skill was updated"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

router.delete("/", authMiddleware, async (req, res) => {
    try{
        await Skill.findByIdAndDelete(req.body.skillID)
        // need check deleting
        res.status(200).json({message: "Deleting was success"}) 
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

router.post("/increaseLevel", authMiddleware, async (req, res) => {
    try{
        let skill = await Skill.findById(req.body.skillId)
        let newAchievedPoints = skill.achievedPoints + Number(req.body.points)
        let newLevel = skill.level

        if(newAchievedPoints > 100){
            newLevel++
            newAchievedPoints -= 100
        }

        skill.achievedPoints = newAchievedPoints
        skill.level = newLevel
        skill.save()

        res.status(200).json({message: "Increasing was success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

router.post("/decreaseLevel", authMiddleware, async (req, res) => {
    try{
        let skill = await Skill.findById(req.body.skillId)
        let newAchievedPoints = skill.achievedPoints - Number(req.body.points)
        let newLevel = skill.level

        if(newAchievedPoints < 0){
            newLevel--
            newAchievedPoints += 100
        }

        skill.achievedPoints = newAchievedPoints
        skill.level = newLevel >= 0 ? newLevel : 0
        skill.save()

        res.status(200).json({message: "Decreasing was success"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})


module.exports = router