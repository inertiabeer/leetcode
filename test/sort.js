function sort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    console.log(arr);

}

function sort(arr) {
    for (var i = arr.length - 1; i >= 0; i--) {
        for (var j = 0; j <= i - 1; j++) {
            if (arr[j + 1] > arr[j]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
            }
        }
    }
    console.log(arr);
}

function quicksort(arr, i, j) {
    if (i > j) {
        return;
    }
    let left = i,
        right = j;
    let temp = arr[left];
    while (i != j) {
        //从右到左
        while (arr[j] >= temp && i < j) {
            j--;
        }
        while (arr[i] <= temp && i < j) {
            i++;
        }
        if (i < j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    arr[left] = arr[i];
    arr[i] = temp;
    quicksort(arr, left, i - 1);
    quicksort(arr, i + 1, right);
}
var arr = [8, 32, 52, 4, 7, 9];
quicksort(arr, 0, 5);
console.log(arr);