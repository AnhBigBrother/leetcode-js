/*
1405. Longest Happy String
Solved
Medium
Topics
Companies
Hint
A string s is called happy if it satisfies the following conditions:

s only contains the letters 'a', 'b', and 'c'.
s does not contain any of "aaa", "bbb", or "ccc" as a substring.
s contains at most a occurrences of the letter 'a'.
s contains at most b occurrences of the letter 'b'.
s contains at most c occurrences of the letter 'c'.
Given three integers a, b, and c, return the longest possible happy string. If there are multiple longest happy strings, return any of them. If there is no such string, return the empty string "".

A substring is a contiguous sequence of characters within a string.

 

Example 1:

Input: a = 1, b = 1, c = 7
Output: "ccaccbcc"
Explanation: "ccbccacc" would also be a correct answer.
Example 2:

Input: a = 7, b = 1, c = 0
Output: "aabaa"
Explanation: It is the only correct answer in this case.
 

Constraints:

0 <= a, b, c <= 100
a + b + c > 0
*/
/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
    const freq = { a: a, b: b, c: c };
    const arr = ["a", "b", "c"];
    let retStr = "";
    while (true) {
        arr.sort((a, b) => freq[b] - freq[a]);
        if (freq[arr[0]] === 0) {
            return retStr;
        }
        const strLen = retStr.length;
        if (strLen > 1 && retStr[strLen - 1] === arr[0] && retStr[strLen - 1] === retStr[strLen - 2]) {
            if (freq[arr[1]] === 0) {
                return retStr;
            } else {
                retStr += arr[1];
                freq[arr[1]]--;
            }
        } else {
            retStr += arr[0];
            freq[arr[0]]--;
        }
    }
};

const a = 2,
    b = 2,
    c = 1;
console.log(longestDiverseString(a, b, c));
