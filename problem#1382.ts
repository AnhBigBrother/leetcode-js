/*
1382. Balance a Binary Search Tree
Solved
Medium
Topics
Companies
Hint
Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.

A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.

 

Example 1:


Input: root = [1,null,2,null,3,null,4,null,null]
Output: [2,1,3,null,null,null,4]
Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
Example 2:


Input: root = [2,1,3]
Output: [2,1,3]
 

Constraints:

The number of nodes in the tree is in the range [1, 104].
1 <= Node.val <= 105
*/

import { ArrayToTree, TreeNode, TreeToArr } from './__tree';

function balanceBST(root: TreeNode | null): TreeNode | null {
  const nodes: TreeNode[] = [];
  const tree2Arr = (root: TreeNode | null) => {
    if (root === null) return;
    tree2Arr(root.left);
    nodes.push(root);
    tree2Arr(root.right);
  };
  const arr2BalanceBST = (l: number, r: number) => {
    if (l > r) return null;
    const m = Math.floor(l / 2 + r / 2);
    const node = nodes[m];
    node.left = arr2BalanceBST(l, m - 1);
    node.right = arr2BalanceBST(m + 1, r);
    return node;
  };

  tree2Arr(root);
  return arr2BalanceBST(0, nodes.length - 1);
}

console.log(TreeToArr(balanceBST(ArrayToTree([1, null, 2, null, 3, null, 4, null, null]))));