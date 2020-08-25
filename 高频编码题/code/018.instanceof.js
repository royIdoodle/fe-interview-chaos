const instanceOf = (left, right) => {
  const origin = right.prototype
  while(true) {
    if (left.__proto__ === null)
      return false
    if (left.__proto__ === origin)
      return true
    left = left.__proto__
  }
}

//测试用例
class A {

}

class AA extends A {
  constructor() {
    super()
  }
}
const a = new AA()

console.log(instanceOf(a, A))             // true
console.log(instanceOf(a, AA))            // true
console.log(instanceOf(a, Object))        // true
console.log(instanceOf(a, Number))        // false
