const Product = require('../model/Product')

// get all products

const productAll = async (req,res) =>{
    try{
        const products = await Product.find();
        res.send(products);
        console.log('Data sent');
    }catch(error){
        res.json({'message':error})
    }
}


// insert a product

const insertProduct = async (req,res) =>{
    const product = new Product({
        p_id : req.body.p_id,
        p_name : req.body.p_name,
        p_cost : req.body.p_cost
    })

    try{
        const savedProduct = await product.save();
        console.log('data inserted');
        res.send(savedProduct);
    }catch(error){
        res.status(400).send(error)
    }
}


// update a product

const updateProduct = async(req,res)=>{
 let p_id = req.body.p_id

 const product = {
    p_name : req.body.p_name,
    p_cost : req.body.p_cost
 }

 try{
    const updateproduct = await Product.updateOne(
        {p_id},product
    ) 
    if(updateproduct.modifiedCount !=0){
        console.log('Product Updated', updateproduct)
        res.send({ 'update': 'success' })
    }else{
        console.log('Product Not Updated')
        res.send({ 'update': 'failed' })
    }
 }catch(error){
    res.status(400).send(error)
 }
}

const deleteProduct = async(req,res)=>{
    let p_id = req.body.p_id;
    try{
        const deletedproduct = await Product.deleteOne(
            {p_id}
        )
        if(deletedproduct.deletedCount!=0){
            console.log('Product Deleted')
            res.send({ 'delete': 'success' })
        }else{
            console.log('Product Not Deleted')
            res.send({ 'delete': 'failed' })
        }
    }catch(error){
        res.status(400).send(error);
    }
}

module.exports = {
    productAll,
    insertProduct,
    updateProduct,
    deleteProduct
}