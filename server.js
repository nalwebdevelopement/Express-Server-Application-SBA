//const express = require('express')
import express from 'express'
import order from  './routes/order.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
const app = express()
const PORT = 3000


app.set('view engine', 'ejs')
app.use(express.static('public'));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// logger middleware
app.use(logger)
app.use('/api/orders',order)

// Error Handler

app.use(errorHandler);  




app.get('/',(req,res)=>{
     res.render('homepage')
})
app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})
