
const { Schema, model } = require("mongoose")


const user = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    diskSpase: { type: Number, default: 1024 ** 3 * 10 },
    usedSpase: { type: Number, default: 0 },
    JWTtoken: { type: String },
    avatar: { type: String },
    files: [{ type: Object, ref: "File" }]

})

module.exports = model("User", user)