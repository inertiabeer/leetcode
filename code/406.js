/**
 * @param {number[][]} people
 * @return {number[][]}
 */
Array.prototype.mysort=function()
{
    for(let i=0;i<this.length-1;i++)
    {
        for(let j=i+1;j<this.length;j++)
        {
            if(this[i][0]<this[j][0])
            {
                var temp=this[i];
                this[i]=this[j];
                this[j]=temp;
            }
            if(this[i][0]===this[j][0])
            {
                if(this[i][1]>this[j][1])
                {
                    var temp=this[i];
                    this[i]=this[j];
                    this[j]=temp;

                }
            }
        }
    }
}
var reconstructQueue = function(people) {
    people.mysort();
    var result=[];

    var index=0;
    for(var i=0;i<people.length;i++)
    {

      result.splice(people[i][1],0,people[i]);

    }

    return result;
};
reconstructQueue([[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]);
