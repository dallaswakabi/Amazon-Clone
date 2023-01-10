import express  from "express";
import data from '../data.js'
import bcrypt from "bcryptjs";
import User from "../Models/userModels.js";
import expressAsyncHandler from 'express-async-handler'
import { generateToken } from "../utils.js";
const userRoutes = express.Router()

/* insert Data in User Like Email,Password,etc... */

 userRoutes.get('/seed',expressAsyncHandler(async(req,res)=>{
    await User.remove({});
    const createdUser = await User.insertMany(data.users)
    res.send({createdUser})
 }))

   /* User SignIn Authentic and Authorized */
  
   userRoutes.post('/signin',expressAsyncHandler(async(req,res)=>{
      try {
          const user = await User.findOne({email:req.body.email});
      if(user){
         if(bcrypt.compareSync(req.body.password,user.password)){
            res.status(201).send({
               id:user._id,
               name:user.name,
               email:user.email,
               password:user.password,
               token:generateToken(user)
            })
            return;
         }
      }
         res.status(401).send({message:'Email and Password not exist'})
      
      } catch (error) {
         res.status(500).send({message:error.message})
      }
     
   }))

   /* User Register */

   userRoutes.post('/register',expressAsyncHandler(async(req,res)=>{
      
          try {
            const user = new User({name:req.body.name,email:req.body.email,
            password:bcrypt.hashSync(req.body.password,8)});
              if (user){
                const createdUser = await user.save();
             res.send({
               id:createdUser._id,
               name:createdUser.name,
               email:createdUser.email,
               password:createdUser.password,
               token:generateToken(createdUser)
             });
             return;
              }
            res.status(401).send({message:'Register User Failed!'})
            
          } catch (error) {
            res.status(500).send({message:error.message})
          }
       
        
   }))

 export default userRoutes;