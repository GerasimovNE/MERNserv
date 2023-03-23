import * as bcrypt from 'bcrypt'
import { Request } from 'express';
const user = require('../model/user')
const jwt = require('jsonwebtoken')
require('dotenv').config()



export const loginUser = async (req: Request) => {

    const userValid = await user.findOne({ email: req.body.email })

    if (!userValid) {
        return ('email not found')
    }
    const passValid = await bcrypt.compare(req.body.password, userValid.password)
    if (!passValid) {
        return ("invalid pass")
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' })
    userValid.JWTtoken = token
    userValid.save()
    return ({
        email: userValid.email,
        token: token,
        avatar: userValid.avatar,
        usedSpase: userValid.usedSpase,
        diskSpase: userValid.diskSpase

    })

}