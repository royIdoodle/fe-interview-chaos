// 节流
const throttle = (fn, wait = 500) => {
  let timer = null
  return function(...args) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null
        return fn(...args)
      }, wait)
    }
  }
}

// 防抖
const debounce = (fn, delay = 500) => {
  let timer = null
  return function(...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn(...args)
      clearTimeout(timer)
    }, delay)
  }
}

let count = 0
const increase = (desc) => {
  console.log({ count: ++count, desc })
}

const incDebounced = debounce(increase)
const incThrottled = throttle(increase)
let t = setInterval(() => {
  incThrottled('ss')
}, 100)
setTimeout(() => {
  clearTimeout(t)
}, 2000)
