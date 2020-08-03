import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

export const xIsSameTree = (p: TreeNode | null, q: TreeNode | null): boolean => {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;
  if (p.val === q.val) {
    return xIsSameTree(p.left, q.left) && xIsSameTree(p.right, q.right);
  }
  return false;
};

const p = createBinaryTree(1, 2, 3);
const q = createBinaryTree(null, null, 1);

console.info(xIsSameTree(p, q));
