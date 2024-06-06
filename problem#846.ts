/*
846. Hand of Straights
Solved
Medium
Topics
Companies
Alice has some number of cards and she wants to rearrange the cards into groups so that each group is of size groupSize, and consists of groupSize consecutive cards.

Given an integer array hand where hand[i] is the value written on the ith card and an integer groupSize, return true if she can rearrange the cards, or false otherwise.

 

Example 1:

Input: hand = [1,2,3,6,2,3,4,7,8], groupSize = 3
Output: true
Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]
Example 2:

Input: hand = [1,2,3,4,5], groupSize = 4
Output: false
Explanation: Alice's hand can not be rearranged into groups of 4.

 

Constraints:

1 <= hand.length <= 104
0 <= hand[i] <= 109
1 <= groupSize <= hand.length
 

Note: This question is the same as 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/
*/

function isNStraightHand(hand: number[], groupSize: number): boolean {
  if (hand.length % groupSize !== 0) return false;
  if (groupSize === 1) return true;
  hand.sort((a, b) => a - b);
  const count: { [key: string]: number } = {};

  for (let x of hand) {
    if (!count[x]) count[x] = 0;
    count[x]++;
  }
  const keys = Object.keys(count);
  console.log(keys);

  for (let i = 0; i < keys.length; i++) {
    if (count[keys[i]] < 0) return false;
    while (count[keys[i]] > 0) {
      for (let j = Number(keys[i]); j < Number(keys[i]) + groupSize; j++) {
        if (!count[j]) return false;
        count[j]--;
      }
    }
  }

  return true;
}

console.log(isNStraightHand([1, 1, 2, 2, 3, 3], 3));
