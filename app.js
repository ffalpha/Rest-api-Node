const express=require('express');
const app=express();
const productsRoutes=require('./api/routes/product')
const orderRoutes=require('./api/routes/order')

app.use('/products',productsRoutes);
app.use('/orders',orderRoutes);


module.exports=app;


// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"It works"
//     });
// });