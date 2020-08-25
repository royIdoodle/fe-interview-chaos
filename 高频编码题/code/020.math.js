Number.prototype.add = function(n) {
  return this + n
}

Number.prototype.reduce = function(n) {
  return this - n
}

const v = (2).add(3).reduce(1).add(2)

console.log({ v })
