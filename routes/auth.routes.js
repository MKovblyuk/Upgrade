const {Router} = require("express")
const router = Router()
const {body, validationResult} = require("express-validator")
const User = require("../models/User")
const bcrypt = require('bcrypt');
const config = require("config")
const jwt = require("jsonwebtoken")



router.post(
    "/register",
    body("email").isEmail(),
    body("password").isLength({min: 6}),
    async (req, res) => {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некоректний email або пароль (пароль має містити більше 6 символів)"
                })
            }

            const {email, password} = req.body

            const candidate = await User.findOne({email})

            if(candidate){
                return res.status(400).json({message: "Користувач вже існує"})
            }

            const saltRounds = 10
            const hashedPassword = await bcrypt.hash(password, saltRounds)

            const user = new User({email, password: hashedPassword})
            await user.save()

            return res.status(201).json({message: "Користувач був доданий"})

        } catch(e){
            return res.status(500).json({message: "something was wrong"})
        }
    }
)

router.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({min: 6}),
    async (req, res) => {
        try{
            const errors = validationResult(req)
            if(!errors.isEmpty()){
                return res.status(400).json({
                    errors: errors.array(),
                    message: "Некоректні дані"
                })
            }

            const {email, password} = req.body
            const user = await User.findOne({email})
            if(!user){
                return res.status(400).json({message: "Користувач не існує"})
            }

            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch){
                return res.status(400).json({message: "Некоректний пароль"})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get("jwtSecret"),
                {expiresIn: "3h"}
            )
            
            return res.json({token, userId: user.id})

        } catch(e){
            return res.status(500).json({message: "something was wrong"})
        }
    }
)

module.exports = router;