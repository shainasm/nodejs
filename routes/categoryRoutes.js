 const database = require('../database/db')
const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require('uuid');

router.get('/all', (req, res) => {

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
    const { name } = req.body
    const newCategory = {
        id: uuidv4(),
        name
    }
    database.categories.push(newCategory)
    try {
        let includes = database.categories.find(item => item.name===name)
        if (!includes)database.categories.push(newCategory) 
             else console.log('Already exits')
            
        res.json({
            categories: database.categories,
            message: "Successfully added category",
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

router.delete('/delete',(req,res)=>{
    try {
        
        const{id} = req.body
        // let element = database.categories.find(item => item.name === name)
        // const index = database.categories.indexOf(element)
        // database.categories.splice(index,1)

        const newCategories = database.categories.filter(item=>item.id!==id)
        database.categories = newCategories

        res.json({
            categories: database.categories,
            message: "Successfully deleted category",
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

module.exports = router