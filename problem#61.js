/*
61. Rotate List
Solved
Medium
Topics
Companies
Given the head of a linked list, rotate the list to the right by k places. 

Example 1:
Input: head = [1,2,3,4,5], k = 2
Output: [4,5,1,2,3]

Example 2:
Input: head = [0,1,2], k = 4
Output: [2,0,1]
 

Constraints:

The number of nodes in the list is in the range [0, 500].
-100 <= Node.val <= 100
0 <= k <= 2 * 109
*/
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var rotateRight = function (head, k) {
    if (head === null || head.next === null) { return head }
    let p = new ListNode();
    p.next = head;
    const nodeArr = [head]
    while (p.next.next !== null) {
        p = p.next;
        nodeArr.push(p.next);
    }
    k = k % nodeArr.length;
    let f = 0;
    let l = nodeArr.length - 1;
    while (k > 0) {
        nodeArr[l].next = nodeArr[f];
        f = l;
        l--;
        nodeArr[l].next = null;
        k--;
    }
    return nodeArr[f];
};