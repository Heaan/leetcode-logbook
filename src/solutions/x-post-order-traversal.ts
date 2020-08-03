import 'module-alias/register';
import { TreeNode, createBinaryTree } from '@utils';

const xPostOrderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];

  if (!root) return res;

  const stack: (TreeNode | null)[] = [];
  let poi: TreeNode | null = root;

  while (poi || stack.length) {
    if (!poi) poi = stack.pop()!;

    if (!poi.left && !poi.right) {
      res.push(poi.val);
      poi = null;
    }

    if (poi) {
      if (poi.left || poi.right) {
        stack.push(poi);
        if (poi.right) {
          stack.push(poi.right);
          poi.right = null;
        }
        if (poi.left) {
          const temp = poi;
          poi = poi.left;
          temp.left = null;
        } else poi = null;
      }
    }
  }

  return res;
};

const root = createBinaryTree(1, null, 2, 3);
console.info(xPostOrderTraversal(root));
