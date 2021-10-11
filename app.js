const fs = require('fs')
// fs.readFile('./test.txt','utf8', (error,data) =>{
//   if (error) console.log(error)
//   else console.log(data.toString())
// })

// console.log(fs.readFileSync('./test.txt','utf8'))

fs.writeFile('./test.txt',`append me ${fs.readFileSync
}{'./test.txt','utf8'}}`,(error) =>{
  if (error) console.log(error)
})
