/*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-inorder-traversal/description/
 *
 * algorithms
 * Medium (72.20%)
 * Likes:    595
 * Dislikes: 0
 * Total Accepted:    200.8K
 * Total Submissions: 278.1K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的中序 遍历。
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
 * 输出: [1,3,2]
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */
import { TreeNode } from '@utils';
/**
 * 中序遍历
 * 莫里斯遍历算法实现(非纯函数)
 * @param root 目标树的根节点
 */
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

function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];
  if (!root) return res;

  let cur: TreeNode | null = root;
  let pre: TreeNode;

  while (cur) {
    if (!cur.left) {
      res.push(cur.val);
      cur = cur.right;
    } else {
      pre = cur.left;
      while (pre.right) {
        pre = pre.right;
      }
      pre.right = cur;
      const temp = cur;
      cur = cur.left;
      temp.left = null;
    }
  }

  return res;
}
// @lc code=end

export default inorderTraversal;
