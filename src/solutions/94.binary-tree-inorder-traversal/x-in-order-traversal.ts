import 'module-alias/register';
import { TreeNode } from '@utils';

const xInOrderTraversal = (root: TreeNode | null): number[] => {
  const res: number[] = [];

  if (!root) return res;

  const stack: TreeNode[] = [];
  let prt: TreeNode | null = root;

  while (prt || stack.length) {
    if (!prt) {
      prt = stack.pop()!;
      res.push(prt.val);
      prt = prt.right;
    }
    if (prt) {
      stack.push(prt);
      prt = prt.left;
    }
  }

  return res;
};

export default xInOrderTraversal;
