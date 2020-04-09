

// =======================find方法==================================

// let Arr = [1, 2, 5, 7, 5, 9];
// let result1 = Arr.find(function (currentValue, index, arr) {
//   return currentValue > 5;
// });
// let result2 = Arr.find(function (currentValue, index, arr) {
//   return currentValue > 9;
// });
// console.log(result1); // 7
// console.log(result2); // undefined

// ==========================forEach方法========================================
var Arr = [1, 4, 7, 10];
Arr.forEach(function (currentValue, index, arr) {
  console.log(index + "--" + currentValue + "--" + arr);
})
	// 输出：
	// 0--1--true
	// 1--4--true
	// 2--7--true
	// 3--10--true	
