import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

const xPreOrderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];

  if (!root) return res;

  const stack: TreeNode[] = [];
  let poi: TreeNode | null = root;

  while (poi || stack.length) {
    if (!poi) poi = stack.pop()!;

    res.push(poi.val);

    if (poi.right) stack.push(poi.right);

    poi = poi.left;
  }

  return res;
};

const root = createBinaryTree(1, null, 2, 3);
console.info(xPreOrderTraversal(root));
