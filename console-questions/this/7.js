window.number = 2;
var obj = {
 number: 3,
 db1: (function(){
   console.log(this);
   this.number *= 4;
   return function(){
     console.log(this);
     this.number *= 5;
   }
 })()
}
var db1 = obj.db1;
db1();
obj.db1();
console.log(obj.number);   
console.log(window.number); 

// window
// window.number = 2 * 4 = 8
// window
// window.number = 8 * 5 = 40
// obj
// obj.number = 3 * 5 = 15

// 15
// 40
