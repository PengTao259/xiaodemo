// const person = {
//   name:'食戟之灵',
//   desc:'美食番做饭',
//   spec:'食物越好吃，衣服就越少'
// }
// const{name,desc,spec} = person;
// console.log(name,desc,spec);
// function eatFood({food1="西兰花炒蛋",food2="西红柿炒蛋",food3="蛋炒西兰花",food4="猪肉炒蛋"}) {
//   console.log(food1,food2,food3,food4);
  
// }
// eatFood({food1:"蛋炒蛋"});
// eatFood({});
console. log('script start')

async function async1() {
    await async2()
    console.log('async1 end')
}
async function async2() {
    console.log('async2 end')
}
async1()

setTimeout(function(){
    console.log('setTimeout')
},0)

new Promise(resolve=>{
    console.log('promise')
    resolve()
})
    .then(function(){
    console.log('Promise1')
})
    .then(function(){
    console.log('Promise2')
})

console.log('script end')