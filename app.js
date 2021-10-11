const path = require('path')

// console.log(path.resolve('./app.js'))
// path from the root

// console.log(path.relative('/',"./app.js"))
// gives the path related to the core

// console.log(path.extname('./app.js'))
// gives the extension name

// console.log(path.dirname('./temp/utlis.js'))
// gives the directory name

console.log(path.join(__dirname, 'app.js'))
// similar to resolve
