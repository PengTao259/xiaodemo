// var a = { n: 1 }
// var b = a
// b.n = 2
// console.log(a.n);

// console.log(5 == '5');
// Object.prototype[Symbol.iterator] = function* () ( for (const [key, value] of Object.entries(this)) { yield { key, value } }}
// var arr = [11, 54, 68, 7, 8]
// for (let i = arr.length - 1; i >= 0; i--) {
//   console.log(arr[i]);
// }
// for (let i = 0; i <= arr.length - 1; i++) {
//   console.log(arr[i]);

// }



// var r = arr.filter(function (element, index, self) {
//   return self.indexOf(element) === index;
// });
// console.log(r);

// var r = arr.filter(function (e, i, s) {
//   console.log(s);

//   return s.indexOf(e) === i
// })
// console.log(r);


var peter = {
  name: '张三',
  do: function () {
    return this.name
  }
}
// var newPeter = peter.do;   在赋值的时候do的this指向指向的window 所以没有do这个方法
var cpeter = peter.do   // 将引用赋值给了cpter 这个时候相当作用域在全局  
console.log(cpeter());   // 调用全局的do方法  但是在window里面 没有name这个属性

var newPeter = cpeter.bind(peter) // 这个时候把peter的this指向cpter这个全局变量
console.log(newPeter());  // 再次调用的时候就有name的值了 




















// 异步执行任务面试题

// console.log('script start')

// async function async1() {
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2 end')
// }
// async1()

// setTimeout(function () {
//   console.log('setTimeout')
// }, 0)

// new Promise(resolve => {
//   console.log('promise')
//   resolve()
// })
//   .then(function () {
//     console.log('Promise1')
//   })
//   .then(function () {
//     console.log('Promise2')
//   })

// console.log('script end')
