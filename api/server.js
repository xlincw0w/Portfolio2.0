require('dotenv').config()

const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 80

const app = express()
app.use(express.json())

// Including routes
const contact = require('./routes/contact')
app.use('/contact', contact)

app.use(express.static(path.join(__dirname, '../dist')))

app.get('/', (req, res) => {
    res.send('Endpoint reached.')
})

app.listen(PORT, () => {
    console.log(`Server listenning on port ${PORT} !\n`)
})
