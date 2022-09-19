(function(){
	var x = y = 1;
 })();
 var z;
 
 console.log(y); 
 console.log(z);
 console.log(x);

 // var x = y = 1; 自右向左执行 y没有声明, 会当作window.y处理