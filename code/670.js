/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
    var swap = function (num) {

        let max = 0;
        let index = 0;

        fina++;
        num = num.toString().split("");
        if (num.length == 1) {
            return Number(num);
        }
        for (let i = 0; i < num.length; i++) {
            if (max <= num[i]) {
                max = num[i];
                index = i;
            }
        }
        if (index != 0 && num[index] != num[0]) {
            let temp = num[index];
            num[index] = num[0];
            num[0] = temp;
            flag = false

        }
        else {
            if (flag) {
                if (num.length > 1) {
                    let copy = num.slice(1);
                    if (fina == 1) {
                        return Number(num[0] + swap(copy.join("")));
                    }
                    return num[0] + swap(copy.join(""));
                }
                else {
                    return num[0];
                }

            }



        }
        return Number(num.join(""));
    };
    let flag = true;
    let fina=0;
    return swap(num);
}

console.log(maximumSwap(1));