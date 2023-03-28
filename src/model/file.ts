import ObjectId from "mongoose"

const file = Schema(
    {
        name: { type: String, required: true },
        type: { type: String, reauired: true },
        accesLinc: { type: String },
        size: { type: Number, default: 0 },
        path: { type: String, default: '' },
        user: { type: ObjectId, ref: "User" },
        perent: { type: ObjectId, ref: "File" },
        childs: [{ type: ObjectId, ref: "File" }],
    }
)
module.exports = model("File", file)