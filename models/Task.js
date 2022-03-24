const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    points: {type: Number, required: true},
    owner: {type: Types.ObjectId, ref: "Skill" ,required: true}
})

module.exports = model("Task", schema)