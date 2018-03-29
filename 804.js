/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function (words) {
let count=0;
let hash={};
let morseArr= [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
for(let i=0;i<words.length;i++)
{
    let chars=words[i].split('');
    let result='';
    for(let j=0;j<chars.length;j++)
    {
        let morse=chars[j].charCodeAt();
        let index=Number(morse)-97;
        console.log(index);
        result=result+morseArr[index];

    }

    if(!hash[result])
    {
        hash[result]=1;

        count++;
    }

}
return count;
};
console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"]));