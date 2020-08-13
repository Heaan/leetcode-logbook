/*
 * @lc app=leetcode.cn id=303 lang=typescript
 *
 * [303] 区域和检索 - 数组不可变
 *
 * https://leetcode-cn.com/problems/range-sum-query-immutable/description/
 *
 * algorithms
 * Easy (62.41%)
 * Likes:    180
 * Dislikes: 0
 * Total Accepted:    48.5K
 * Total Submissions: 77.7K
 * Testcase Example:  '["NumArray","sumRange","sumRange","sumRange"]\n' +
  '[[[-2,0,3,-5,2,-1]],[0,2],[2,5],[0,5]]'
 *
 * 给定一个整数数组  nums，求出数组从索引 i 到 j  (i ≤ j) 范围内元素的总和，包含 i,  j 两点。
 *
 * 示例：
 *
 * 给定 nums = [-2, 0, 3, -5, 2, -1]，求和函数为 sumRange()
 *
 * sumRange(0, 2) -> 1
 * sumRange(2, 5) -> -1
 * sumRange(0, 5) -> -3
 *
 * 说明:
 *
 *
 * 你可以假设数组不可变。
 * 会多次调用 sumRange 方法。
 *
 *
 */
/**
 * ? 前缀和
 */
// @lc code=start
class NumArray {
  constructor(private nums: number[]) {
    this.nums.unshift(0);
    const len = nums.length;
    for (let i = 1; i < len; i++) {
      this.nums[i] = this.nums[i] + this.nums[i - 1];
    }
  }

  sumRange(i: number, j: number): number {
    return this.nums[j + 1] - this.nums[i];
  }
}

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

export default NumArray;
