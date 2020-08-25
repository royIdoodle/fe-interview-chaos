const generator = function () {
  let count = 0
  return function symbol(symbolStr) {
    if (this instanceof symbol) throw new TypeError('Symbol is not a constructor');
    return `${++count}_${symbolStr}`
  }
}

const $Symbol = generator()
$Symbol.for = function(description) {
  return `symbol_${description}`
}

const s1 = $Symbol('my')
const s2 = $Symbol('my')
console.log(s1 === s2)
const s3 = $Symbol.for('my')
const s4 = $Symbol.for('my')
console.log(s3 === s4)

