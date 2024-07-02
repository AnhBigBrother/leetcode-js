class HeapNode {
  val: number;
  left: HeapNode | null;
  right: HeapNode | null;
  constructor(val?: number, left?: HeapNode | null, right?: HeapNode | null) {
    this.val = val ? val : 0;
    this.left = left ? left : null;
    this.right = right ? right : null;
  }
}

class PriorityQueue {
  private head: HeapNode | null;
  private tail: HeapNode | null;
  private mid: HeapNode | null;
  private size: number;

  constructor() {
    this.head = null;
    this.mid = null;
    this.tail = null;
    this.size = 0;
  }

  private insert = (node: HeapNode, val: number) => {
    if (val < node.val) {
      if (val >= node.left!.val) {
        const x = new HeapNode(val);
        node.left!.right = x;
        x.left = node.left;
        node.left = x;
        x.right = node;
      } else {
        this.insert(node.left!, val);
      }
    } else {
      if (val <= node.right!.val) {
        const x = new HeapNode(val);
        node.right!.left = x;
        x.right = node.right;
        node.right = x;
        x.left = node;
      } else {
        this.insert(node.right!, val);
      }
    }
  };
  push = (...args: number[]) => {
    for (let val of args) {
      if (this.mid === null) {
        this.mid = new HeapNode(val);
        this.head = this.mid;
        this.tail = this.mid;
      } else if (val <= this.head!.val) {
        const x = new HeapNode(val);
        x.right = this.head;
        this.head!.left = x;
        this.head = x;
      } else if (val >= this.tail!.val) {
        const x = new HeapNode(val);
        this.tail!.right = x;
        x.left = this.tail;
        this.tail = x;
      } else {
        this.insert(this.mid, val);
      }
      this.size++;
    }
  };
  toArray = (): number[] => {
    let p = new HeapNode();
    p.right = this.head;
    const ans: number[] = [];
    while (p.right !== null) {
      ans.push(p.right.val);
      p = p.right;
    }
    return ans;
  };
  pop = () => {
    if (this.size === 0) return;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
      this.mid = null;
      this.size = 0;
      return;
    }
    const x = this.tail!.left;
    x!.right = null;
    this.tail = null;
    this.tail = x;
    this.size--;
  };
  length = (): number => {
    return this.size;
  };
  top = (): number => {
    if (this.tail === null) throw new Error('Queue is empty!');
    return this.tail!.val;
  };
  front = (): number => {
    if (this.head === null) throw new Error('Queue is empty!');
    return this.head!.val;
  };
}

export default PriorityQueue;
export { HeapNode };

const myPQueue = new PriorityQueue();
console.log('myPQueue:', myPQueue.toArray());
