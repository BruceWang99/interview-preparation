var a=3;
function c(){
   alert(a);
}
(function(){
 var a=4;
 c();
})();

// 词法作用域在预编译阶段就确定过了

// 3 
