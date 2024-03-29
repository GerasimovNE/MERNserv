import bodyParser = require("body-parser")
const login = require('./login/login.router')
const reg = require("./reg/reg.router")
const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()


const app = express()

app.use(bodyParser.json())
app.use('/', reg)
app.use('/login', login)
const start = async () => {
    try {
        await mongoose.connect(process.env.DATA_BASE_URL)
        app.listen(process.env.DEV_SERVER_PORT, () => {
            console.log("zaebalo vse ", process.env.DEV_SERVER_PORT)
        })
    }
    catch {
        (error) => { console.log(error) }

    }
}
start()


