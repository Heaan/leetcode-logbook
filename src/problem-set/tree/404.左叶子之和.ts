/*
 * @lc app=leetcode.cn id=404 lang=typescript
 *
 * [404] 左叶子之和
 *
 * https://leetcode-cn.com/problems/sum-of-left-leaves/description/
 *
 * algorithms
 * Easy (55.30%)
 * Likes:    173
 * Dislikes: 0
 * Total Accepted:    31.5K
 * Total Submissions: 56.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 计算给定二叉树的所有左叶子之和。
 *
 * 示例：
 *
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 * 在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24
 *
 *
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

function sumOf(node: TreeNode | null): number {
  if (!node) return 0;
  if (!node.left && !node.right) return node.val;
  return sumOf(node.left) + sumOfLeftLeaves(node.right);
}

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) return 0;
  return sumOf(root.left) + sumOfLeftLeaves(root.right);
}
// @lc code=end
