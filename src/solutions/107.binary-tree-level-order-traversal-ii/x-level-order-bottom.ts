import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

export const xLevelOrderBottom = (root: TreeNode | null): number[][] => {
  const res: number[][] = [];
  if (!root) return res;

  const queue: TreeNode[] = [];
  queue.push(root);

  while (queue.length) {
    const len = queue.length;
    res.unshift([]);

    for (let i = 0; i < len; i++) {
      const node = queue.shift()!;
      res[0].push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return res;
};

const root = createBinaryTree(1, 2, 3, 4, 5, 6, 7);
console.info(xLevelOrderBottom(root));
