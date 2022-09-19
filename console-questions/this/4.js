var obj = { 
	name: 'bruce', 
	fun: function(){ 
		console.log(this.name); 
	}
} 
  obj.fun()     
  new obj.fun()

  // bruce  undefined 
  
  // 一个新对象 原型 利用this生成新对象属性 返回新对象有返回值 返回返回值