/*
767. Reorganize String
Solved
Medium
Topics
Companies
Hint
Given a string s, rearrange the characters of s so that any two adjacent characters are not the same.

Return any possible rearrangement of s or return "" if not possible.

 

Example 1:

Input: s = "aab"
Output: "aba"
Example 2:

Input: s = "aaab"
Output: ""
 

Constraints:

1 <= s.length <= 500
s consists of lowercase English letters.
*/

/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
    const n = s.length;
    const freq = {};
    const charArr = [];
    for (let x of s) {
        if (!freq[x]) {
            freq[x] = 0;
            charArr.push(x);
        }
        freq[x]++;
    }
    charArr.sort((a, b) => freq[b] - freq[a]);
    // console.log("freq", freq);
    // console.log("charArr", charArr);
    let retStr = "";
    while (retStr.length < n) {
        charArr.sort((a, b) => freq[b] - freq[a]);
        let count = 0;
        for (let x of charArr) {
            if (freq[x] !== 0) {
                retStr += x;
                freq[x]--;
                count++;
            }
            if (count >= 2) {
                break;
            }
        }
    }
    console.log(retStr);
    for (let i = 1; i < n; i++) {
        if (retStr[i] === retStr[i - 1]) {
            return "";
        }
    }
    return retStr;
};
console.log(reorganizeString("vvvlo"));