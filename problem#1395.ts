/*
1395. Count Number of Teams
Solved
Medium
Topics
Companies
Hint
There are n soldiers standing in a line. Each soldier is assigned a unique rating value.

You have to form a team of 3 soldiers amongst them under the following rules:

Choose 3 soldiers with index (i, j, k) with rating (rating[i], rating[j], rating[k]).
A team is valid if: (rating[i] < rating[j] < rating[k]) or (rating[i] > rating[j] > rating[k]) where (0 <= i < j < k < n).
Return the number of teams you can form given the conditions. (soldiers can be part of multiple teams).

 

Example 1:

Input: rating = [2,5,3,4,1]
Output: 3
Explanation: We can form three teams given the conditions. (2,3,4), (5,4,1), (5,3,1). 
Example 2:

Input: rating = [2,1,3]
Output: 0
Explanation: We can't form any team given the conditions.
Example 3:

Input: rating = [1,2,3,4]
Output: 4
 

Constraints:

n == rating.length
3 <= n <= 1000
1 <= rating[i] <= 105
All the integers in rating are unique.
*/

function numTeams(rating: number[]): number {
  let n = rating.length;
  let ans = 0;

  const countGreatter: number[] = new Array(n).fill(0);
  const countSmaller: number[] = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (rating[j] > rating[i]) {
        countGreatter[i]++;
      } else if (rating[j] < rating[i]) {
        countSmaller[i]++;
      }
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (rating[i] > rating[j]) {
        ans += countSmaller[j];
      } else if (rating[i] < rating[j]) {
        ans += countGreatter[j];
      }
    }
  }

  return ans;
}

console.log(numTeams([2, 5, 3, 4, 1]));
