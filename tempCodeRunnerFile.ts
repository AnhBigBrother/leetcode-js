function nodesBetweenCriticalPoints(head: ListNode | null): number[] {
//   let p = new ListNode();
//   p.next = head;
//   let pre = p.next!.val;
//   p = p.next;
//   const arr = [];
//   let idx = 1;
//   while (p.next !== null) {
//     const val = p.next.val;
//     if (p.next.next !== null) {
//       if (val > p.next.next.val && val > pre) {
//         arr.push(idx);
//       } else if (val < pre && val < p.next.next.val) {
//         arr.push(idx);
//       }
//     }
//     pre = val;
//     idx++;
//   }

//   return arr;
// }