const express = require('express')
const database = require('./database/db')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')

console.log(categoryRoutes.stack)

app.use(express.json())

app.use('/category',categoryRoutes)

app.get('/',(req,res)=>{
   try {
    console.log(document)
   } catch (error) {
       res.status(200).send(error.message)
   }
})

app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})

// in try catch if the try block failes due to some  then catch block is going to be executed and server is not going to be crashed