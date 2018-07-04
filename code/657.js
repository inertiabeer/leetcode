/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var arr=moves.split("");
    var result=[0,0];
    arr.forEach(function(item,index){
        switch(item)
        {
            case "U":
                result[0]++;
                break;
            case "D":
                result[0]--;
                break;
            case "L":
                result[1]++;
                break
            case "R":
                result[1]--;
        }
    });
    for(var i=0;i<result.length;i++)
    {
        if(result[i]!==0)
        {
            return false
        }
    }
    return true;
};