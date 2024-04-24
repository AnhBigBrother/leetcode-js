class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val: number | undefined, next: ListNode | undefined) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Queue {
  head: ListNode | null = new ListNode(undefined, undefined);
  tail: ListNode | null = new ListNode(undefined, undefined);
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val: number) {
    if (this.length === 0) {
      const x = new ListNode(val, undefined);
      this.head = x;
      this.tail = x;
    } else {
      this.tail!.next = new ListNode(val, undefined);
      this.tail = this.tail!.next;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      throw new Error('Cannot pop an empty queue');
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head!.next;
    }
    this.length--;
  }
  front() {
    if (this.length === 0) {
      throw new Error('This queue is empty');
    }
    return this.head!.val;
  }
  back() {
    if (this.length === 0) {
      throw new Error('This queue is empty');
    }
    return this.tail!.val;
  }
  toArray() {
    if (this.length === 0) return [];
    const ans = [];
    let p = new ListNode(undefined, this.head!);
    while (p.next !== null) {
      ans.push(p.next.val);
      p = p.next;
    }
    return ans;
  }
}

export default Queue;
