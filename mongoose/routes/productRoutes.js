const express = require('express')

const router = express.Router()

const productApi = require('../apis/productApis')

router.get("/fetch",productApi.productAll);
router.post("/insert",productApi.insertProduct);
router.put("/update",productApi.updateProduct);
router.delete("/delete",productApi.deleteProduct);

module.exports = router