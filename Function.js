// 获取浏览器滚动条宽度
function getScrollbarWidth () {
  let element = document.createElement('div')
  let styles = {
    width: '100%',
    height: '100%',
    overflowY: 'scroll'
  }
  for (let i in styles) {
    element.style[i] = styles[i]
  }
  document.body.appendChild(element)
  let scrollbarWidth = element.offsetWidth - element.clientWidth
  element.remove()
  return scrollbarWidth
}