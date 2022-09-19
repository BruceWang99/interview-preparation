function a() {
	console.log(this);
}
a.call(null);

// 如果第一个参数传入的对象调用者是null或者undefined，call方法将把全局对象（浏览器上是window对象）作为this的值。
// 严格模式下 null 就是 null
// window