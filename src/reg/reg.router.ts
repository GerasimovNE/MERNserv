const express = require('express')
import { Request, Response } from 'express';
import { check, validationResult } from "express-validator"
import { registration } from "./reg.service"

const router = new express.Router()

router.post('/registration',
    [check('email', "miss email").isEmail(),
    check('password', "miss pass").isLength({ min: 8, max: 20 })
    ],

    async (request: Request, response: Response) => {

        if (!validationResult(request).isEmpty()) {

            return response.status(400).send("miss password or mail")
        }
        try {
            const result = await registration(request)
            response.status(result.status).send(result.message)
        }
        catch {
            response.send('sosi dal`she')
        }
    }

)

module.exports = router