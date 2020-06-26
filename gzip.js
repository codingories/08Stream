const fs = require('fs');
const zlib = require('zlib');
const file = process.argv[2];
const crypto = require("crypto")

const { Transform } = require("stream");

const reportProgress = new Transform({
  transform(chunk, encoding, callback){
    process.stdout.write(".");
    callback(null, chunk)
  }
});


fs.createReadStream(file)
  .pipe(crypto.createCipher("aes192","123456")) // 一定要先加密再压缩
  .pipe(zlib.createGzip())
  // .on("data",()=>process.stdout.write(".")) // gzip的过程冲打印点,然后存入到后面
  .pipe(reportProgress) // 优化打点
  .pipe(fs.createWriteStream(file+".gz"))
  .on("finish",()=>{console.log("done")})
