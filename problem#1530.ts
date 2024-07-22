/*
1530. Number of Good Leaf Nodes Pairs
Solved
Medium
Topics
Companies
Hint
You are given the root of a binary tree and an integer distance. A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance.

Return the number of good leaf node pairs in the tree.

 

Example 1:


Input: root = [1,2,3,null,4], distance = 3
Output: 1
Explanation: The leaf nodes of the tree are 3 and 4 and the length of the shortest path between them is 3. This is the only good pair.
Example 2:


Input: root = [1,2,3,4,5,6,7], distance = 3
Output: 2
Explanation: The good pairs are [4,5] and [6,7] with shortest path = 2. The pair [4,6] is not good because the length of ther shortest path between them is 4.
Example 3:

Input: root = [7,1,4,6,null,5,3,null,null,null,null,null,2], distance = 3
Output: 1
Explanation: The only good pair is [2,5].
 

Constraints:

The number of nodes in the tree is in the range [1, 210].
1 <= Node.val <= 100
1 <= distance <= 10
*/

import { ArrayToTree, TreeNode } from './__tree';

function countPairs(root: TreeNode | null, distance: number): number {
  let ans = 0;
  const isLeaf = new Map<TreeNode, boolean>();
  const leaves: TreeNode[] = [];
  const parent = new Map<TreeNode, TreeNode | null>();
  const visited = new Map<TreeNode, boolean>();

  const build = (root: TreeNode | null, p: TreeNode | null) => {
    if (root === null) return;
    parent.set(root, p);
    if (root.left === null && root.right === null) {
      isLeaf.set(root, true);
      leaves.push(root);
    }
    build(root.left, root);
    build(root.right, root);
  };

  const backtrack = (node: TreeNode | null, d: number) => {
    if (node === null || d > distance || visited.get(node)) return;
    visited.set(node, true);
    if (isLeaf.get(node) && d <= distance && d > 0) ans++;
    const p = parent.get(node)!;
    const l = node.left;
    const r = node.right;
    if (p && !visited.get(p)) {
      backtrack(p, d + 1);
    }
    if (l && !visited.get(l)) {
      backtrack(l, d + 1);
    }
    if (r && !visited.get(r)) {
      backtrack(r, d + 1);
    }
    visited.set(node, false);
  };

  build(root, null);
  for (let leaf of leaves) {
    backtrack(leaf, 0);
    visited.set(leaf, true);
  }

  return ans;
}

console.log(countPairs(ArrayToTree([1, 2, 3, 4, 5, 6, 7]), 3));
