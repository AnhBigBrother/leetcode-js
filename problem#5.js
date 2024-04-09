/*
5. Longest Palindromic Substring
Solved
Medium
Topics
Companies

Given a string s, return the longest 
palindromic substring in s.
 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.

Example 2:

Input: s = "cbbd"
Output: "bb"
 

Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.
*/

/**
 * @param {palSubString} s
 * @return {palSubString}
 */
var longestPalindrome = function (s) {
    const n = s.length;
    let ans = "";
    for (let i = 0; i < n; i++) {
        let l = i;
        let r = i + 1;
        while (l >= 0 && r < n && s[l] === s[r]) {
            l--;
            r++;
        }
        if (s[l + 1] === s[r - 1]) {
            let palSubStr = s.slice(l + 1, r);
            if (palSubStr.length > ans.length) {
                ans = palSubStr;
            }
        }
    }
    for (let i = 0; i < n; i++) {
        let l = i - 1;
        let r = i + 1;
        while (l >= 0 && r < n && s[l] === s[r]) {
            l--;
            r++;
        }
        if (s[l + 1] === s[r - 1]) {
            let palSubStr = s.slice(l + 1, r);
            if (palSubStr.length > ans.length) {
                ans = palSubStr;
            }
        }
    }
    return ans;
};


const s = 'cbbabd'
console.log(longestPalindrome(s));