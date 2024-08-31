/*
564. Find the Closest Palindrome
Solved
Hard
Topics
Companies
Hint
Given a string n representing an integer, return the closest integer (not including itself), which is a palindrome. If there is a tie, return the smaller one.

The closest is defined as the absolute difference minimized between two integers.

 

Example 1:

Input: n = "123"
Output: "121"
Example 2:

Input: n = "1"
Output: "0"
Explanation: 0 and 2 are the closest palindromes but we return the smallest which is 0.
 

Constraints:

1 <= n.length <= 18
n consists of only digits.
n does not have leading zeros.
n is representing an integer in the range [1, 1018 - 1].
*/

export {}

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

function nearestPalindromic(n: string): string {
	if (Number(n) < 10) {
		return String(Number(n) - 1);
	}
	const getEdges = (a: string, b: string) => {
		let arr = [a];
		while (a.length < 19) {
			a += b;
			arr.push(a);
		}
		return arr;
	};
	const nine: string[] = getEdges("9", "9");
	const oneZero: string[] = getEdges("10", "0");
	const oneOne: string[] = ["11"];
	for (let s of oneZero) oneOne.push(s + "1");
	const map = new Map<string, string>();
	for (let i = 0; i < 19; i++) {
		map.set(nine[i], oneOne[i]);
		map.set(oneOne[i], nine[i]);
		map.set(oneZero[i], nine[i]);
	}
	if (map.get(n) !== undefined) {
		return map.get(n)!;
	}

	let i = 0,
		j = n.length - 1;
	let left = "";
	let right = "";
	while (i <= j) {
		left += n.charAt(i);
		right += n.charAt(j);
		i++;
		j--;
	}
	i--;
	let sm = sub2StringNumber(left, "1");
	let bi = add2StringNumber(left, "1");
	if (n.length % 2 === 1) {
		for (let i = sm.length - 2; i >= 0; i--) {
			sm += sm.charAt(i);
		}
		for (let i = bi.length - 2; i >= 0; i--) {
			bi += bi.charAt(i);
		}
		for (let i = left.length - 2; i >= 0; i--) {
			left += left.charAt(i);
		}
	} else {
		for (let i = sm.length - 1; i >= 0; i--) {
			sm += sm.charAt(i);
		}
		for (let i = bi.length - 1; i >= 0; i--) {
			bi += bi.charAt(i);
		}
		for (let i = left.length - 1; i >= 0; i--) {
			left += left.charAt(i);
		}
	}
	let x;
	if (compare2StringNumber(sub2StringNumber(sm, n), sub2StringNumber(bi, n)) === "BIGGER")
		x = bi;
	else x = sm;
	if (left !== n) {
		const s1 = sub2StringNumber(n, left);
		const s2 = sub2StringNumber(n, x);
		const ss = compare2StringNumber(s1, s2);
		if (ss === "SMALLER") return left;
		if (ss === "BIGGER") return x;
		if (compare2StringNumber(left, x) === "SMALLER") return left;
	}
	return x;
}