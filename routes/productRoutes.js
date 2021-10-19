const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get('/all', (req, res) => {

  const {name,price,categoryName} = req.body

  if (!database.categories.find(item => item.name === categoryName)){
    let newCategory = {name: categoryName, id: uuidv4 }
    database.categories.push(newCategory)

    const newProduct = {
      id: uuidv4(),
      name, price, category: categoryName
    }
    database.products.push(newProduct)
  } else {
    const newProduct = {
    id: uuidv4(),
    name, price, category: categoryName
 }
    database.products.push(newProduct)
}
    try {
        res.json({
            categories: database.categories,
            message: "Successfully fetched categories",
            status: "SUCCESS"
        })
    } catch (error) {
        res.json({
            categories: [],
            message: error.message,
            status: "FAILED"
        })
    }

})

router.post('/add', (req, res) => {

  try {
      res.json({
          categories: database.categories,
          message: "Successfully fetched categories",
          status: "SUCCESS"
      })
  } catch (error) {
    console.log(error)
      res.json({
          categories: [],
          message: error.message,
          status: "FAILED"
      })
  }

})

module.exports = router