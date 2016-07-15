for(var i=1;i<4;i++){
	!function(i){
		var div=document.getElementById('div'+i);
		eventUtil.addHandler(div,'click',function(){
			console.log(i);
		});
	}(i);
}
//判断对象类型,此方法在ie8及以下对null和undefined失效
console.log(Object.prototype.toString.apply(undefined));
function Foo(){};
Foo.prototype.x=1;
var obj=new Foo();
console.log(obj.hasOwnProperty('x'));                  //false
console.log(obj.__proto__.hasOwnProperty('x'));          //true          判断是否原型上的方法
function foo(){
	var a=b=1;									//这种连等会隐式把b变成全局变量
};
foo();
console.log(typeof a);                      //undefined
console.log(typeof b);						//number


fd();										//函数声明自动前置
function fd(){
	console.log("fd");
};
// fe();
var fe=function(){ 							//函数表达式不可前置
	console.log("fe");
};

var p;
var obj={x:1,y:2,a:3,b:4};
for(p in obj){
	console.log(p);
}
