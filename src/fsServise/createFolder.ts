const fs = require('fs')
require('dotenv').config

export const createFolder = async (path: string) => {
    if (!fs.existsSync(`${process.env.PATH_CLOUD}\\${path}`)) {
        await fs.mkdirSync(`${process.env.PATH_CLOUD}\\${path}`)
        return (true)
    }
    return false

}