const express = require("express")
const config = require("../config/default.json")
const mongoose = require("mongoose")
const Todo = require("../models/Todo")

const USER_ID = "6231ac2f2b5dc44126549fba"
const TASK_1_ID = "623efd36af94946d5d11a16f"
const TASK_2_ID = "623efd36af94946d5d11a170"
const TASK_3_ID = "623efd36af94946d5d11a171"
const TASK_4_ID = "623efd36af94946d5d11a173"


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

const todo_1 = new Todo({completed: false, name: "TODO_1", points: 5, owner: USER_ID})
const todo_2 = new Todo({completed: false, name: "TODO_2", points: 5, owner: USER_ID})
const todo_3 = new Todo({completed: false, name: "TODO_3", points: 5, owner: USER_ID})
const todo_4 = new Todo({completed: false, name: "TODO_4", points: 5, owner: USER_ID})
const todo_5 = new Todo({completed: false, name: "TODO_5", points: 5, owner: USER_ID})

todo_1.save()
todo_2.save()
todo_3.save()
todo_4.save()
todo_5.save()

console.log(">>> todos saved")