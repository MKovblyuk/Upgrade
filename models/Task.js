const {Schema, model} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    points: {type: Number, required: true}
})

module.exports = model("Task", schema)