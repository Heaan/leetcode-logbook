/*
 * @lc app=leetcode.cn id=114 lang=typescript
 *
 * [114] 二叉树展开为链表
 *
 * https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/description/
 *
 * algorithms
 * Medium (69.66%)
 * Likes:    477
 * Dislikes: 0
 * Total Accepted:    66.7K
 * Total Submissions: 94.4K
 * Testcase Example:  '[1,2,5,3,4,null,6]'
 *
 * 给定一个二叉树，原地将它展开为一个单链表。
 *
 *
 *
 * 例如，给定二叉树
 *
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   5
 * ⁠/ \   \
 * 3   4   6
 *
 * 将其展开为：
 *
 * 1
 * ⁠\
 * ⁠ 2
 * ⁠  \
 * ⁠   3
 * ⁠    \
 * ⁠     4
 * ⁠      \
 * ⁠       5
 * ⁠        \
 * ⁠         6
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

/**
 * Do not return anything, modify root in-place instead.
 */
function shift(left: TreeNode | null, right: TreeNode | null) {
  if (left) {
    if (!left.right) left.right = right;
    else shift(left.right, right);
  }
}

function flatten(root: TreeNode | null): void {
  if (root) {
    const left = root.left;
    const right = root.right;
    if (left) {
      root.left = null;
      if (right) shift(left, right);
      root.right = left;
      flatten(left);
    }
    if (right) {
      flatten(right);
    }
  }
}
// @lc code=end

export default flatten;
