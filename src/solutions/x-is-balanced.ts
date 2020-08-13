import 'module-alias/register';
import { TreeNode } from '@utils';

const height = (node: TreeNode | null): number => {
  return !node ? -1 : Math.max(height(node.left), height(node.right)) + 1;
};

const xIsBalanced = (root: TreeNode | null): boolean => {
  return (
    !root ||
    (Math.abs(height(root.left) - height(root.right)) < 2 &&
      xIsBalanced(root.left) &&
      xIsBalanced(root.right))
  );
};

export default xIsBalanced;
