/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function (logs) {
    //稳定排序 选择排序不稳定
    //用冒泡
    //字典排序
    sort(logs);
    return logs;
    function mapOrder(str1,str2){
        var arr1=str1.split(" ");
        var arr2=str2.split(" ");
        for(var i=1;i<arr1.length&&i<arr2.length;i++)
        {
            if(arr1[i]>arr2[i])
            {
                return true;
            }
            if(arr1[i]<arr2[i])
            {
                return false;
            }
        }
        if(i<arr1.length)
        {
            return true;//str1很长
        }
        return false;
    }
    function should_exchange(str1,str2){
        var isNum1=(str1[str1.length-1]%1==0);
        var isNum2=(str2[str2.length-1]%1==0);
        if(isNum1&&isNum2)
        {
            return false;
            //不需要交换
        }
        if(!isNum1&&!isNum2)
        {//按照字典排序，应该是
            return mapOrder(str1,str2)
            
        }
        if(isNum1&&!isNum2)
        {
            return true;
        }
        return false;

    }
    function sort(arr) {
      for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j <= i - 1; j++) {
          if (should_exchange(arr[j],arr[j+1])) {
            [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
          }
        }
      }
    }
};
module.exports=reorderLogFiles;