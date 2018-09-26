/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function (seats) {
    let distance=0;
    let max=0;
    for(var i=0;i<seats.length;i++)
    {
        if(seats[i]==0)
        {
            i++;
            while(i<seats.length&&seats[i]==0)
            {
                distance++;
                i++;
            }
            max=Math.max(distance,max);
        }
        
    }
    return Math.ceil(max/2);
};