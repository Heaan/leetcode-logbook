/*
 * @lc app=leetcode.cn id=108 lang=typescript
 *
 * [108] 将有序数组转换为二叉搜索树
 *
 * https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree/description/
 *
 * algorithms
 * Easy (73.58%)
 * Likes:    531
 * Dislikes: 0
 * Total Accepted:    102.6K
 * Total Submissions: 139.3K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * 将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。
 *
 * 本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。
 *
 * 示例:
 *
 * 给定有序数组: [-10,-3,0,5,9],
 *
 * 一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
 *
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
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

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const len = nums.length;

  if (!len) return null;

  const mid = Math.floor(len / 2);

  const root = new TreeNode(mid);
  const queue = [root];

  while (queue.length) {
    const node = queue.shift()!;
    const i = node.val;
    node.val = nums[i];
    let lef = Math.floor(i / 2);
    let rig = Math.floor((len - i) / 2);
    if (lef >= 0) node.left = new TreeNode(nums[lef]);
    if (rig < len) node.right = new TreeNode(nums[rig]);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}
// @lc code=end

export default sortedArrayToBST;
