/*
552. Student Attendance Record II
Solved
Hard
Topics
Companies
An attendance record for a student can be represented as a string where each character signifies whether the student was absent, late, or present on that day. The record only contains the following three characters:

'A': Absent.
'L': Late.
'P': Present.
Any student is eligible for an attendance award if they meet both of the following criteria:

The student was absent ('A') for strictly fewer than 2 days total.
The student was never late ('L') for 3 or more consecutive days.
Given an integer n, return the number of possible attendance records of length n that make a student eligible for an attendance award. The answer may be very large, so return it modulo 109 + 7.

 

Example 1:

Input: n = 2
Output: 8
Explanation: There are 8 records with length 2 that are eligible for an award:
"PP", "AP", "PA", "LP", "PL", "AL", "LA", "LL"
Only "AA" is not eligible because there are 2 absences (there need to be fewer than 2).
Example 2:

Input: n = 1
Output: 3
Example 3:

Input: n = 10101
Output: 183236316
 

Constraints:

1 <= n <= 105
*/

function checkRecord(n: number): number {
  const MOD = 1000000000 + 7;
  const memo: number[][][] = new Array(n).fill(0).map(() => new Array(2).fill(0).map(() => new Array(3).fill(-1)));

  const solve = (idx: number, countA: number, countL: number): number => {
    if (idx >= n) return 1;
    if (memo[idx][countA][countL] !== -1) return memo[idx][countA][countL];

    let x = solve(idx + 1, countA, 0);

    if (countA < 1) {
      x += solve(idx + 1, countA + 1, 0);
    }
    if (countL < 2) {
      x += solve(idx + 1, countA, countL + 1);
    }

    x %= MOD;
    memo[idx][countA][countL] = x;

    return x;
  };

  return solve(0, 0, 0);
}

console.log(checkRecord(10101));
