require('dotenv').config()

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 80

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))

app.listen(PORT, function () {
    console.log(`Server listenning on port ${PORT} !\n`)
})
