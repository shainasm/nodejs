const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

let products = [{ name: 'iphone 13 case', price: '999' }, { name: 'iphone 12 case', price: '1199'}, { name: 'iphone 13 pro case', price: '14999'}]

const validator = (req,res,next)=>{
  const {name,price} = req.body

  if (!name && !price) res.json({ error: "validation failed"})
  else next()
}

// -------------PUBLIC ROUTES-----------------
// GET ROUTE
// SEND ALL PRODUCTS
app.get('/products',(req,res)=>{
  res.json({ products })
})

// --------------PRIVATE ROUTES-----------------
app.post('/products/add',validator,(req,res)=>{
 const { name,price } = req.body
 
  products.push({
    name,
    price,
  })

  res.send({ products })
})

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`)
})