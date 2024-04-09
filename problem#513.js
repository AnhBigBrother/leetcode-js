/*
513. Find Bottom Left Tree Value
Solved
Medium
Topics
Companies
Given the root of a binary tree, return the leftmost value in the last row of the tree.

Input: root = [1,2,3,4,null,5,6,null,null,7]
Output: 7

Constraints:

The number of nodes in the tree is in the range [1, 104].
-231 <= Node.val <= 231 - 1
*/

/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const goDown = (root, treeArr, n) => {
    if (!root) return;
    if (!treeArr[n]){treeArr.push([])}
    treeArr[n].push(root.val);
    goDown(root.left, treeArr, n+1)
    goDown(root.right, treeArr, n+1)
}
var findBottomLeftValue = function (root) {
    const treeArr = [];
    goDown(root, treeArr, 0);
    return treeArr[treeArr.length-1][0];
};