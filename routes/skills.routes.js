const Router = require("express")
const router = Router()
const Skill = require("../models/Skill")
const authMiddleware = require("../middleware/auth.middleware")

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
        const skills = await Skill.find({ower: req.user.userId})
        complexFunc()
        res.status(200).json(skills)
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
            tasks: [],
            owner: req.body.userId
        })
        
        await skill.save()
        return res.status(201).json({message: "Skill was created", skill})

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

module.exports = router