function ajax(url, params) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log('sending', {
        url, params,
      })
      resolve({result: params})
    }, 1000)
  })
}

function createRequest(options) {
  const { pool: MAX_COUNT } = options;
  let count = 0;
  let queue = [];
  return function ajaxWrapper(...args) {
    if (count < MAX_COUNT) {
      count++;
      const p = ajax(...args)
      p.finally(() => {
        count--;
        if (queue.length) {
          const [queueArgs, resolver, rejector] = queue.shift()
          ajaxWrapper(...queueArgs).then(resolver).catch(rejector)
        }
      })
      return p
    } else {
      return new Promise((resolve, reject)=>{
        queue.push([args, resolve, reject]);
      });
    }
  }
}

const request = createRequest({
  pool: 3
})

for (let i = 0; i < 20; i++) {
  // ajax('/user').then(console.log);
  request(`/user/${i}`, {id: i}).then(console.log);
}
