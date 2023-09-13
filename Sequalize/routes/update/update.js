//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import db
const db = require("../../models")


router.put("/", (req, res) => {
    db.product.update({
        p_id: req.body.p_id,
        p_name: req.body.p_name,
        p_cost: req.body.p_cost
    }, 
    {
        where: {
            id: req.body.id
        }
    }).then((result) => {
        if (result == 0)
            res.send({ 'record': 'not found' })
        else
            res.send({ 'record': 'upadated' })
    })
})


module.exports = router
