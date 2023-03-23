const express = require('express')
import { Request, Response } from 'express';
import { check, validationResult } from "express-validator"
import { loginUser } from './login.service'

const router = new express.Router()

router.post('/',
    [check('email', "miss email").isEmail(),
    check('password', "miss pass").isLength({ min: 8, max: 20 })
    ],

    async (request: Request, response: Response) => {

        if (!validationResult(request).isEmpty()) {

            return response.status(400).send("miss password or mail")
        }
        try {
            const result = await (loginUser(request))
            response.send(result)

        }
        catch {
            response.send('error')
        }
    }

)

module.exports = router