/*
1442. Count Triplets That Can Form Two Arrays of Equal XOR
Solved
Medium
Topics
Companies
Hint
Given an array of integers arr.

We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

Let's define a and b as follows:

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
Note that ^ denotes the bitwise-xor operation.

Return the number of triplets (i, j and k) Where a == b.

 

Example 1:

Input: arr = [2,3,1,6,7]
Output: 4
Explanation: The triplets are (0,1,2), (0,2,2), (2,3,4) and (2,4,4)
Example 2:

Input: arr = [1,1,1,1,1]
Output: 10
 

Constraints:

1 <= arr.length <= 300
1 <= arr[i] <= 108
*/

function countTriplets(arr: number[]): number {
  const n = arr.length;
  let ans = 0;
  for (let i = 0; i < n; i++) {
    let x = arr[i];
    for (let j = i + 1; j < n; j++) {
      x = x ^ arr[j];
      if (x === 0) ans += j - i;
    }
  }
  return ans;
}

console.log(countTriplets([1, 1, 1, 1, 1]));
