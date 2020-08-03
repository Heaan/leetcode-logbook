import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

export const xMaxDepth = (root: TreeNode | null): number => {
  if (!root) return 0;

  const queue = [root];
  let count: number = 0;

  while (queue.length) {
    let size = queue.length;
    while (size-- > 0) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    count += 1;
  }

  return count;
};

const root = createBinaryTree(1, 2, null, 3, null, 4, null, 5);
const count = xMaxDepth(root);
count;
