const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Welcome Home")
})


let orders = [
        {custid:1,productid: 1001,prodname:'cell phone', Quantity: 1},
        {custid:2,productid: 1002,prodname:'pencil', Quantity: 10},
        {custid:3,productid: 91001,prodname:'Dining Table', Quantity: 1},
    ];

app.get('/api/orders',(req,res)=>
{
    res.json(orders);
});

app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})
