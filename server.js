const express = require('express')
const app = express()
const categoryRoutes = require('./routes/categoryRoutes')

app.use(express.json())
app.use(express.static('public'))

app.get('/', (req,res)=> {
    res.sendFile('index.html')
})

app.listen(3001, () => {
    console.log("Listening at PORT 3001")
})


