const curry = (fn) => {
  let argList = []
  return function curryFn(...args) {

    if (!args.length) {
      return fn(...argList)
    } else {
      argList = argList.concat(args)
      return curryFn
    }
  }
}

const addFn = (...args) => args.reduce((total, cur) => total + cur, 0)
// addFn 的输入参数个数不一定，会将传入的所有参数都相加求和
console.log(addFn(1,2,3))
const add = curry(addFn)
console.log(add(1,2)(3)(4)())
