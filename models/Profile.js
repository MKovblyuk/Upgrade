const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: false},
    owner: {type: Types.ObjectId, ref: "User", required: true}
})

module.exports = model("Profile", schema)