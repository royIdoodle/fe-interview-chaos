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
    return new Promise((resolve, reject) => {
      if (count < MAX_COUNT) {
        count++;
        ajax(...args)
          .then(data => {
            resolve(data);
          })
          .catch(reason => {
            reject(reason);
          })
          .finally(() => {
            count--;
            if (queue.length) {
              const { params } = queue.shift()
              resolve(ajaxWrapper(...params))
            }
          })
      } else {
        queue.push({params: args})
      }
    })
  }
}

const request = createRequest({
  pool: 3
})

for (let i = 0; i < 20; i++) {
  // ajax('/user').then(console.log);
  request(`/user/${i}`, {id: i}).then(console.log);
}
