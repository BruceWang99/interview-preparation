function foo() {
	console.log( this.a );
  }
  
  function doFoo() {
	foo();
  }
  
  var obj = {
	a: 1,
	doFoo: doFoo
  };
  
  var a = 2; 
  obj.doFoo()

// 浏览器中输出2 foo() 在 doFoo中调用, doFoo定义在window中