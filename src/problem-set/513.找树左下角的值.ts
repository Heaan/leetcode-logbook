/*
 * @lc app=leetcode.cn id=513 lang=typescript
 *
 * [513] 找树左下角的值
 *
 * https://leetcode-cn.com/problems/find-bottom-left-tree-value/description/
 *
 * algorithms
 * Medium (70.95%)
 * Likes:    102
 * Dislikes: 0
 * Total Accepted:    18.4K
 * Total Submissions: 25.9K
 * Testcase Example:  '[2,1,3]'
 *
 * 给定一个二叉树，在树的最后一行找到最左边的值。
 *
 * 示例 1:
 *
 *
 * 输入:
 *
 * ⁠   2
 * ⁠  / \
 * ⁠ 1   3
 *
 * 输出:
 * 1
 *
 *
 *
 *
 * 示例 2:
 *
 *
 * 输入:
 *
 * ⁠       1
 * ⁠      / \
 * ⁠     2   3
 * ⁠    /   / \
 * ⁠   4   5   6
 * ⁠      /
 * ⁠     7
 *
 * 输出:
 * 7
 *
 *
 *
 *
 * 注意: 您可以假设树（即给定的根节点）不为 NULL。
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

function findBottomLeftValue(root: TreeNode | null): number {
  if (!root) return 0;

  const queue = [root];
  let left = 0;

  while (queue.length) {
    left = queue[0].val;
    const node = queue.shift()!;
    if (node.right) queue.push(node.right);
    if (node.left) queue.push(node.left);
  }

  return left;
}
// @lc code=end

export default findBottomLeftValue;
