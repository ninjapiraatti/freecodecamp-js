/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as
it has the format of a valid US number. The following are examples of
valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555

For this challenge you will be presented with a string such as 800-692-7753 or
8oo-six427676;laskdjf. Your job is to validate or reject the US phone number
based on any combination of the formats provided above. The area code is required.
If the country code is provided, you must confirm that the country code is 1.
Return true if the string is a valid US phone number; otherwise return false.

*/

function trimCountryCode(str) {
	if (str.slice(0, 2) == "1 ") {
		return str.slice(2)
	} else if (str.slice(0, 2) == "1(") {
		return str.slice(1)
	}
	return str
}

function trimAreaParentheses(str) {
	if (str[0] == "(" && str[4] == ")") {
		str = str.slice(0, 0) + str.slice(1);
		str = str.slice(0, 3) + str.slice(4);
		return str
	}
	return str
}

function characterCheck(str) {
	let format = /[^0-9- ]/
	if (format.test(str)) {
		return false
	}
	return true
}

function telephoneCheck(str) {
	str = trimCountryCode(str)
	str = trimAreaParentheses(str)
	if (characterCheck(str) == false) {
		return false
	}
	if (str.match(/[0-9]/g).length != 10) {
		return false
	}
	if (str.split(/[- ]/).length > 3) {
		return false
	}
	// check non-numerical
	//
	return true
}

console.log(telephoneCheck("1 (555) 555-5555"))
console.log(telephoneCheck("1 (555) 555-5555"))

/*


*/