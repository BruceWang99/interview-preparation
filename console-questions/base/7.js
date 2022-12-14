function fun(n, o) {
	console.log(o)
	return {
	  fun: function(m){
		return fun(m, n);
	  }
	};
}
var a = fun(0);  // undefined
a.fun(1);  // (1, 0) 0
a.fun(2);  // (2, 0) 0
a.fun(3);  // (3, 0) 0
var b = fun(0).fun(1).fun(2).fun(3); // (0, undefined) => (1, 0) => (2, 1) => (3, 2)   undefined  0  1  2
var c = fun(0).fun(1); // (0, undefined) => (1, 0)  undefined  0
c.fun(2);  // 1
c.fun(3);  // 1
