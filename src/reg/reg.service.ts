import * as bcrypt from 'bcrypt'
import { Request } from 'express';
import { createFolder } from 'fsServise/createFolder';

const user = require('../model/user')

export const registration = async (req: Request) => {
    const check = await user.findOne({ email: req.body.email })
    if (check) {
        return ({ message: 'mail already registred', status: 400 })
    }
    await createFolder(req.body.email)
    const hashPass = await bcrypt.hash(req.body.password, 10)
    const newUser = new user({ email: req.body.email, password: hashPass })
    await newUser.save()
    return ({ message: 'registration complite', status: 200 })
}