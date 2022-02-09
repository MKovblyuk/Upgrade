const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    achievedPoints: {type: Number, required: true},
    level: {type: Number, required: true},
    tasks: [{type: Types.ObjectId, ref: "Task"}],
    owner: {type: Types.ObjectId, ref: "User"}
})

module.exports = model("Skill", schema)