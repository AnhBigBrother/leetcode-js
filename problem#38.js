/*
38. Count and Say
Solved
Medium
Topics
Companies
Hint
The count-and-say sequence is a sequence of digit strings defined by the recursive formula:
countAndSay(1) = "1"
countAndSay(n) is the way you would "say" the digit string from countAndSay(n-1), which is then converted into a different digit string.
To determine how you "say" a digit string, split it into the minimal number of substrings such that each substring contains exactly one unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

Given a positive integer n, return the nth term of the count-and-say sequence.

Example 1:
Input: n = 1
Output: "1"
Explanation: This is the base case.

Example 2:
Input: n = 4
Output: "1211"
Explanation:
countAndSay(1) = "1"
countAndSay(2) = say "1" = one 1 = "11"
countAndSay(3) = say "11" = two 1's = "21"
countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"
 
Constraints:
1 <= n <= 30
*/

/**
 * @param {number} n
 * @return {string}
 */
const createNewFreq = (str) => {
    const n = str.length;
    const ret = [];
    let count = 1;
    for (let i=1; i<n; i++){
        if (str[i-1] === str[i]){
            count++;
        }
        else{
            ret.push([count, str[i-1]]);
            count = 1;
        }
    }
    ret.push([count, str[n-1]]);
    return ret;
}
const createNewStr = (freq) => {
    let str = '';
    for (let x of (freq)){
        str += (x[0] + x[1]);
    }
    return str;
}
var countAndSay = function(n) {
    let str = '1';
    let freq = [];
    while( n > 1){
        freq = createNewFreq(str);
        str = createNewStr(freq);
        n--;
    }
    return str;
};

console.log(countAndSay(4));