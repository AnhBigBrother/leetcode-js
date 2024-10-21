/*
1367. Linked List in Binary Tree
Solved
Medium
Topics
Companies
Hint
Given a binary tree root and a linked list with head as the first node. 

Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.

In this context downward path means a path that starts at some node and goes downwards.

 

Example 1:



Input: head = [4,2,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Explanation: Nodes in blue form a subpath in the binary Tree.  
Example 2:



Input: head = [1,4,2,6], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: true
Example 3:

Input: head = [1,4,2,6,8], root = [1,4,4,null,2,2,null,1,null,6,8,null,null,null,null,1,3]
Output: false
Explanation: There is no path in the binary tree that contains all the elements of the linked list from head.
 

Constraints:

The number of nodes in the tree will be in the range [1, 2500].
The number of nodes in the list will be in the range [1, 100].
1 <= Node.val <= 100 for each node in the linked list and binary tree.
*/

import ListNode, { ArrayToList } from "./__LinkedList";
import { ArrayToTree, TreeNode } from "./__tree";

function isSubPath(head: ListNode, root: TreeNode): boolean {
	let flag = false;

	const list: number[] = [];
	let p = new ListNode();
	p.next = head;
	while (p.next !== null) {
		list.push(p.next.val);
		p = p.next;
	}

	const check = (list: number[], tree: number[]): boolean => {
		if (list.length > tree.length) return false;
		let l = list.length - 1;
		let t = tree.length - 1;
		while (l >= 0) {
			if (list[l] !== tree[t]) return false;
			l--;
			t--;
		}
		return true;
	};

	const dfs = (node: TreeNode, tree: number[]) => {
		if (flag) return;
		tree.push(node.val);
		if (check(list, tree)) {
			flag = true;
			return;
		}
		if (node.left !== null) {
			dfs(node.left, tree);
			tree.pop();
		}
		if (node.right !== null) {
			dfs(node.right, tree);
			tree.pop();
		}
	};

	dfs(root, []);

	return flag;
}

console.log(
	isSubPath(
		ArrayToList([4, 2, 8])!,
		ArrayToTree([1, 4, 4, null, 2, 2, null, 1, null, 6, 8, null, null, null, null, 1, 3])!
	)
);
