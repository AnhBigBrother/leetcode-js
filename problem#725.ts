/*
725. Split Linked List in Parts
Solved
Medium
Topics
Companies
Hint
Given the head of a singly linked list and an integer k, split the linked list into k consecutive linked list parts.

The length of each part should be as equal as possible: no two parts should have a size differing by more than one. This may lead to some parts being null.

The parts should be in the order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal to parts occurring later.

Return an array of the k parts.

 

Example 1:


Input: head = [1,2,3], k = 5
Output: [[1],[2],[3],[],[]]
Explanation:
The first element output[0] has output[0].val = 1, output[0].next = null.
The last element output[4] is null, but its string representation as a ListNode is [].
Example 2:


Input: head = [1,2,3,4,5,6,7,8,9,10], k = 3
Output: [[1,2,3,4],[5,6,7],[8,9,10]]
Explanation:
The input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.
 

Constraints:

The number of nodes in the list is in the range [0, 1000].
0 <= Node.val <= 1000
1 <= k <= 50
*/

import ListNode, { ArrayToList } from "./__LinkedList"

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
	const makeList = (arr: number[], idx: number, len: number) => {
		if (len === 0 || idx >= arr.length) return null
		let head = new ListNode(arr[idx])
		let p = new ListNode()
		p.next = head
		for (let i = idx + 1; i < idx + len && i < arr.length; i++) {
			p.next!.next = new ListNode(arr[i])
			p = p.next!
		}
		return head
	}
	const arr: number[] = []
	let p = new ListNode()
	p.next = head
	while (p.next !== null) {
		arr.push(p.next.val)
		p = p.next
	}
	// console.log(arr)
	const n = arr.length
	const ans: Array<ListNode | null> = []
	let x = n / k
	let idx = 0
	let kk = k
	while (x > 0) {
		let c = Math.ceil(x)
		let a = makeList(arr, idx, c)
		ans.push(a)
		idx = idx + c
		x = (x * k - c) / (k - 1)
		k--
	}
	while (ans.length < kk) {
		ans.push(null)
	}

	return ans
}

console.log(splitListToParts(ArrayToList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), 3))
