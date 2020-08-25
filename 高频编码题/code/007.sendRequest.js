function sendRequest(urls, max, callback) {
  const urlCount = urls.length;
  // 存储所有正在发送中的请求
  const requestsQueue = [];
  const results = [];
  let i = 0;
  const handleRequest = (url) => {
    const req = fetch(url).then(res => {
      const len = results.push(res);
      if (len < urlCount && i + 1 < urlCount) {
        requestsQueue.shift();
        handleRequest(urls[++i])
      } else if (len === urlCount) {
        'function' === typeof callback && callback(results)
      }
    }).catch(e => {
      results.push(e)
    });
    if (requestsQueue.push(req) < max) {
      handleRequest(urls[++i])
    }
  };
  handleRequest(urls[i])
}


const urls = Array.from({length: 10}, (v, k) => k);

sendRequest(urls, 3, (result) => {
  console.log('all done!', result)
});


function fetch(url, delay = Math.random() * 4000){
  return new Promise(resolve => {
    console.log(`\t\tsending request: [${url}] >> [${delay}ms]`)
    setTimeout(() => {
      console.log(`\t\t-------- done:[${url}] >> [${delay}ms]`)
      resolve(url)
    }, delay)
  })
}
