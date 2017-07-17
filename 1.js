console.log(Function.prototype.__proto__===Object.prototype);
console.log(Object.prototype.__proto__===null);
var a=function(){};
var b={};
console.log(a.__proto__===Function.prototype);
console.log(b.__proto__===Object.prototype);
console.log("a".__proto__===String.prototype);
console.log(false.__proto__===Boolean.prototype);