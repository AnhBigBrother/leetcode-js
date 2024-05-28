/*
131. Palindrome Partitioning
Solved
Medium
Topics
Companies
Given a string s, partition s such that every 
substring
 of the partition is a 
palindrome
. Return all possible palindrome partitioning of s.

 

Example 1:

Input: s = "aab"
Output: [["a","a","b"],["aa","b"]]
Example 2:

Input: s = "a"
Output: [["a"]]
 

Constraints:

1 <= s.length <= 16
s contains only lowercase English letters.
*/

function partition(s: string): string[][] {
  const visited: { [key: string]: boolean } = {};
  const firstArr = s.split('');
  visited[firstArr.join(',')] = true;
  const ans = [firstArr];
  const solve = () => {
    for (let i = 0; i < ans.length; i++) {
      for (let j = 0; j < ans[i].length; j++) {
        let l = j,
          r = j + 1;
        while (l >= 0 && r < ans[i].length && ans[i][l] === ans[i][r]) {
          l--;
          r++;
          const str = ans[i].slice(l + 1, r).join('');
          const newArr = [...ans[i].slice(0, l + 1), str, ...ans[i].slice(r)];
          const key = newArr.join(',');
          if (!visited[key]) {
            ans.push(newArr);
            visited[key] = true;
          }
        }
      }
      for (let j = 0; j < ans[i].length; j++) {
        let l = j - 1,
          r = j + 1;
        while (l >= 0 && r < ans[i].length && ans[i][l] === ans[i][r]) {
          l--;
          r++;
          const str = ans[i].slice(l + 1, r).join('');
          const newArr = [...ans[i].slice(0, l + 1), str, ...ans[i].slice(r)];
          const key = newArr.join(',');
          if (!visited[key]) {
            ans.push(newArr);
            visited[key] = true;
          }
        }
      }
    }
  };

  solve();

  return ans;
}

console.log(partition('abbab'));
