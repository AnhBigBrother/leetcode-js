import { TreeNode, ArrayToTree, TreeToArr } from './__tree';

function smallestFromLeaf(root: TreeNode | null): string {
  let strArr: string[] = [];
  const godown = (root: TreeNode | null, str: string): void => {
    if (root === null) return;
    str += String.fromCharCode(root.val! + 97);
    if (root.left === null && root.right === null) {
      strArr.push(str);
    } else {
      godown(root.left, str);
      godown(root.right, str);
    }
  };
  godown(root, '');
  const newArr: string[] = [];
  strArr.forEach(s => {
    let rev = '';
    for (let i = s.length - 1; i >= 0; i--) {
      rev += s[i];
    }
    newArr.push(rev);
  });
  newArr.sort((a, b) => a.localeCompare(b));
  console.log(newArr);
  return newArr[0];
}

const arr = [3, 9, 20, null, null, 15, 7];
const root = ArrayToTree(arr);
console.log(smallestFromLeaf(root));
