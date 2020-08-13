import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

const xMinDepth = (root: TreeNode | null): number => {
  if (root) {
    if (!root.left && !root.right) return 1;
    if (!root.left || !root.right)
      return (root.left ? xMinDepth(root.left) : xMinDepth(root.right)) + 1;
    return Math.min(xMinDepth(root.left), xMinDepth(root.right)) + 1;
  }

  return 0;
};

const root = createBinaryTree(3, null, 2, 3);
const res = xMinDepth(root);
res;

export default xMinDepth;
