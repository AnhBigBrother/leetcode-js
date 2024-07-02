class SingleNode {
  val: number;
  next: SingleNode | null;
  constructor(val: number, next?: SingleNode) {
    this.val = val;
    this.next = next ? next : null;
  }
}
class SingleQueue {
  head: SingleNode | null;
  p: SingleNode;
  length: number;
  constructor() {
    this.head = null;
    this.p = new SingleNode(-1);
    this.length = 0;
  }
  push = (x: number) => {
    if (this.head === null) {
      this.head = new SingleNode(x);
      this.p.next = this.head;
    } else {
      this.p.next!.next = new SingleNode(x);
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
    let k = new SingleNode(-1);
    k.next = this.head;
    const arr: number[] = [];
    while (k.next !== null) {
      arr.push(k.next.val);
      k = k.next;
    }
    return arr;
  };
}