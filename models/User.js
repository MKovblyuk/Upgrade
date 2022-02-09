const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    skills: [{type: Types.ObjectId, ref: "Skill"}]
})

module.exports = model("User", schema)