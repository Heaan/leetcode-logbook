import 'module-alias/register';
import { TreeNode } from '@utils';

const xFindBottomLeftValue = (root: TreeNode | null): number => {
  if (!root) return 0;

  const queue = [root];
  let left = 0;

  while (queue.length) {
    let len = queue.length;
    left = queue[0].val;
    while (len--) {
      const node = queue.shift()!;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }

  return left;
};

export default xFindBottomLeftValue;
