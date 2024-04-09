/*
205. Isomorphic Strings
Solved
Easy
Topics
Companies
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
 

Constraints:

1 <= s.length <= 5 * 104
t.length == s.length
s and t consist of any valid ascii character.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  if (s.length !== t.length) return false;
  const n = s.length;
  const mapS_T = {};
  const mapT_S = {};
  for (let i = 0; i < n; i++) {
    if (mapS_T[s[i]] === undefined) {
      mapS_T[s[i]] = t[i];
    }
    if (mapT_S[t[i]] === undefined) {
      mapT_S[t[i]] = s[i];
    }
    if (mapS_T[s[i]] !== t[i] || mapT_S[t[i]] !== s[i]) {
      return false;
    }
  }
  return true;
};

const s = "badc",
  t = "baba";
console.log(isIsomorphic(s, t));
