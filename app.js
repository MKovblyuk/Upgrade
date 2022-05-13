const express = require("express")
const config = require("config")
const mongoose = require("mongoose")
// const cors = require("cors")

const app = express()

// app.use(cors)
app.use(express.json({extended: false}))


// app.use((req,res,next) => {
//     console.log("_____in app middleware_____")
//     next()
// })

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT")
    res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Origin, Content-Type")
    next()
})

app.use('/api/auth', require('./routes/auth.routes'))
app.use("/api/skills", require('./routes/skills.routes'))
app.use("/api/tasks", require("./routes/tasks.routes"))
app.use('/api/todos', require("./routes/todo.routes"))

const PORT = config.get("port") || 5000

async function start(){
    try{
        await mongoose.connect(config.get("mongoUri"),{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))
    } catch(e){
        console.log("Server error", e.message)
        process.exit(1)
    }
}

start()
