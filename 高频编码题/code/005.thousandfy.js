(() => {
  const thousandfy = (num) => {
    return String(num).replace(/\d{1,3}(?=(\d{3})+(\.|$))/g, '$&,')
  }
  console.log(thousandfy(123456.123))
  console.log(thousandfy(1234567.123))
  console.log(thousandfy(12345678.123))
  console.log(thousandfy(123456789.123))
})();

console.log('-------------');

(() => {
  const thousandfy = (num) => {
    let str = String(num)
    const isFloat = /\./.test(str)
    let float = ''
    if (isFloat) {
      [str, float] = str.split('.')
    }

    str = str.split('')
      .reverse()
      .map((i, index) => {
        if (index%3 === 0 && index !== 0) {
          return i + ','
        }
        return i
      })
      .reverse()
      .join('')

    if (isFloat) {
      str = [str, float].join('.')
    }

    return str
  }
  console.log(thousandfy(123456.123))
  console.log(thousandfy(1234567.123))
  console.log(thousandfy(12345678.123))
  console.log(thousandfy(123456789.123))
  console.log(thousandfy(123456))
})()
