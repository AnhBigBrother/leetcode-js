function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const buildList = (arr) => {
  if (arr.length === 0) {
    return null;
  }
  let head = new ListNode(arr[0]);
  let p = new ListNode(0, head);
  for (let i = 1; i < arr.length; i++) {
    p.next.next = new ListNode(arr[i]);
    p = p.next;
  }
  return head;
};

const toArr = (head) => {
  let p = new ListNode(0, head);
  let arr = [];
  while (p.next !== null) {
    arr.push(p.next.val);
    p = p.next;
  }
  return arr;
};

module.exports = { ListNode, buildList, toArr };
