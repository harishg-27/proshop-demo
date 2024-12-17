const express = require("express")
const products = require('./data/products.js')
const dotenv = require('dotenv')
dotenv.config()
const port = process.env.PORT || 5000;
console.log("object",port)
const app = express() 

app.get('/', (req,res) => {
    res.send("API is running...")
})

app.get('/api/products', (req,res) => {
    res.json(products)
})

// app.get('/api/products', (req,res) => {
//     res.json(products)
// })

app.listen(port, () => console.log(`Server running on ${port}`))