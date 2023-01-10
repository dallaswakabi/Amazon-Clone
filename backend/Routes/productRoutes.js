import express from 'express'
import expressAsyncHandler from 'express-async-handler'
import data from '../data.js'
import Product from '../Models/productModels.js'
const productRoutes = express.Router()

/*   Find All Product */
productRoutes.get('/',expressAsyncHandler(async(req,res)=>{
    const createdProduct = await Product.find({});
    
     res.send(createdProduct)
}));

/* Find One Product */
productRoutes.get('/:id',expressAsyncHandler(async(req,res)=>{
    // let id = '63a83c7b1b4029feb9762259';
    const findProduct = await Product.findById(req.params.id)
    if(findProduct){
        console.log(findProduct);
        res.status(201).send(findProduct)
    }else{
        res.status(400).send({Message:'Product Not Found'})
    }
}))

/* Insert Products */

productRoutes.get('/seed',expressAsyncHandler(async(req,res)=>{
    const createdProducts = await Product.insertMany(data.products)
    res.send({createdProducts})
}))



export default productRoutes;