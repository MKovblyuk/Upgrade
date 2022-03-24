const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    achievedPoints: {type: Number, required: true},
    level: {type: Number, required: true},
    owner: {type: Types.ObjectId, ref: "User", required: true}
})

module.exports = model("Skill", schema)