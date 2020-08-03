import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

/**
 * 二叉树的层序遍历
 * @param root 目标树的根节点
 */
export const xLevelOrder = (root: TreeNode | null): number[][] => {
  if (!root) return [];

  const res: number[][] = [];
  const queue: TreeNode[][] = [];

  queue.push([root]);

  while (queue.length) {
    const nodes = queue.shift();
    if (nodes) {
      const bro: TreeNode[] = [];
      const item: number[] = [];
      for (const node of nodes) {
        if (node) {
          item.push(node.val);
          if (node.left) bro.push(node.left);
          if (node.right) bro.push(node.right);
        }
      }
      if (item.length) res.push(item);
      if (bro.length) queue.push(bro);
    }
  }

  return res;
};
const root = createBinaryTree(0, 11, 222, 3333, 44444);
console.info(xLevelOrder(root));
