var F = function() {};
Object.prototype.a = function() {
  console.log('a');
};
Function.prototype.b = function() {
  console.log('b');
}
var f = new F(); // 这是个对象 f的原型__proto__ = F.prototype
f.a(); // a //  F.prototype.__proto__ = Object.prototype
f.b(); // b F.prototype这个上面没有b
F.a(); // a
F.b(); // b