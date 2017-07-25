const assert = require('assert');

const obj1 = {
  a: {
    b: 1
  }
};
const obj2 = {
  a: {
    b: 2
  }
};
const obj3 = {
  a: {
    b: 1
  }
};
const obj4 = Object.create(obj1);

// assert.deepEqual(obj1,obj2,"hello");//报错了才显示
//只考虑own 可以枚举的属性
// assert.deepStrictEqual({ a: 1 }, { a: '1' });//===
// assert.doesNotThrow(()=>{
// 	throw new TypeError("can not find");
// },TypeError,"hellod");
//报错就挂起,然后输入报错信息
// assert.equal("1",2,"错了");//这是两个等号的
// assert.fail(1,2,"错了",">");//我只发现这个是输出错误信息的

// assert.ifError()//判断是否bool
assert.notDeepEqual(obj1, obj4);