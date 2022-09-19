Promise.resolve(1)
  .then(res => {
    console.log(res);
    return 2;
  })
  .catch(err => {
    return 3;
  })
  .then(res => {
    console.log(res);
  });


  // 等价于
//   Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .then(null, err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
  // 等价于
//   Promise.resolve(1)
//   .then(res => {
//     console.log(res);
//     return 2;
//   })
//   .then(val => val, err => {
//     return 3;
//   })
//   .then(res => {
//     console.log(res);
//   });
  // 1 2