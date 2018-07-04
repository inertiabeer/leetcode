/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    function isEqual(obj1, obj2) {
        for (var key in obj1) {
            if (!obj2[key]||obj1[key] > obj2[key]) {
                return false;
            }
        }
        return true;
    }


    function return_hash(arr) {
        let hash = {};
        for (let i = 0; i < arr.length; i++) {
            let t = arr[i];
            if (hash[t]) {
                hash[t]++;
            } else {
                hash[t] = 1;
            }
        }
        return hash;

    }
    return isEqual(return_hash(ransomNote.split("")), return_hash(magazine.split("")))
};
console.log(canConstruct("a","b"));