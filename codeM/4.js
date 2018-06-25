// function print(n){
//     console.log(n);
// }


// var weight = [1, 1];
// var [n, m, k, c] = [4, 2, 2, 100];
// var marks=[
//     [100, 99],
//     [70, 70],
//     [40 ,-1],
//    [ 100, 39]
// ]


var first = readline().split(" ");
var [n, m, k, c] = first;
var weight = readline().split(" ");

var marks = [];
for (var i = 0; i < n; i++) {
    var temp = readline().split(" ");
    marks.push(temp);
}

var weight_sum = 0;
for (var i = 0; i < m; i++) {
    weight[i] = parseInt(weight[i]);
    weight_sum += weight[i];
}





var max_marks_1 = []; //-1为小值
var max_marks_2 = []; // -1为大
//m场比赛 n个选手
for (var i = 0; i < m; i++) {
    var max_1 = marks[0][i];
    var max_2 = marks[0][i];
    for (var j = 0; j < n; j++) {
        if (marks[j][i] == -1) {
            if (0 > max_1) {
                max_1 = 0;
            }
            if (c > max_2) {
                max_2 = parseInt(c);
            }

        } else {
            if (marks[j][i] > max_1) {
                max_1 = parseInt(marks[j][i]);
            }
            if (marks[j][i] > max_2) {
                max_2 = parseInt(marks[j][i]);
            }
        }

    }
    max_marks_1.push(max_1);
    max_marks_2.push(max_2);
}
//利用max_marks_1
var result_1 = [];
var result_2 = [];
for (var i = 0; i < marks.length; i++) {
    var temp = 0; //个人分数
    for (var j = 0; j < marks[i].length; j++) {
        var grade;
        grade = marks[i][j];
        if (marks[i][j] == -1) {
            grade = 0;
        }
        temp = temp + weight[j] / weight_sum * (grade / max_marks_1[j]);
    }
    result_1.push(temp);
}
for (var i = 0; i < marks.length; i++) {
    var temp = 0; //个人分数
    for (var j = 0; j < marks[i].length; j++) {
        var grade;
        grade = marks[i][j];
        if (marks[i][j] == -1) {
            grade = c;
        }
        temp = temp + weight[j] / weight_sum * (grade / max_marks_2[j]);
    }
    result_2.push(temp);
}
var cp_1 = JSON.parse(JSON.stringify(result_1));
var cp_2 = JSON.parse(JSON.stringify(result_2));
result_1.sort(function (a, b) {
    return b - a;
});
result_2.sort(function (a, b) {
    return b - a;
});
var k_1 = result_1[k - 1];
var k_2 = result_2[k - 1];
var flag1 = false,
    flag2 = false;
if (k_1 == result_1[k]) {
    flag1 = true;
}
if (k_2 == result_2[k]) {
    flag2 = true;
}
var result = [];
for (var i = 0; i < n; i++) {
    if (cp_1[i] >= k_1 && cp_2[i] >= k_2) {
        if ((cp_1[i] == k_1 && flag1) || (cp_2[i] == k_2 && flag2)) {
            result.push(3);
        } else {
            result.push(1);
        }

    } else if (cp_1[i] < k_1 && cp_2[i] < k_2) {
        result.push(2);
    } else {
        result.push(3);
    }
}
result.forEach(item => {
    print(item);
})
