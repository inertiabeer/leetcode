const assert=require("assert");
// const buf = Buffer.from('hello world', 'ascii');//原来的那个new Buffer弃用了
// const buf1=Buffer.alloc(10);
// console.log(buf1);
// const buf2=Buffer.allocUnsafe(10);//这里面有旧数据
//
// console.log(buf2.toString("utf-8"));
// assert.equal(buf1.length,"10");
//新添加了一个叫做TypedArray的东西
//slice方法在Buffer中不会copy
const arr = new Uint16Array(2);

arr[0] = 5000;
arr[1] = 4000;

// Copies the contents of `arr`
const buf1 = Buffer.from(arr);

// Shares memory with `arr`
const buf2 = Buffer.from(arr.buffer);

// Prints: <Buffer 88 a0>
console.log(buf1[0]);//16无符号

// Prints: <Buffer 88 13 a0 0f>
console.log(buf2);

arr[1] = 6000;

// Prints: <Buffer 88 a0>
console.log(buf1);

// Prints: <Buffer 88 13 70 17>
console.log(buf2);
//可以使用for of遍历
for (const b of buf2) {
    console.log(b);
}