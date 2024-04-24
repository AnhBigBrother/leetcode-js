class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const ArrayToTree = (arr: (number | null)[]): TreeNode | null => {
  const n = arr.length;
  const TreeArray: TreeNode[] = [];
  const root = new TreeNode(arr[0]!);
  TreeArray.push(root);
  let i = 0,
    j = 1;
  while (j < n) {
    if (arr[j] || arr[j] === 0) {
      TreeArray[i].left = new TreeNode(arr[j]!);
      TreeArray.push(TreeArray[i].left!);
    }
    if (arr[j + 1] || arr[j + 1] === 0) {
      TreeArray[i].right = new TreeNode(arr[j + 1]!);
      TreeArray.push(TreeArray[i].right!);
    }
    j += 2;
    i++;
  }
  return root;
};

const TreeToArr = (root: TreeNode | null): number[][] => {
  const arr: number[][] = [];
  const solve = (root: TreeNode | null, deep: number) => {
    if (root === null) {
      return;
    }
    if (!arr[deep]) {
      arr[deep] = [];
    }
    arr[deep].push(root.val);
    solve(root.left, deep + 1);
    solve(root.right, deep + 1);
  };
  solve(root, 0);
  return arr;
};

export { TreeNode, ArrayToTree, TreeToArr };
