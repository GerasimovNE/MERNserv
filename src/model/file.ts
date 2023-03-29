import { Schema, model, Types } from 'mongoose'


const file = new Schema(
    {
        name: { type: String, required: true },
        type: { type: String, reauired: true },
        accesLink: { type: String },
        size: { type: Number, default: 0 },
        path: { type: String, default: '' },
        user: { type: Types.ObjectId, ref: "User" },
        perent: { type: Types.ObjectId, ref: "File" },
        childs: [{ type: Types.ObjectId, ref: "File" }],
    }
)
module.exports = model("File", file)