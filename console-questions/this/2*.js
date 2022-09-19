var a = 10
var obj = {
  a: 20,
  say: () => {
    console.log(this.a)
  }
}
obj.say() 

var anotherObj = { a: 30 } 
obj.say.apply(anotherObj) 

// 箭头函数的this 指向父级的执行上下文
// 浏览器下: 10 10