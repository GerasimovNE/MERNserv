
const file = require('../model/file')
const jwt = require('jsonwebtoken')
const user = require('../model/user')
require('dotenv').config
import { Request } from "express"
import { createFolder } from "fsServise/createFolder"

export const addFile = async (req: Request) => {
    const jwt = req.headers.authorization.split(' ')
    const decode = await check(jwt[1])
    if (!decode) {
        return ({ massege: 'auth error', status: 400 })
    }

    const fileIn = req.body
    const createFile = new file({ name: fileIn.name, type: fileIn.type, user: decode.id, parent: fileIn.parent })
    const parent = await file.findOne({ _id: fileIn.parent })
    const addPath = await user.findOne({ _id: decode.id })
    if (parent) {

        createFile.path = `${addPath.email}\\${parent.name}`
    }
    else {
        createFile.path = `${addPath.email}`
    }
    if (createFile.type = 'folder') {
        if (await createFolder(createFile.path + '/' + createFile.name)) {
            try { createFile.save() }
            catch { (e) => console.log(e) }
            return ({ message: 'folder create', status: 200 })
        }
        else {
            return ({ message: 'folder don`t create', status: 400 })
        }
    }



}

export const deleteFile = async (req: Request) => {

}

export const changeFile = async (req: Request) => {

}

export const getFile = async (req: Request) => {

}


const check = async (JWT: string) => {
    try {
        const decode = await jwt.verify(JWT, process.env.JWT_SECRET)
        return decode
    }
    catch {
        console.log('error')
        return (false)
    }

}