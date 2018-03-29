/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
    //sort two char by S rules
    let T_array=T.split('');
    for(let i=0; i<T_array.length-1;i++ )
    {
        for(let j=i+1;j<T_array.length;j++)
        {
            if(sortChar(T_array[i],T_array[j])>0)
            {
                [T_array[i], T_array[j]] = [T_array[j], T_array[i]];
            }
        }
        
    }
    return T_array.join('');
    function sortChar(a,b)
    {
        let charArr=S.split('');
        let aIndex=getIndex(a,charArr);
        let bIndex=getIndex(b,charArr);
       if(aIndex>bIndex)
       return 1;

       else return -1;



    }
    
    function getIndex(item,arr)
    {
        for(var i=0;i<arr.length;i++)
        {
            if(item==arr[i])
            {
                return i;
            }
        }
        return -1;
    }
};
customSortString("cba", "abcd");