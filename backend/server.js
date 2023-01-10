import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import userRoutes from './Routes/userRoutes.js';
import productRoutes from './Routes/productRoutes.js';
import orderRoutes from './Routes/OrderRoutes.js';

  dotenv.config()

/* established express */

const app = express();

app.get('/',(req,res)=>{
    res.send('server is connected successfully')
})
const DB= 'mongodb+srv://dallas:dallas12@ecommerce.yrk6n.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 4000;
/* connect database and server*/

mongoose.connect(DB,
    {useNewUrlParser:true},
    { useUnifiedTopology: true },
    {useFindAndModify:false},
    {useCreateIndex:true})
.then((result)=>{
    app.listen(PORT,()=>{
       console.log(`Server Listen On http://localhost:${PORT}`);
})
console.log(`Database Connecting Successfully:${result.connection.host}`)

}).catch((err) =>console.log(err))

/* Middle way */
   app.use(express.json())  
   app.use(express.urlencoded({extended:true}))
 /* userRouse */

 app.use('/api/users',userRoutes)
 
 /*product Routes */
 app.use('/api/products',productRoutes)
// Order Routes
app.use('/api/orders',orderRoutes)
 /* catching error middleway */

 app.use((err,req,res,next)=>{
    res.status(500).send({message:err.message})
 })
/* find one product and display found one *

app.get('/api/products/:id',(req,res)=>{
   const id  = req.params.id;
   const ProductId = data.products.find((item)=>id == item._id);
    if(!ProductId){
        res.send('Product Not Found')
    }else{
       
        res.send(ProductId)
    }
})

app.get("/api/products", (req, res) => {
    res.send(data.products)
});
*/