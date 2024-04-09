// Longest Repeating Character Replacement
// You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.

 
// Example 1:

// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.
// Example 2:

// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */


// sliding window

const characterReplacement = function(s, k) {
    let left = 0, right = 0, mostFrequence = 0, ans = 0;
    const frequence = {};
    for (right=0; right<s.length; right++){
        if (frequence[s[right]] === undefined){
            frequence[s[right]] = 0;
        }
        frequence[s[right]] ++;
        if (mostFrequence < frequence[s[right]]){
            mostFrequence = frequence[s[right]]
        }
        if (right - left + 1 - mostFrequence > k){
            // if (mostFrequence === frequence[s[left]]){
            //     mostFrequence--;
            // } 
            // ---> It is not necessary to update the mostFrequence, because it is the most frequence character in the longest string. 
            // If the next windown does not have the mostFrequence bigger than, it not the answear
            frequence[s[left]] --;
            left++;
        }
        else{
            if (ans < right - left + 1){
                ans = right -left + 1;
            }
        }
    }
    return ans;
};

console.log(characterReplacement("AABABB", 2))