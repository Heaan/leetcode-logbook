/*
 * @lc app=leetcode.cn id=349 lang=typescript
 *
 * [349] 两个数组的交集
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays/description/
 *
 * algorithms
 * Easy (70.04%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    82.2K
 * Total Submissions: 117.3K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 *
 *
 * 示例 2：
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中的每个元素一定是唯一的。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 */

// @lc code=start
function intersection(nums1: number[], nums2: number[]): number[] {
  const [less, more] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  return [...new Set(less.filter((num) => more.includes(num)))];
}
// @lc code=end

export default intersection;
