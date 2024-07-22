/*
1717. Maximum Score From Removing Substrings
Solved
Medium
Topics
Companies
Hint
You are given a string s and two integers x and y. You can perform two types of operations any number of times.

Remove substring "ab" and gain x points.
For example, when removing "ab" from "cabxbae" it becomes "cxbae".
Remove substring "ba" and gain y points.
For example, when removing "ba" from "cabxbae" it becomes "cabxe".
Return the maximum points you can gain after applying the above operations on s.

 

Example 1:

Input: s = "cdbcbbaaabab", x = 4, y = 5
Output: 19
Explanation:
- Remove the "ba" underlined in "cdbcbbaaabab". Now, s = "cdbcbbaaab" and 5 points are added to the score.
- Remove the "ab" underlined in "cdbcbbaaab". Now, s = "cdbcbbaa" and 4 points are added to the score.
- Remove the "ba" underlined in "cdbcbbaa". Now, s = "cdbcba" and 5 points are added to the score.
- Remove the "ba" underlined in "cdbcba". Now, s = "cdbc" and 5 points are added to the score.
Total score = 5 + 4 + 5 + 5 = 19.
Example 2:

Input: s = "aabbaaxybbaabb", x = 5, y = 4
Output: 20
 

Constraints:

1 <= s.length <= 105
1 <= x, y <= 104
s consists of lowercase English letters.
*/

function maximumGain(str: string, x: number, y: number): number {
  let s = str.split('');
  let stack: string[] = [];
  const solve = (a: string, b: string, points: number) => {
    let res = 0;
    for (let c of s) {
      if (stack.length === 0 || !(stack[stack.length - 1] === a && c === b)) {
        stack.push(c);
      } else {
        stack.pop();
        res += points;
      }
    }
    return res;
  };
  let ans = 0;
  if (x > y) {
    ans += solve('a', 'b', x);
    s = stack;
    stack = [];
    ans += solve('b', 'a', y);
  } else {
    ans += solve('b', 'a', y);
    s = stack;
    stack = [];
    ans += solve('a', 'b', x);
  }

  return ans;
}

console.log(maximumGain('aabbaaxybbaabb', 5, 4));
