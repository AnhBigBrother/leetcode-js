/*
1110. Delete Nodes And Return Forest
Solved
Medium
Topics
Companies
Given the root of a binary tree, each node in the tree has a distinct value.

After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).

Return the roots of the trees in the remaining forest. You may return the result in any order.

 

Example 1:


Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]
Output: [[1,2,null,4],[6],[7]]
Example 2:

Input: root = [1,2,4,null,3], to_delete = [3]
Output: [[1,2,4]]
 

Constraints:

The number of nodes in the given tree is at most 1000.
Each node has a distinct value between 1 and 1000.
to_delete.length <= 1000
to_delete contains distinct values between 1 and 1000.
*/

function delNodes(root: TreeNode | null, to_delete: number[]): Array<TreeNode | null> {
  const ans: Array<TreeNode | null> = [];

  const deleteMap = new Map<number, boolean>();
  for (let x of to_delete) deleteMap.set(x, true);

  const solve = (root: TreeNode | null, isRoot: boolean) => {
    if (root === null) return;
    if (deleteMap.get(root.val)) {
      solve(root.left, true);
      solve(root.right, true);
    } else {
      if (isRoot) ans.push(root);
      const l = root.left;
      const r = root.right;
      if (l !== null && deleteMap.get(l.val)) {
        root.left = null;
      }
      if (r !== null && deleteMap.get(r.val)) {
        root.right = null;
      }
      solve(l, false);
      solve(r, false);
    }
  };

  solve(root, true);

  return ans;
}
