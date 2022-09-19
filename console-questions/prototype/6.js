var A = {n: 4399};
var B =  function(){
	this.n = 9999
};
var C =  function(){
	var n = 8888
};
B.prototype = A;
C.prototype = A;
var b = new B(); // { n: 9999 }
var c = new C(); // {}
A.n++ // 4400
console.log(b.n); // 9999
console.log(c.n); // 4400