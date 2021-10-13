// const http = require('http')
// const fs = require('fs')
// const path = require('path')

// const server = http.createServer((request, response) => {
//     // request.url
//     // request module is used to make http calls
//     const { url } = request
//     if (url == '/login') {
//         response.write('<h1>LOGIN</h1>')
//         // we created a new route login
//         response.end()
//     }
//     if (url == '/signup') {
//         response.write('<h1>SINGUP</h1>')
//         // new route signup
//         response.end()
//     }
// })


// server.listen(3000, () => {
//     console.log(`Server listening at PORT: ${3000}`)
// })


const express = require('express')
const app = express()

app.get('/login',(req,res)=>{
  console.log(req.url)
  res.send('this is a login')
})

app.get('/signup',(req,res)=>{
  console.log(req.url)
  res.send('<h1>this is a signup</h1>')
})

app.listen(3000, ()=> {
  console.log("server listening at port 3000")
})