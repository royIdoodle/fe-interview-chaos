const flatten = (list, depth = Infinity) => {
  if (!Array.isArray(list)) {
    return list
  }
  return list.reduce((final, item) => {
    if (Array.isArray(item) && depth > 0) {
      return final.concat(flatten(item, depth - 1))
    } else {
      final.push(item)
      return final
    }
  }, [])
}


const list = [1,[2,[3,4,[5,6]]]]
const l = flatten(list)
console.log(l)
