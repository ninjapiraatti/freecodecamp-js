/*
Convert the given number into a roman numeral.

*/

function repeatCharacterAndPrefix(num, divider, chr, halfChr, higherChr) {
	let res = ""
	if (num <= 0) {
		return
	}
	if (num >= 1000) {
		return res.concat(chr.repeat(num / divider))
	}
	if (Math.floor(num / divider) == 5) {
		return res.concat(halfChr)
	} else if (Math.floor(num / divider) == 4) {
		return res.concat(chr + halfChr)
	} else if (Math.floor(num / divider) == 9) {
		return res.concat(chr + higherChr)
	} else if (num / divider > 5){
		return res.concat(halfChr + chr.repeat((num / divider) - 5))
	} else {
		return res.concat(chr.repeat(num / divider))
	}
}

function convertToRoman(num) {
	let res = ""
	res = res + repeatCharacterAndPrefix(num, 1000, "M", "C",)
	res = res + repeatCharacterAndPrefix(num % 1000, 100, "C", "D", "M")
	res = res + repeatCharacterAndPrefix(num % 1000 % 100, 10, "X", "L", "C")
	res = res + repeatCharacterAndPrefix(num % 1000 % 100 % 10, 1, "I", "V", "X")
	return res
}

//console.log(convertToRoman(3924))
console.log(convertToRoman(400))
console.log(convertToRoman(500))
console.log(convertToRoman(1000))
//console.log(convertToRoman(16))
//console.log(convertToRoman(2014))
//console.log(convertToRoman(1023))

/*

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

*/