function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    if (this.length === 0) {
      const x = new ListNode(val);
      this.head = x;
      this.tail = x;
    } else {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
    }
    this.length++;
  }
  pop() {
    if (this.length === 0) {
      throw new Error("Cannot pop an empty queue");
    } else if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.length--;
  }
  front() {
    if (this.length === 0) {
      throw new Error("This queue is empty");
    }
    return this.head.val;
  }
  back() {
    if (this.length === 0) {
      throw new Error("This queue is empty");
    }
    return this.tail.val;
  }
  toArray() {
    const ans = [];
    let p = new ListNode(null, this.head);
    while (p.next !== null) {
      ans.push(p.next.val);
      p = p.next;
    }
    return ans;
  }
}

module.exports = Queue;
