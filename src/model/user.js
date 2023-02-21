const { Schema, module } = require("mongoose")


const user = Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    diskSpase: { type: Number, default: 1024 ** 3 * 10 },
    usedSpase: { type: Number, default: 0 },
    avatar: { type: String },
    files: [{ type: ObjectId, ref: "File" }]

})

module.exports = model("User", user)