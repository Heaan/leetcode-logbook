import 'module-alias/register';
import { TreeNode } from '@utils';

const sumOf = (node: TreeNode | null): number => {
  if (!node) return 0;
  if (!node.left && !node.right) return node.val;
  return sumOf(node.left) + xSumOfLeftLeaves(node.right);
};

const xSumOfLeftLeaves = (root: TreeNode | null): number => {
  if (!root) return 0;
  return root && sumOf(root.left) + xSumOfLeftLeaves(root.right);
};

export default xSumOfLeftLeaves;
