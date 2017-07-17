/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
 var charArray=s.split("");
 var Parenttheses=0,//括号()
 bracket=0,//中括号[]
 braces=0;//大括号{}
 for(var i=0;i<charArray.length;i++)
  switch(charArray[i]){
    case "(":
    Parenttheses++;
    break;
    case ")":
    Parenttheses--;
    break;
    case "[":
    bracket++;
    break;
    case "]":
    bracket--;
    break;
    case "{":
    braces++;
    break;
    case "}":
    braces--;
    break;



  }
  return (Parenttheses===0&&bracket===0&&braces===0)

};