
// 递归深拷贝
const deepClone = (obj) => {
  // 只对引用类型进行深拷贝
  if (typeof obj !== 'object') {
    return obj
  }
  const target = {};
  Object.keys(obj).forEach(key => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      // 数组做个特殊处理
      if(Array.isArray(obj[key])) {
        target[key] = obj[key].map(i => deepClone(i))
      } else if (typeof obj[key] === 'object') {
        target[key] = deepClone(obj[key])
      } else {
        target[key] = obj[key]
      }
    }
  })
  return target
}

const origin = {
  foo: {
    bar: {
      count: 1
    }
  }
}

const copy = origin
copy.foo.bar.count = 10
console.log(origin)

const otherOrigin = {
  foo: {
    bar: {
      count: 1,
      list: [1,2,3,4]
    }
  }
}

const clone = deepClone(otherOrigin)
clone.foo.bar.count = 0
clone.foo.bar.list[0] = 20
console.log(otherOrigin.foo.bar, clone.foo.bar)

