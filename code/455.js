/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    quicksort(g, 0, g.length - 1);
    quicksort(s, 0, s.length - 1);
    let content = 0;
    let j = 0;
    for(var i=0;i<s.length;i++)
    {
        while(j!=g.length&&g[j]>s[i])
        {
            j++;
        }
        if(j==g.length)
        {
            break;
        }
        content++;
        j++;
    }
    return content;


    function quicksort(arr, i, j) {
        if (i > j) {
            return;
        }
        let left = i,
            right = j;
        let temp = arr[left];
        while (i != j) {
            //从右到左
            while (arr[j] <= temp && i < j) {
                j--;
            }
            while (arr[i] >= temp && i < j) {
                i++;
            }
            if (i < j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        arr[left] = arr[i];
        arr[i] = temp;
        quicksort(arr, left, i - 1);
        quicksort(arr, i + 1, right);
    }
};
module.exports = findContentChildren;


