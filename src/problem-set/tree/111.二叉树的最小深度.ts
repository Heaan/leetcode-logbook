/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
 *
 * https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (43.01%)
 * Likes:    307
 * Dislikes: 0
 * Total Accepted:    98.3K
 * Total Submissions: 228K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最小深度。
 *
 * 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。
 *
 * 说明: 叶子节点是指没有子节点的节点。
 *
 * 示例:
 *
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 返回它的最小深度  2.
 *
 */
import { TreeNode } from '@utils';
// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

type Pair<F, S> = { first: F; second: S };

const markPair = <F, S>(first: F, second: S): Pair<F, S> => {
  return { first, second };
};

function minDepth(root: TreeNode | null): number {
  if (root) {
    const stack: Pair<TreeNode, number>[] = [markPair(root, 1)];
    let res: number = Number.MAX_SAFE_INTEGER;
    while (stack.length) {
      const { first: node, second: depth } = stack.pop()!;
      if (!node.left && !node.right) res = Math.min(res, depth);
      if (node.left) stack.push(markPair(node.left, depth + 1));
      if (node.right) stack.push(markPair(node.right, depth + 1));
    }
    return res;
  }

  return 0;
}
// @lc code=end

function minDepthBFS(root: TreeNode | null): number {
  if (root) {
    const queue: Pair<TreeNode, number>[] = [markPair(root, 1)];
    while (queue.length) {
      const { first: node, second: depth } = queue.shift()!;
      if (!node.left && !node.right) return depth;
      if (node.left) queue.push(markPair(node.left, depth + 1));
      if (node.right) queue.push(markPair(node.right, depth + 1));
    }
  }
  return 0;
}

export { minDepth, minDepthBFS };
