import * as bcrypt from 'bcrypt'
import { Request } from 'express';
const user = require('../model/user')

export const registration = async (req: Request) => {
    const check = await user.findOne({ email: req.body.email })
    if (check) {
        return ({ massege: 'mail already registred', status: 400 })
    }

    const hashPass = await bcrypt.hash(req.body.password, 10)
    const newUser = new user({ email: req.body.email, password: hashPass })
    await newUser.save()
    return ({ message: 'registration complite', status: 200 })
}