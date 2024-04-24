/*404. Sum of Left Leaves
Solved
Easy
Topics
Companies
Given the root of a binary tree, return the sum of all left leaves.

A leaf is a node with no children. A left leaf is a leaf that is the left child of another node.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: 24
Explanation: There are two left leaves in the binary tree, with values 9 and 15 respectively.
Example 2:

Input: root = [1]
Output: 0
 

Constraints:

The number of nodes in the tree is in the range [1, 1000].
-1000 <= Node.val <= 1000
*/
const { TreeNode, ArrayToTree, TreeToArr } = require("./__tree.js");
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  let sum = 0;
  const recursion = (root, isLeft) => {
    if (root === null) {
      return;
    }
    if (root.left === null && root.right === null && isLeft) {
      sum += root.val;
    }
    recursion(root.left, true);
    recursion(root.right, false);
  };
  recursion(root, false);
  return sum;
};

const arr = [1, 2, 3, 4, 5];
const root = ArrayToTree(arr);
console.log(sumOfLeftLeaves(root));
