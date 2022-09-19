function a(xx){
	this.x = xx;
	return this
};
var x = a(5); // window.x = 5 => window.x = window
var y = a(6); // window.x = 6(把上面的window.x = window 覆盖了))  => window.y = window

window.x = 6

window.y = window
window.y.x = window.x = 6
console.log(x.x)
console.log(y.x) // 6
