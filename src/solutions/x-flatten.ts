import 'module-alias/register';
import { TreeNode, createBinaryTree, binaryTreeToArray } from '@utils';

const transfer = (left: TreeNode | null, right: TreeNode | null): void => {
  if (left) {
    if (!left.right) left.right = right;
    else transfer(left.right, right);
  }
};

const flatten = (root: TreeNode | null): void => {
  if (root) {
    const left = root.left;
    const right = root.right;
    if (left) {
      root.left = null;
      if (right) transfer(left, right);
      root.right = left;
      flatten(left);
    }
    if (right) {
      flatten(right);
    }
  }
};

const root = createBinaryTree(1, null, 2, 3);
flatten(root);
console.info(binaryTreeToArray(root));
