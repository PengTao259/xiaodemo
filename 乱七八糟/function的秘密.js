function* genFunc() {
  console.log('step 1')
  yield 1
  console.log('step 2')
  yield 2
  console.log('step 3')
  return 3
}
var gen = genFunc()

var ret = gen.next() // 输出: 'step 1'
console.log(ret.value);
console.log(ret.done);

ret = gen.next()
console.log(ret.value);
console.log(ret.done);

ret = gen.next()
console.log(ret.value);
console.log(ret.done);







