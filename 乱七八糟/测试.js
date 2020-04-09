var t = true;
setTimeout(() => (t = false), 0);
while (t) { }
console.log('end')
