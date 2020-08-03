/*
 * @lc app=leetcode.cn id=100 lang=typescript
 *
 * [100] 相同的树
 *
 * https://leetcode-cn.com/problems/same-tree/description/
 *
 * algorithms
 * Easy (58.33%)
 * Likes:    409
 * Dislikes: 0
 * Total Accepted:    106.3K
 * Total Submissions: 182K
 * Testcase Example:  '[1,2,3]\n[1,2,3]'
 *
 * 给定两个二叉树，编写一个函数来检验它们是否相同。
 *
 * 如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
 *
 * 示例 1:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   3     2   3
 *
 * ⁠       [1,2,3],   [1,2,3]
 *
 * 输出: true
 *
 * 示例 2:
 *
 * 输入:      1          1
 * ⁠         /           \
 * ⁠        2             2
 *
 * ⁠       [1,2],     [1,null,2]
 *
 * 输出: false
 *
 *
 * 示例 3:
 *
 * 输入:       1         1
 * ⁠         / \       / \
 * ⁠        2   1     1   2
 *
 * ⁠       [1,2,1],   [1,1,2]
 *
 * 输出: false
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

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const queue: (TreeNode | null)[] = [];
  queue.push(p, q);

  while (queue.length !== 0) {
    const s = queue.shift();
    const t = queue.shift();
    if (s == null && t == null) continue;
    if (s == null || t == null) return false;
    if (s.val !== t.val) return false;
    queue.push(s.left, t.left, s.right, t.right);
  }

  return true;
}
// @lc code=end

export default isSameTree;
