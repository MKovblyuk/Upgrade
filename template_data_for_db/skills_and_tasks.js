const express = require("express")
const config = require("../config/default.json")
const mongoose = require("mongoose")
const Skill = require("../models/Skill")
const Task = require("../models/Task")

const USER_ID = "6231ac2f2b5dc44126549fba"

const app = express()

const PORT = config.port || 5000

async function start(){
    try{
        await mongoose.connect(config.mongoUri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}....`))
    }catch(e){
        console.log("Server error: ", e.message)
        process.exit(1)
    }
}

start()


const skill_1 = new Skill({name: "TEST SKILL 1", achievedPoints: 10, level: 1, owner: USER_ID})
const skill_2 = new Skill({name: "TEST SKILL 2", achievedPoints: 20, level: 2, owner: USER_ID})
const skill_3 = new Skill({name: "TEST SKILL 3", achievedPoints: 30, level: 3, owner: USER_ID})
const skill_4 = new Skill({name: "TEST SKILL 4", achievedPoints: 40, level: 4, owner: USER_ID})

skill_1.save()
skill_2.save()
skill_3.save()
skill_4.save()
console.log(">>> skills saved")

const task_11 = new Task({name: "TEST TASK 11", points: 3, owner: skill_1._id})
const task_12 = new Task({name: "TEST TASK 12", points: 3, owner: skill_1._id})
const task_13 = new Task({name: "TEST TASK 13", points: 3, owner: skill_1._id})

task_11.save()
task_12.save()
task_13.save()
console.log(">>> tasks part 1 saved")


const task_21 = new Task({name: "TEST TASK 11", points: 3, owner: skill_2._id})
const task_22 = new Task({name: "TEST TASK 12", points: 3, owner: skill_2._id})
const task_23 = new Task({name: "TEST TASK 13", points: 3, owner: skill_2._id})

task_21.save()
task_22.save()
task_23.save()
console.log(">>> tasks part 1 saved")