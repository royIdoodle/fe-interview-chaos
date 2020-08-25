(() => {
  const app = { middlewares: [] };
  app.use = (fn) => {
    app.middlewares.push(fn);
  };
  app.compose = function() {
    //  Your Code Here
    const dispatch = [...app.middlewares]
    .reverse()
    .reduce((pre, fn) => fn.bind(this, pre), () => {})
    return dispatch()
  }
  app.use(next => {
    console.log(1);
    next();
    console.log(2);
  });
  app.use(next => {
    console.log(3);
    next();
    console.log(4);
  });
  app.use(next => {
    console.log(5);
    next();
    console.log(6);
  });
  app.compose();
})();

console.log('-----------------');

(() => {
  const app = { middlewares: [] };
  app.use = (fn) => {
    app.middlewares.push(fn);
  };
  app.compose = function() {
    function dispatch(i) {
      let fn = app.middlewares[i]
      if (i === app.middlewares.length) {
        fn = () => {}
      }
      return fn(dispatch.bind(null, i+1))
    }
    return dispatch(0)
  }
  app.use(next => {
    console.log(1);
    next();
    console.log(2);
  });
  app.use(next => {
    console.log(3);
    next();
    console.log(4);
  });
  app.use(next => {
    console.log(5);
    next();
    console.log(6);
  });
  app.compose();

})();
