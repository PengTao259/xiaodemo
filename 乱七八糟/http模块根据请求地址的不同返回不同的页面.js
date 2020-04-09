// 导入 path 模块
const path = require('path');
// 导入 fs 模块
const fs = require('fs');
// 导入 http 模块
const http = require('http');

const server = http.createServer((request,response)=>{
  response.setHeader('content-type','text/html;charset=utf-8');
  const requestURL = decodeURI(request.url);
  const fullPath = path.join(__dirname,requestURL);
  fs.readFile(fullPath,function (err,data) {
    if(err == null){
      response.end(data);
    }else {
      response.end('<h1>你要的页面去火星了< /h1>');
    }
  })
});

server.listen(8848,function (err) {
  if(err == null){
    console.log('开启成功 端口8848');
    
  }
});
