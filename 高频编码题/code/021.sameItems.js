function sameItems(listA, listB) {
  const list = [];
  while(listA.length && listB.length) {
    if (listA[0] === listB[0]) {
      list.push(listA[0])
      listA.shift()
      listB.shift()
    } else if(listA[0] < listB[0]) {
      listA.shift()
    } else {
      listB.shift()
    }
  }
  return list
}

const listA = [1,4,5,12,34,46,77]
const listB = [1,3,5,22,46,54,77,231]

const result = sameItems(listA, listB)
console.log(result)
