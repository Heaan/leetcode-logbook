import 'module-alias/register';
import { TreeNode } from '@utils';

const xIsCousins = (root: TreeNode | null, x: number, y: number): boolean => {
  if (!root) return false;

  const queue = [root];

  while (queue.length) {
    let len = queue.length;
    let idx: number = 0;
    let i: number = -1;
    let j: number = -1;
    while (0 < len--) {
      const node = queue.shift()!;
      if (node.left) {
        const left = node.left.val;
        if (left === x || left === y) !(i + 1) ? (i = idx * 2) : (j = idx * 2);
        queue.push(node.left);
      }
      if (node.right) {
        const right = node.right.val;
        if (right === x || right === y) !(i + 1) ? (i = idx * 2 + 1) : (j = idx * 2 + 1);
        queue.push(node.right);
      }
      if (i !== -1 && j !== -1 && ~~(i / 2) !== ~~(j / 2)) {
        return true;
      }
      idx += 1;
    }
  }

  return false;
};

export default xIsCousins;
