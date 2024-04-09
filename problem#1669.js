/* 
1669. Merge In Between Linked Lists
Solved
Medium
Topics
Companies
Hint
You are given two linked lists: list1 and list2 of sizes n and m respectively.
Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

Build the result list and return its head.

Example 1:

Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
Output: [10,1,13,1000000,1000001,1000002,5]
Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

Example 2:

Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
Explanation: The blue edges and nodes in the above figure indicate the result.
 

Constraints:

3 <= list1.length <= 104
1 <= a <= b < list1.length - 1
1 <= list2.length <= 104
*/ 
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let p1 = new ListNode(0, list1);
    let p2 = new ListNode();

    let count = 0;
    while (count < a - 1) {
        p1 = p1.next;
        count++;
    }
    p2.next = p1.next;
    while (count <= b) {
        // console.log(p2.next.val);
        p2 = p2.next;
        count++;
    }
    p1.next.next = list2;
    while (list2.next !== null) {
        // console.log(list2.val);
        list2 = list2.next;
    }
    list2.next = p2.next;
    return list1;
};

let list1 = new ListNode(0, null);
list1.next = new ListNode(1, null);
list1.next.next = new ListNode(2, null);
let list2 = new ListNode(1000000, null);
list2.next = new ListNode(1000001, null);
list2.next.next = new ListNode(1000002, null);
list2.next.next.next = new ListNode(1000003, null);

let ans = mergeInBetween(list1, 1, 1, list2);
while (ans !== null) {
    console.log(ans.val);
    ans = ans.next;
}
