import 'module-alias/register';
import { TreeNode, inOrderTraverse } from '@utils';

export const xSortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (!nums.length) return null;

  const mid = Math.floor(nums.length / 2);

  const root = new TreeNode(nums[mid]);

  root.left = xSortedArrayToBST(nums.slice(0, mid));
  root.right = xSortedArrayToBST(nums.slice(mid + 1));

  return root;
};

const root = xSortedArrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9]);
inOrderTraverse(root, console.info);
