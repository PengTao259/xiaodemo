(function flexible(window, document) {

  // 1、获取html的根元素
  var docEl = document.documentElement
  // dpr 就是物理像素比  在pc端的话物理像素比是1 在移动端的物理像素比是2
  var dpr = window.devicePixelRatio || 1




  // 2、 添加body的字体
  // adjust body font size
  function setBodyFontSize() {
    // 如果有body就直接给body设置字体大小
    if (document.body) {
      document.body.style.fontsize = (12 * dpr) + 'px'
    } else {
      // 否则 没有body的情况下 就等页面主要元素加载完毕以后再再加载DOM设置body字体大小
      document.addEventListener('DOMcontentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // 3、设置html元素的大小
  function setRemUnit() {
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }
  setRemUnit()

  // 4、监听页面变化 当页面变化的时候 要重新设置rem的大小
  window.addEventListener('resize', setRemUnit)
  // pageshow事件是我们重新的加载的时候会触发的事件 
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // 5、有些移动端浏览器不支持0.5像素的写法
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }

}(window, document))