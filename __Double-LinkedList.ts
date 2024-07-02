class DoubleListNode {
  val: number;
  left: DoubleListNode | null;
  right: DoubleListNode | null;
  constructor(val: number, left?: DoubleListNode | null, right?: DoubleListNode | null) {
    this.val = val;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}
class DoubleLinkedList {
  head: DoubleListNode | null;
  tail: DoubleListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  pushback = (x: number) => {
    if (this.head === null) {
      this.head = new DoubleListNode(x);
      this.tail = this.head;
      this.length = 1;
      return;
    } else {
      const newNode = new DoubleListNode(x);
      this.tail!.right = newNode;
      newNode.left = this.tail;
      this.tail = newNode;
    }
    this.length++;
  };
  pushfront = (x: number) => {
    if (this.head === null) {
      this.head = new DoubleListNode(x);
      this.tail = this.head;
      this.length = 1;
      return;
    } else {
      const newNode = new DoubleListNode(x);
      this.head.left = newNode;
      newNode.right = this.head;
      this.head = newNode;
    }
    this.length++;
  };
  popback = () => {
    if (this.tail === null) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    const x = this.tail.left;
    this.tail = x;
    this.tail!.right = null;
    this.length--;
  };
  popfront = () => {
    if (this.head === null) {
      return;
    }
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }
    const x = this.head.right;
    this.head = x;
    this.head!.left = null;
    this.length--;
  };
  front = () => {
    if (this.head === null) return null;
    return this.head.val;
  };
  back = () => {
    if (this.tail === null) return null;
    return this.tail.val;
  };
  toArray = () => {
    const ans = [];
    let p = new DoubleListNode(-1);
    p.right = this.head;
    while (p.right !== null) {
      ans.push(p.right.val);
      p = p.right;
    }
    return ans;
  };
}

export default DoubleLinkedList;
