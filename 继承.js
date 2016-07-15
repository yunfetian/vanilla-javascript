//Object.create()  是es5以后才有的方法，解决兼容问题
if(!Object.create){
	Object.create=function(proto){
		function F(){};
		F.prototype=proto;
		return new F;
	};
}
console.log(new Object() instanceof Array);
console.log([1,2] instanceof Array);
//调用子类方法
function person(name){
	this.name=name;
};
function stu(name,className){
	this.className=className;
	person.call(this,name);
};
var bosn=new stu('cjc','jk1305');
console.log(bosn);
//链式调用
function classManager(){};
classManager.prototype.addClass=function(str){
	console.log("class: "+str+" added");
	return this;
};
var manager=new classManager();
manager.addClass('a').addClass('b').addClass('c');
// stu.prototype=person.prototype;                    //继承1
// stu.prototype=new person();                        //继承2
// stu.prototype=Object.create(person.prototype);     //继承3    此方法较好
