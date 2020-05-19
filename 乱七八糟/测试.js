// // var t = true;
// // setTimeout(() => (t = false), 0);
// // while (t) { }
// // console.log('end')

// var dataList = [1,2,3,4,5,6,7,8,9,10]
// var index = 3;
// dataList.splice(index, 1, ...this.dataList.splice(index - 1, 1, this.dataList[index]))
// console.log(dataList);
// var data = [{labe:1,name:'aaa'},{labe:2,name:'bbb'},{labe:3,name:'ccc'}]   
// data.forEach(item=>{
//   console.log(item.name);
// })

// var newArr = data.map(item=>{
//   return item.name
// })
// console.log(newArr);


var selectDataMap = {
  illegalBehavior: [1,2,3,4,5],
  punishCategory: [6,7,8,9,10]
}
// let obj = {}
// obj = selectDataMap['illegalBehavior'].find(item=>{
//   return item > 3
// })
console.log(selectDataMap['illegalBehavior']);

