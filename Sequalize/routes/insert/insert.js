//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import db
const db = require("../../models")


router.post("/", (req, res) => {
    db.product.create(req.body).then(submitted => {
        res.send(submitted)
    })
})

//export router
module.exports = router
