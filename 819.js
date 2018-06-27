/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
    var words=paragraph.replace(/[\.\,\!\?\'\:\;]/g,'');
    var word_arr=words.split(" ");
    let hash={};
    for(var i=0;i<word_arr.length;i++)
    {
        let t=word_arr[i].toLowerCase();
        if(hash[t])
        {
            hash[t]++;
        }
        else{
            hash[t]=1;
        }
    }
    //取出来比banned长度大一的就行。按照顺序进行排序
    let unban=[];
    while (JSON.stringify(hash) != "{}")
    {
        let max=0;
        let temp_index;
        for(var key in hash)
        {
            if(hash[key]>max)
            {
                max=hash[key];
                temp_index=key;
            }
        }
        if(banned.indexOf(temp_index)>=0)
        {
            delete hash[temp_index];
            
        }
        else{
            return temp_index;
        }
       
    }
    


};
console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]));
module.exports=mostCommonWord;