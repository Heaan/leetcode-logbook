/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (66.24%)
 * Likes:    326
 * Dislikes: 0
 * Total Accepted:    142.6K
 * Total Submissions: 214.9K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
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
 * 输出: [1,2,3]
 *
 *
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 *
 */

import { TreeNode } from '@utils';
/**
 * 前序遍历
 * 莫里斯遍历: 不需保存输出结果的情况下，不会使用额外空间。
 * 思路是从当前节点向下访问其 中序遍历 时的前驱节点，每个前驱节点都恰好被访问两次。
 * 时间复杂度为 O(n);
 * 空间复杂度为 O(1);
 * @param root 树的根节点
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

function preorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  if (!root) return res;

  let poi: TreeNode | null = root;

  while (poi) {
    if (!poi.left) {
      res.push(poi.val);
      poi = poi.right;
    } else {
      let pre: TreeNode | null = poi.left;
      while (pre?.right && pre.right !== poi) {
        pre = pre.right;
      }
      if (!pre.right) {
        res.push(poi.val);
        pre.right = poi;
        poi = poi.left;
      } else {
        pre.right = null;
        poi = poi.right;
      }
    }
  }

  return res;
}
// @lc code=end

export default preorderTraversal;
