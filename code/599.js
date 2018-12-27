/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  var result = []
  if (list1[0] == list2[0]) {
    return [list1[0]]
  }
  if(list1.length>=list2.length)
  {
      [list1,list2]=[list2,list1];
  }

  for (var i = 1;i <=(list1.length - 1 + list2.length - 1);i++) {
    // (n+1)的平方  减去 n的平方
    var temp_length1 = (i > list1.length - 1 ? list1.length - 1 : i)
    var temp_length2 = (i - temp_length1);

    for (var j = temp_length1,k = temp_length2;j >= 0;j--) {
      if (list1[j] == list2[k]) {
        result.push(list1[j])
      }
      k++;
    }

    if (result.length > 0) {
      return result
    }
  }
}

console.log(findRestaurant(['vacag', 'KFC'], ['fvo', 'xrljq', 'jrl', 'KFC']))
