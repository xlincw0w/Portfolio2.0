const express = require('express')
let router = express.Router()

const insertContact = async (doc) => {
    try {
        const { MongoClient } = require('mongodb')

        const client = new MongoClient(process.env.DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        await client.connect()

        const collection = client.db('portfolio').collection('contact')
        const res = await collection.insertOne(doc)

        return res.insertedCount
    } catch (err) {
        return 0
    }
}

router.route('/submitContact').post((req, res) => {
    const constants = require('../constants')
    const data = req.body
    let valid_data = true

    if (!constants.username_rg.test(data.fullname)) valid_data = false
    else if (!constants.email_rg.test(data.email)) valid_data = false
    else if (data.subject.length === 0) valid_data = false
    else if (data.message.length === 0) valid_data = false

    if (!valid_data) return res.send({ updated: false })

    insertContact({
        ...data,
        submitDate: new Date(),
    })
        .then((r) => {
            if (r === 1) {
                res.send({ updated: true })
                return 0
            } else {
                res.send({ updated: false })
                return 0
            }
        })
        .catch((err) => {
            res.send({ updated: true })
            return 0
        })
})

module.exports = router
