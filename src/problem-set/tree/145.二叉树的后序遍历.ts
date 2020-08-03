/*
 * @lc app=leetcode.cn id=145 lang=typescript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (72.00%)
 * Likes:    357
 * Dislikes: 0
 * Total Accepted:    102.8K
 * Total Submissions: 142.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
 *
 * 示例:
 *
 * 输入: [1,null,2,3]
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 *
 * 输出: [3,2,1]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
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

function postorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];

  const stack: (TreeNode | null)[] = [root];
  const res: number[] = [];

  while (stack.length) {
    const top = stack.length - 1;
    const node = stack[top];
    if (!node) {
      stack.pop();
      res.push(stack.pop()!.val);
      continue;
    }
    stack.push(null);
    if (node.right) stack.push(node.right);
    if (node.left) stack.push(node.left);
  }

  return res;
}
// @lc code=end

export default postorderTraversal;
