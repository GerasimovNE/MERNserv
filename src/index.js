const express = require("express")
const mongoose = require("mongoose")
const config = require("config")


const app = express()
const PORT = config.get("serverPort")

const start = () => {
    try {
        app.listen(PORT, () => {
            console.log("zaebalo vse ", PORT)
        })
    }
    catch (e) {
        console.log(e)

    }

}
start()