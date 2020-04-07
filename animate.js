function animate(obj, target, callback) {
  console.log(callback);

  clearInterval(obj.timer);   // 避免定时器多次执行
  obj.timer = setInterval(() => {
    var step = (target - obj.offsetLeft) / 10;
    step = step > 0 ? Math.ceil(step) : Math.floor(step);   // 向上取整向下取整分别对应目标正偏移负偏移
    if (obj.offsetLeft == target) {
      clearInterval(obj.timer)   // 当行进距离满足目标距离的时候 停止定时器 
      // 回调函数写到定时器里面
      if (callback) {
        callback()
      }
    }
    // 最后把步长和目标距左侧距离相加
    // 因为offset属于只读属性，所以赋值给style.left 
    obj.style.left = obj.offsetLeft + step + 'px'
  }, 15);
}