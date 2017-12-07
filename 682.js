/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
     var stack=[];
     for(var i=0;i<ops.length;i++)
     {
         if(ops[i]=="+")
         {
             var top=stack.pop();//
             var newTop=top+stack[stack.length-1];
             stack.push(top);
             stack.push(newTop);
         }
         else if(ops[i]=="C")
         {
             stack.pop();
         }
         else if(ops[i]=="D")
         {
             stack.push(2*stack[stack.length-1]);
         }
         else {
             stack.push(Number(ops[i]));
         }

     }
     var result=0;
     stack.forEach(function(item,index){
         result+=item;
     })
    return  result;
};
console.log(calPoints(["5", "2", "C", "D", "+"]));