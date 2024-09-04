const express = require('express')
const app = express()
const PORT = 3000

app.get('/',(req,res)=>{
    res.send("Welcome Home")
})
app.listen(PORT,()=>{
    console.log(`Server is now Running...${PORT}`)
})
