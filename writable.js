const { Writable } = require("stream");
const outStream = new Writable({
  write(chunk, encoding, callback){
    console.log(chunk.toString());
    callback();
  }
});

process.stdin.pipe(outStream) // 用户的输入stream,给什么内容就把输入打到屏幕上
