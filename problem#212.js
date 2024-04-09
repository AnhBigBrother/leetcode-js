/*
212. Word Search II
Solved
Hard
Topics
Companies
Hint
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

 

Example 1:


Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]
Example 2:


Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []
 

Constraints:

m == board.length
n == board[i].length
1 <= m, n <= 12
board[i][j] is a lowercase English letter.
1 <= words.length <= 3 * 104
1 <= words[i].length <= 10
words[i] consists of lowercase English letters.
All the strings of words are unique.
*/
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const ans = [];
  const markExistWords = {};
  for (let x of words) {
    markExistWords[x] = true;
  }
  const visited = [];
  for (let i = 0; i < board.length; i++) {
    visited.push(new Array(board[0].length).fill(false));
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      visited[i][j] = true;
      find(board, i, j, "", visited, markExistWords, ans);
      visited[i][j] = false;
    }
  }
  return ans;
};

const find = (board, i, j, word, visited, markExistWords, ans) => {
  let newWord = (word += board[i][j]);
  if (markExistWords[newWord] === true) {
    ans.push(newWord);
    markExistWords[newWord] = false;
  }
  if (newWord.length >= 10) {
    return;
  }
  if (i - 1 >= 0 && !visited[i - 1][j]) {
    visited[i - 1][j] = true;
    find(board, i - 1, j, newWord, visited, markExistWords, ans);
    visited[i - 1][j] = false;
  }
  if (i + 1 < board.length && !visited[i + 1][j]) {
    visited[i + 1][j] = true;
    find(board, i + 1, j, newWord, visited, markExistWords, ans);
    visited[i + 1][j] = false;
  }
  if (j - 1 >= 0 && !visited[i][j - 1]) {
    visited[i][j - 1] = true;
    find(board, i, j - 1, newWord, visited, markExistWords, ans);
    visited[i][j - 1] = false;
  }
  if (j + 1 < board[0].length && !visited[i][j + 1]) {
    visited[i][j + 1] = true;
    find(board, i, j + 1, newWord, visited, markExistWords, ans);
    visited[i][j + 1] = false;
  }
};

const board = [
    ["o", "a", "b", "n"],
    ["o", "t", "a", "e"],
    ["a", "h", "k", "r"],
    ["a", "f", "l", "v"],
  ],
  words = ["oa", "oaa"];
console.log(findWords(board, words));
