const promise = Promise.resolve().then(() => {
	return promise;
  })
  promise.catch(console.err)
  // catch 不能循环引用