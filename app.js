const express=require('express');
const app=express();
const morgan=require('morgan') //for loging
const productsRoutes=require('./api/routes/product')
const orderRoutes=require('./api/routes/order');
const e = require('express');

app.use(morgan('dev'));
app.use('/products',productsRoutes);
app.use('/orders',orderRoutes);

//for handling no routes
app.use((req,res,next)=>{
    const error=new Error('Not found');
    error.stauts=404;
    next(error); //forward to following fucntions
})


//handle all errors
app.use((error,req,res,next)=>{
    res.stauts=error.stauts || 500 ;
    res.json({
        error:{
            message:error.message
        }
    })
})
module.exports=app;


// app.use((req,res,next)=>{
//     res.status(200).json({
//         message:"It works"
//     });
// });