class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

const ListToArray = (head: ListNode | null) => {
  const res = [];
  let p = new ListNode();
  p.next = head;
  while (p.next !== null) {
    res.push(p.next.val);
    p = p.next;
  }
  return res;
};

const ArrayToList = (nums: number[]) => {
  if (nums.length === 0) return null;
  const head = new ListNode(nums[0]);
  let p = new ListNode();
  p.next = head;
  for (let i = 1; i < nums.length; i++) {
    p.next!.next = new ListNode(nums[i]);
    p = p.next!;
  }

  return head;
};

export default ListNode;
export { ListToArray, ArrayToList };
