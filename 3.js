const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.on('request',(request, response)=>{
  const stream = fs.createReadStream('./big_file.txt')
  stream.pipe(response)
  stream.pause()
  setTimeout(()=>{
    stream.resume()
  },10000)

  stream.on('data',(chunk)=>{
    console.log(chunk.toString())
    console.log('读取了一次数据')
  })
  stream.on('end',()=>{
    console.log('全部读完了')
  })
  // stream.pipe(response)
})

server.listen(8888)
console.log('8889')
