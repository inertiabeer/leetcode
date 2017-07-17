var romanToInt = function(s) {
	var charArray = s.split("");
	console.log(charArray);
	for (var i = 0; i < charArray.length; i++) {
		switch(charArray[i]) {
			case "I":
				charArray[i] = 1;
				break;
			case "X":
				charArray[i] = 10;
				break;
			case "C":
				charArray[i] = 100;
				break;
			case "M":
				charArray[i] = 1000;
				break;
			case "V":
				charArray[i] = 5;
				break;
			case "L":
				charArray[i] = 50;
				break;
			case "D":
				charArray[i] = 500;
				break;
		}



	}
	var result = 0;
	for (let j = 0; j < charArray.length - 1; j++) {
		if (charArray[j] < charArray[j + 1]) {
			result = result - charArray[j];
		} else {
			result = result + charArray[j];

		}


	}
	return (result+charArray[charArray.length-1]);
};
console.log(romanToInt("MCICVMVLD"));
// 罗马数字是阿拉伯数字传入之前使用的一种数码。罗马数字采用七个罗马字母作数字、
//即Ⅰ（1）、X（10）、C（100）、M（1000）、V（5）、L（50）、D（500）。记数的方法：
// 相同的数字连写，所表示的数等于这些数字相加得到的数，如 Ⅲ=3；
// 小的数字在大的数字的右边，所表示的数等于这些数字相加得到的数，如 Ⅷ=8、Ⅻ=12；
// 小的数字（限于 Ⅰ、X 和 C）在大的数字的左边，所表示的数等于大数减小数得到的数，如 Ⅳ=4、Ⅸ=9；
// 在一个数的上面画一条横线，表示这个数增值 1,000 倍