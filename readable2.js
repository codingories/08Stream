const {Readable} = require('stream')

const inStream = new Readable({
  read(size){
    const char = String.fromCharCode(this.currentCharCode++)
    this.push(char)
    console.log(`推了${char}`)
    if(this.currentCharCode > 90) { // Z
      this.push(null)
    }
  }
})

inStream.currentCharCode = 65 // A
inStream.pipe(process.stdout) // read会被process.stdout不停de调用

// inStream.push('AAAAAAA')
// inStream.push('BBBBBBBB') // 默认可读的数据是暂停态，不会发出去，只有ondata才会发出去
//
// inStream.push(null) // no more data
//
// // inStream.pipe(process.stdout)
//
// inStream.on('data',(chunk)=>{
//   process.stdout.write(chunk) // 会分两次写，因为是分两次推，但是这个例子不是边写边读
//   console.log('写了数据')
// })
