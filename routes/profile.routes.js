const Router = require("express")
const router = Router()
const authMiddleware = require("../middleware/auth.middleware")
const Profile = require("../models/Profile")

router.get("/", authMiddleware, async (req, res) => {
    try{
        console.log("in fetch profile")
        const profile = await Profile.find({owner: req.user.userId})
        res.status(200).json(profile)
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

router.post("/update", authMiddleware, async (req, res) => {
    try{
        console.log("in update profile:", req.body.profile)
        const result = await Profile.findByIdAndUpdate(req.body.profile._id, {...req.body.profile, onwer: req.user.userId})

        if(result === null){
            console.log("in if")
            const profile = new Profile({...req.body.profile, owner: req.user.userId})
            await profile.save()
        }

        res.status(200).json({message: "profile was updated"})
    }catch(e){
        console.log(e)
        res.status(500).json({message: "something was wrong"})
    }
})

module.exports = router