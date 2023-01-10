import express from "express";
import expressAsyncHandler from "express-async-handler";
import Order from "../Models/Orders.js";
import { isAuth } from "../utils.js";

const orderRoutes = express.Router()

orderRoutes.post('/',isAuth,expressAsyncHandler(async(req,res)=>{
    try {
        if(req.body.CartItems === 0){
        res.status(400).send({message:'Cart Is Empty'})
        console.log(req.user);
    }else{
        const order = new Order({
            orderItems:req.body.orderItems,
            shippingAddress:req.body.shipping,
            paymentMethod:req.body.paymentMethod,
            itemPrice:req.body.itemPrice,
            shippingPrice:req.body.shippingPrice,
            taxPrice:req.body.taxPrice,
            totalPrice:req.body.totalPrice,
            user:req.user.id
        })
    const createOrder = await order.save();
    res.status(201).send({message:'New Order Created ',orders:createOrder})
    }

    } catch (error) {
        res.status(500).send({message:error.message})
    }
   
}))

export default orderRoutes;