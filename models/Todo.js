const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    completed: {type: Boolean, required: true},
    name: {type: String, required: true},
    points: {type: String, required: true},
    skillId: {type: Types.ObjectId, ref: "Skill",required: true},
    owner: {type: Types.ObjectId, ref: "User", required: true}
})

module.exports = model("Todo", schema)