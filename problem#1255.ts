/*
1255. Maximum Score Words Formed by Letters
Solved
Hard
Topics
Companies
Hint
Given a list of words, list of  single letters (might be repeating) and score of every character.

Return the maximum score of any valid set of words formed by using the given letters (words[i] cannot be used two or more times).

It is not necessary to use all characters in letters and each letter can only be used once. Score of letters 'a', 'b', 'c', ... ,'z' is given by score[0], score[1], ... , score[25] respectively.

 

Example 1:

Input: words = ["dog","cat","dad","good"], letters = ["a","a","c","d","d","d","g","o","o"], score = [1,0,9,5,0,0,3,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0]
Output: 23
Explanation:
Score  a=1, c=9, d=5, g=3, o=2
Given letters, we can form the words "dad" (5+1+5) and "good" (3+2+2+5) with a score of 23.
Words "dad" and "dog" only get a score of 21.
Example 2:

Input: words = ["xxxz","ax","bx","cx"], letters = ["z","a","b","c","x","x","x"], score = [4,4,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,10]
Output: 27
Explanation:
Score  a=4, b=4, c=4, x=5, z=10
Given letters, we can form the words "ax" (4+5), "bx" (4+5) and "cx" (4+5) with a score of 27.
Word "xxxz" only get a score of 25.
Example 3:

Input: words = ["leetcode"], letters = ["l","e","t","c","o","d"], score = [0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0]
Output: 0
Explanation:
Letter "e" can only be used once.
 

Constraints:

1 <= words.length <= 14
1 <= words[i].length <= 15
1 <= letters.length <= 100
letters[i].length == 1
score.length == 26
0 <= score[i] <= 10
words[i], letters[i] contains only lower case English letters.
*/

class WordArr {
  private letterCount: number[];
  private score: number[];
  private totalScore: number;
  private arr: string[];
  constructor(letterCount: number[], score: number[]) {
    this.arr = [];
    this.totalScore = 0;
    this.score = score;
    this.letterCount = letterCount;
  }
  push = (word: string) => {
    let flag = true;
    let i = 0;
    while (i < word.length) {
      const x = word.charCodeAt(i) - 97;
      this.letterCount[x]--;
      this.totalScore += this.score[x];

      if (this.letterCount[x] < 0) {
        flag = false;
        break;
      }
      i++;
    }
    if (!flag) {
      while (i >= 0) {
        const x = word.charCodeAt(i) - 97;
        this.letterCount[x]++;
        this.totalScore -= this.score[x];
        i--;
      }
      return flag;
    }
    this.arr.push(word);

    return flag;
  };
  pop = () => {
    const word = this.arr[this.arr.length - 1];
    this.arr.pop();
    for (let i = 0; i < word.length; i++) {
      const x = word.charCodeAt(i) - 97;
      this.letterCount[x]++;
      this.totalScore -= this.score[x];
    }
  };
  getScore = () => {
    return this.totalScore;
  };
}

function maxScoreWords(words: string[], letters: string[], score: number[]): number {
  const n = words.length;
  let ans = 0;
  const letterCount: number[] = new Array(26).fill(0);
  for (let x of letters) {
    letterCount[x.charCodeAt(0) - 97]++;
  }

  const arr = new WordArr(letterCount, score);

  const solve = (idx: number) => {
    if (idx >= n) return;
    for (let i = idx; i < n; i++) {
      const x = arr.push(words[i]);
      if (x) {
        ans = Math.max(ans, arr.getScore());
        solve(i + 1);
        arr.pop();
      }
    }
  };
  solve(0);

  return ans;
}

console.log(maxScoreWords(['xxxz', 'ax', 'bx', 'cx'], ['z', 'a', 'b', 'c', 'x', 'x', 'x'], [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10]));
