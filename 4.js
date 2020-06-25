const fs = require('fs')
const stream = require('stream')

const s = fs.createReadStream('./big_file.txt')
console.log(s)

console.log(stream.Readable.prototype)
