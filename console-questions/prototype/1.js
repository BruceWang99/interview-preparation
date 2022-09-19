function Person(name) {
    this.name = name
}
var p2 = new Person('king');
console.log(p2.__proto__) // Person.prototype
console.log(p2.__proto__.__proto__) // Object.prototype
console.log(p2.__proto__.__proto__.__proto__) // null
console.log(p2.__proto__.__proto__.__proto__.__proto__)  // 报错
console.log(p2.__proto__.__proto__.__proto__.__proto__.__proto__)   // 报错
console.log(p2.constructor) // Person
console.log(p2.prototype) // undefined
console.log(Person.constructor) // 一个函数
console.log(Person.prototype) 
console.log(Person.prototype.constructor) // Person
console.log(Person.prototype.__proto__) // Object.prototype
console.log(Person.__proto__) // Function.prototype
console.log(Function.prototype.__proto__) // Object.prototype
console.log(Function.__proto__) // Function.prototype js 内置Function既是实例又是构造函数, 其他内置构造函数的__proto__都是Function.prototype, 但是他们的prototype又是相互独立的
console.log(Object.__proto__) // Function.prototype
console.log(Object.prototype.__proto__) null