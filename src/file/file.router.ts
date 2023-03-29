import { addFile, getFile, deleteFile, changeFile } from "./file.addService"
import { Request, Response } from 'express';
const express = require('express')
const router = new express.Router()
router.post('/', [], async (request: Request, response: Response) => {
    const result = await addFile(request)
    response.status(result.status).send(result.message)
})
module.exports = router


