class QueueNode {
  val: number;
  next: QueueNode | null;
  constructor(val: number, next?: QueueNode) {
    this.val = val;
    this.next = next ? next : null;
  }
}
class Queue {
  head: QueueNode | null;
  p: QueueNode;
  length: number;
  constructor() {
    this.head = null;
    this.p = new QueueNode(-1);
    this.length = 0;
  }
  push = (x: number) => {
    if (this.head === null) {
      this.head = new QueueNode(x);
      this.p.next = this.head;
    } else {
      this.p.next!.next = new QueueNode(x);
      this.p = this.p.next!;
    }
    this.length++;
  };
  front = () => {
    if (this.head === null) return null;
    return this.head.val;
  };
  pop = () => {
    if (this.length === 1) {
      this.head = null;
      this.p.next = null;
    } else {
      this.head = this.head!.next;
    }
    this.length--;
  };
  toArray = () => {
    let k = new QueueNode(-1);
    k.next = this.head;
    const arr: number[] = [];
    while (k.next !== null) {
      arr.push(k.next.val);
      k = k.next;
    }
    return arr;
  };
}

export default Queue;
