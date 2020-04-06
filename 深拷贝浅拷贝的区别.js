function deepCopyTwo(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj == 'object') {
    for (const key in obj) {
      //判断obj子元素是否为对象，如果是，递归复制
      if (obj[key] && typeof obj[key] === "object") {
        objClone[key] = deepCopyTwo(obj[key]);
      } else {
        //如果不是，简单复制
        objClone[key] = obj[key];
      }
    }
  }
  return objClone;
}



function deepCopy(obj) {
  let objClone = Array.isArray(obj) ? [] : {};
  if (obj && typeof obj == 'object') {
    for (const key in obj) {
      // 判断obj子元素是否为对象，如果是，则递归复制
      if (obj[key] && typeof obj[key] === "object") {

      }
    }
  }
}


// var obj = {
//   arr1: [1, 2, 3],
//   fn: function () {
//     console.log('我是一个方法')
//   },
//   a: '我是普通属性'
// }

// // 现在我要把obj字面量创建里的属性深拷贝（ 属性值是引用类型也要深拷贝 ）
// function deepClone(obj) {
//   // 根据类型制造一个新的数组或对象 => 指向一个新的空间
//   // 由于数组的typeof也是'object',所以用Array.isArray(obj)
//   var new_obj = Array.isArray(obj) ? [] : {};
//   // 首先判断obj的类型
//   // 普通类型
//   if (typeof obj != 'object') {
//     // 这里不能直接返回obj,不然就是浅拷贝的性质
//     return new_obj = obj
//   }
  //引用类型
  //数组
//   if (obj instanceof Array) {
//     for (i = 0; i < obj.length; i++) {
//       new_obj[i] = obj[i];
//       if (typeof new_obj[i] == 'object') {
//         deepClone(new_obj[i])
//       }
//     }
//   } else { //对象
//     for (let key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         // 对象中的数组和对象
//         if (typeof obj[key] == 'object') {
//           new_obj[key] = deepClone(obj[key]);
//         } else {//对象中没有引用类型
//           new_obj[key] = obj[key]
//         }
//       }
//     }
//   }
//   return new_obj;
// }
// var deepClone = deepClone(obj);
// console.log(deepClone);
// // 测试是不是深拷贝
// obj.fn = '我改变了方法属性';
// console.log(obj); //{arr1: Array(3), fn: ƒ, a: "我是普通属性", c: "我新增了一个属性"}
// console.log(deepClone); // 还是 {arr1: Array(3), fn: ƒ, a: "我是普通属性"}
