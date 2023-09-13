//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import db
const db = require("../../models")

router.delete("/:id", (req, res) => {
    db.product.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => {
        if (result == 0)
            res.send({ 'record': 'not found' })
        else
            res.send({ 'record': 'deleted' })
    })
})

//export router
module.exports = router
