var pattern=/[abc]at/g;
var pattern1=/.at/gi;
//g 是全局都应用，而不是查找到第一个之后就停止　ｉ是不区分大小写
//[abc]是表示abc 都是可以的
//[.ab] 就是以ａｂ结尾的
//元字符需要用\转义　　(){}[] \ ^ $ | ? + .

pattern.test("[abc]atsdfasdf");
console.log(pattern1.test("asdfasfat"));
//每一个模式有　global ignoreCase lastIndex multiline
//主要方法是regexp.exec()捕捉
var result=pattern.exec("abatcathellcat");
console.log(result);//[ 'bat', index: 1, input: 'abatcathellcat' ]
//第一项为第一个，第二项会匹配第一个捕获组，如果没有的话，就是ｉｎｄｅｘ

var pattern2=/.at/gi
var text="cat,bat,aat";//这里使用同一个字符串，ｇ模式调用两次ｅｘｅｃ就开始显示不同的
console.log(pattern2.exec(text));
console.log(pattern2.exec(text));