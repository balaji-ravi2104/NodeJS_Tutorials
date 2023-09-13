const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    p_id:{
        type : Number
    },
    p_name:{
        type : String,
    },
    p_cost:{
        type : Number
    }
})

module.exports = mongoose.model("Product",productSchema);