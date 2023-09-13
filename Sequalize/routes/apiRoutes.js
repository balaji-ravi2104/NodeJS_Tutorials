/*
let express = require('express')

let app = express()

let router  = express.Router()
*/
// or

let router = require('express').Router()

/*
let fetch = require('./fetch/fetch')
router.use('/fetch',fetch)
*/
// or

router.use('/fetch', require('./fetch/fetch'))
router.use('/insert', require('./insert/insert'))
router.use('/update', require('./update/update'))
router.use('/delete', require('./delete/delete'))


module.exports = router;