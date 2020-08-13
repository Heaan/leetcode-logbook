/*
 * @lc app=leetcode.cn id=66 lang=typescript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (44.94%)
 * Likes:    521
 * Dislikes: 0
 * Total Accepted:    184.7K
 * Total Submissions: 411K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */

// @lc code=start
function plusOne(digits: number[]): number[] {
  let num: number = 1;
  let n: number = digits.length - 1;
  for (let i = n; i >= 0; i--) {
    num += digits[i];
    if (num >= 10) {
      digits[i] = num % 10;
      num = 1;
    } else {
      digits[i] = num;
      num = 0;
    }
  }
  if (num > 0) return [1, ...digits];

  return digits;
}
// @lc code=end
