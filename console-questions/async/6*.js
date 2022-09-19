Promise.resolve(1)
  .then(2)
  .then(Promise.resolve(3))
  .then(console.log)



  // 2 不是一个函数
  // Promise.resolve(3) 不是一个函数
  // 等价于

  Promise.resolve(1)
  .then(val => val)
  .then(val => val)
  .then(console.log)
  // 1