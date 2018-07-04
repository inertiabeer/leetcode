/**
 * Initialize your data structure here.
 */
var MapSum = function () {
    this.data={};
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function (key, val) {
    this.data[key]=val;
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function (prefix) {
    let result=0;
     for(var key in this.data)
     {
         if(key.indexOf(prefix)==0)
         {
             result+=this.data[key];
         }
     }
     return result;
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = Object.create(MapSum).createNew()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

 module.exports=MapSum;