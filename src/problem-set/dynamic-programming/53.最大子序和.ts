/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 *
 * https://leetcode-cn.com/problems/maximum-subarray/description/
 *
 * algorithms
 * Easy (51.95%)
 * Likes:    2271
 * Dislikes: 0
 * Total Accepted:    295.6K
 * Total Submissions: 568.9K
 * Testcase Example:  '[-2,1,-3,4,-1,2,1,-5,4]'
 *
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 *
 * 示例:
 *
 * 输入: [-2,1,-3,4,-1,2,1,-5,4]
 * 输出: 6
 * 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
 *
 *
 * 进阶:
 *
 * 如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
 *
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  const len = nums.length;
  let dp: number = 0;
  let max: number = -(2 ** 31);

  for (let i = 0; i < len; i++) {
    dp = dp + nums[i] > nums[i] ? dp + nums[i] : nums[i];
    max = dp > max ? dp : max;
  }

  return max;
}
// @lc code=end

export default maxSubArray;
