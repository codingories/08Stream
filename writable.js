const { Writable } = require("stream");
const outStream = new Writable({
  write(chunk, encoding, callback){
    console.log(chunk.toString());
    callback();
  }
});

// process.stdin.pipe(outStream) // 用户的输入stream,给什么内容就把输入打到屏幕上

process.stdin.on('data',(chunk)=>{
  outStream.write(chunk)
}) // 如果看不懂上面这种方式就用这种的,更容易去理解
