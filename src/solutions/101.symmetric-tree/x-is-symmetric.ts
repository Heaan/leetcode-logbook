import 'module-alias/register';

import { TreeNode, createBinaryTree } from '@utils';

export const xIsSymmetric = (root: TreeNode | null): boolean => {
  if (root == null) return true;

  const queue: (TreeNode | null)[] = [];
  queue.push(root.left, root.right);

  while (queue.length !== 0) {
    const lef = queue.shift();
    const rig = queue.shift();

    if (lef == null && rig == null) continue;
    if (lef == null || rig == null) return false;
    if (lef.val !== rig.val) return false;

    queue.push(lef.left, rig.right, lef.right, rig.left);
  }

  return true;
};

const root = createBinaryTree(1, 2, 2, 3, 4, 4, 3);

console.info(xIsSymmetric(root));
