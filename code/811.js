/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function (cpdomains) {
    let hash={};
    for(let i=0;i<cpdomains.length;i++)
    {
        let item=cpdomains[i].split(" ");
        let count=item[0];
        let domain=item[1].split(".");
        while (domain.length > 0) {
                let item = domain.join(".");
                if (hash[item]) {
                    hash[item] = parseInt(hash[item]) + parseInt(count);
                }
                else {
                    hash[item]=count;
                }
                domain.shift();//减法
        }

    }
    let result=[];
    for(var key in hash)
    {
        let temp=`${hash[key]} ${key}`;
        result.push(temp);
    }
    return result;

};