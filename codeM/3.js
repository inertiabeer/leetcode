function print(x) {
    console.log(x);
}

function readline() {
    return "123";
}
var arr_256 = [];
for (var i = 0; i < 16; i++) {
    var temp = readline().split(" ");
    arr_256.push(temp);
}

//arr_256 = require('./3_data');

var win_8 = [];
//进八强的概率
for (var i = 0; i < 16; i++) {
    var temp;
    if (i & 1 == 1) {
        temp = arr_256[i][i - 1];
    } else {
        temp = arr_256[i][i + 1];
    }

    win_8.push(parseFloat(temp));
}
var win_4 = [];
for (var i = 0; i < 16; i++) {
    var temp;
    var remain = i % 4;
    switch (remain) {
        case 0:
            temp = win_8[i] * (win_8[i + 2] * arr_256[i][i + 2] + win_8[i + 3] * arr_256[i][i + 3]); //可能会遇见两队
            break;
        case 1:
            temp = win_8[i] * (win_8[i + 1] * arr_256[i][i + 1] + win_8[i + 2] * arr_256[i][i + 2]);
            break;
        case 2:
            temp = win_8[i] * (win_8[i - 1] * arr_256[i][i - 1] + win_8[i - 2] * arr_256[i][i - 2])
            break;
        case 3:
            temp = win_8[i] * (win_8[i - 2] * arr_256[i][i - 2] + win_8[i - 3] * arr_256[i][i - 3])
            break;
        default:
            break;
    }

    win_4.push(parseFloat(temp));
}

var win_2 = [];
for (var i = 0; i < 16; i++) {
    var temp;
    var remain = i % 8;
    if (remain < 4) {
        var oppo = 0;
        for (var j = 0; j < 4; j++) {
            oppo += win_4[i + 4 + j - remain] * arr_256[i][i + 4 + j - remain];

        }

        temp = win_4[i] * oppo;

    } else {
        var oppo = 0;
        for (var j = 0; j < 4; j++) {
            oppo += win_4[i + j - remain] * arr_256[i][i + j - remain];
        }
        temp = win_4[i] * oppo;

    }
    win_2.push(temp);
}
console.log(win_2);

var win = [];
for (var i = 0; i < 16; i++) {
    var temp;
    if (i < 8) {
        var oppo = 0;
        for (var j = 0; j < 8; j++) {
         oppo += win_2[8 + j] * arr_256[i][8 + j];
        }
        temp = win_2[i] *oppo;
    } else {
        var oppo = 0;
        for (var j = 0; j < 8; j++) {
          oppo += win_2[j] * arr_256[i][ j];
        }
        temp = win_2[i] * oppo;
    }
    win.push(temp);
}
print(win);