
// 读取文件



// // 导入fs模块 赋值给fs这个常量
// const fs = require('fs'); 
// const filePath = __dirname + '/练习/hha.txt';
// fs.readFile(filePath,'utf-8',(err,data)=>{
//   if(err==null){
//     console.log(data);
    



//   }
// });

// 写入文件
// 写入文件
// 写入文件
// 写入文件
// const data = new Uint8Array(Buffer.from('Node.js中文网'));
// fs.writeFile('./hha.txt', data, (err) => {
//   if (err) throw err;
//   console.log('文件已被保存');
// });
// const path = require('path');
// // const filePath = path.join('info/','./file','ksbsaks');

// const filePath = path.join(__dirname,);

// console.log(filePath);

// 导入模块 path
const path = require('path');
// 导入模块 fs
const fs = require('fs');

const fullPath = path.join(__dirname,'./hha.txt');
console.log(fullPath);
fs.readFile(fullPath,'utf-8',(err,data)=>{
  if(err==null){
    console.log(data);
  }
})


