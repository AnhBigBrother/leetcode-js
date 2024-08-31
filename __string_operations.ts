function add2StringNumber(str1: string, str2: string) {
	if (str1.length > str2.length) {
		let t = str1;
		str1 = str2;
		str2 = t;
	}
	let str = "";
	let n1 = str1.length,
		n2 = str2.length;

	str1 = str1.split("").reverse().join("");
	str2 = str2.split("").reverse().join("");

	let carry = 0;
	for (let i = 0; i < n1; i++) {
		let sum =
			str1[i].charCodeAt(0) -
			"0".charCodeAt(0) +
			(str2[i].charCodeAt(0) - "0".charCodeAt(0)) +
			carry;
		str += String.fromCharCode((sum % 10) + "0".charCodeAt(0));
		carry = Math.floor(sum / 10);
	}
	for (let i = n1; i < n2; i++) {
		let sum = str2[i].charCodeAt(0) - "0".charCodeAt(0) + carry;
		str += String.fromCharCode((sum % 10) + "0".charCodeAt(0));
		carry = Math.floor(sum / 10);
	}
	if (carry > 0) str += String.fromCharCode(carry + "0".charCodeAt(0));
	str = str.split("").reverse().join("");

	return str;
}

function sub2StringNumber(str1: string, str2: string) {
	function isSmaller(str1: string, str2: string) {
		let n1 = str1.length,
			n2 = str2.length;
		if (n1 < n2) return true;
		if (n2 < n1) return false;

		for (let i = 0; i < n1; i++)
			if (str1[i] < str2[i]) return true;
			else if (str1[i] > str2[i]) return false;

		return false;
	}
	if (isSmaller(str1, str2)) {
		let t = str1;
		str1 = str2;
		str2 = t;
	}

	let str = "";

	let n1 = str1.length,
		n2 = str2.length;

	str1 = str1.split("").reverse().join("");
	str2 = str2.split("").reverse().join("");

	let carry = 0;

	for (let i = 0; i < n2; i++) {
		let sub =
			str1[i].charCodeAt(0) -
			"0".charCodeAt(0) -
			(str2[i].charCodeAt(0) - "0".charCodeAt(0)) -
			carry;

		if (sub < 0) {
			sub = sub + 10;
			carry = 1;
		} else carry = 0;

		str += String.fromCharCode(sub + "0".charCodeAt(0));
	}

	for (let i = n2; i < n1; i++) {
		let sub = str1[i].charCodeAt(0) - "0".charCodeAt(0) - carry;

		if (sub < 0) {
			sub = sub + 10;
			carry = 1;
		} else carry = 0;

		str += String.fromCharCode(sub + "0".charCodeAt(0));
	}

	return str.split("").reverse().join("");
}
function compare2StringNumber(str1: string, str2: string): "BIGGER" | "SMALLER" | "EQUAL" {
	if (str1.length > str2.length) return "BIGGER";
	if (str1.length < str2.length) return "SMALLER";

	for (let i = 0; i < str1.length; i++) {
		if (Number(str1.charAt(i)) > Number(str2.charAt(i))) return "BIGGER";
		if (Number(str1.charAt(i)) < Number(str2.charAt(i))) return "SMALLER";
	}
	return "EQUAL";
}

export { add2StringNumber, sub2StringNumber, compare2StringNumber };
