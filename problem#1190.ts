/*
1190. Reverse Substrings Between Each Pair of Parentheses
Solved
Medium
Topics
Companies
Hint
You are given a string s that consists of lower case English letters and brackets.

Reverse the strings in each pair of matching parentheses, starting from the innermost one.

Your result should not contain any brackets.

 

Example 1:

Input: s = "(abcd)"
Output: "dcba"
Example 2:

Input: s = "(u(love)i)"
Output: "iloveu"
Explanation: The substring "love" is reversed first, then the whole string is reversed.
Example 3:

Input: s = "(ed(et(oc))el)"
Output: "leetcode"
Explanation: First, we reverse the substring "oc", then "etco", and finally, the whole string.
 

Constraints:

1 <= s.length <= 2000
s only contains lower case English characters and parentheses.
It is guaranteed that all parentheses are balanced.
*/

function reverseParentheses(s: string): string {
  const n = s.length;
  const arr = s.split('');
  const chunks: number[][] = [];
  let ans = '';

  const stack: number[] = [];
  const reverse = (i: number, j: number) => {
    while (i < j) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  };

  for (let i = 0; i < n; i++) {
    if (arr[i] === '(') {
      stack.push(i);
    } else if (arr[i] === ')') {
      chunks.push([stack[stack.length - 1], i]);
      stack.pop();
    }
  }

  for (let i = 0; i < chunks.length; i++) {
    reverse(chunks[i][0], chunks[i][1]);
  }
  for (let c of arr) {
    if (c !== '(' && c !== ')') {
      ans += c;
    }
  }

  return ans;
}

console.log(reverseParentheses('ta()usw((((a))))'));
