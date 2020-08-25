const decodeUrlDeep = url => {
  const decodedUrl = decodeURIComponent(url)
  if (url === decodedUrl) {
    return decodedUrl
  }
  return decodeUrlDeep(decodedUrl)
}

const url = 'http://baidu.com/shop=ss&name=aa'
const encodedUrl = encodeURIComponent(encodeURIComponent(encodeURIComponent(url)))
console.log(encodedUrl)
console.log(decodeUrlDeep(encodedUrl))
