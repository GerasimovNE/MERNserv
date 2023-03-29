
import { Schema, model, Types } from 'mongoose'


const user = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    diskSpase: { type: Number, default: 1024 ** 3 * 10 },
    usedSpase: { type: Number, default: 0 },
    JWTtoken: { type: String },
    avatar: { type: String },
    files: [{ type: Types.ObjectId, ref: 'File' }]

})

module.exports = model("User", user)