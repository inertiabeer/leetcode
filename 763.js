/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function (S) {
    var last={};
    for (var i = 0; i < S.length; i++)
         last[S[i]]=i;

    var  j = 0, anchor = 0;
    var ans=[];
    for (var i = 0; i < S.length; i++) {
        j = Math.max(j, last[S[i]]);
        if (i == j) {
            ans.add(i - anchor + 1);
            anchor = i + 1;
        }
    }
    return ans;
};