//const express = require('express')
import express from 'express'
import order from  './routes/order.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
//import { orders } from './controllers/orderctrl.js'
import { orders } from './controllers/orderctrl.js'
const router = express.Router();
const app = express()
const PORT = 3000


app.set('view engine', 'ejs')
app.set('views','views');
app.use(express.static('public'));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// logger middleware
app.use(logger)
app.use('/api/orders',order)

// Error Handler

app.use(errorHandler);  

// Route to render orders view
// app.get('/orders', (req, res) => {
//     // Fetch orders from a data source (e.g., database or in-memory array)
//     // For example, using a static array:
//     // const orders = [
//     //     { id: 1, productid: 1001, prodname: 'cell phone', Quantity: 1 },
//     //     { id: 2, productid: 1002, prodname: 'pencil', Quantity: 10 },
//     //     { id: 3, productid: 91001, prodname: 'Dining Table', Quantity: 1 },
//     // ];
//     // Render the orders view and pass the orders data
//     res.render('order', { orders });
// });

// app.post('/orders', (req, res) => {
//     const newOrder = {
//         productid: req.body.productid,
//         prodname: req.body.prodname,
//         Quantity: req.body.Quantity
//     };

//     // Optionally, you can save the new order to your database or array here

//     // Render the confirmation page with the new order data
//     res.render('orderConfirmation', { order: newOrder });
// });

app.get('/',(req,res)=>{
    res.render('homepage')
})
app.get('/order',(req,res)=>{
     //res.render('homepage')
    res.render('order',{ orders })
    console.log(orders)
})
app.get('/orderform',(req,res)=>{
    //res.render('homepage')
   res.render('orderform')
   console.log(orders)
})
app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})
