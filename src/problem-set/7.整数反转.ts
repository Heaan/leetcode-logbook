/*
 * @lc app=leetcode.cn id=7 lang=typescript
 *
 * [7] 整数反转
 *
 * https://leetcode-cn.com/problems/xerse-integer/description/
 *
 * algorithms
 * Easy (34.49%)
 * Likes:    2058
 * Dislikes: 0
 * Total Accepted:    414.5K
 * Total Submissions: 1.2M
 * Testcase Example:  '123'
 *
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 *
 * 示例 1:
 *
 * 输入: 123
 * 输出: 321
 *
 *
 * 示例 2:
 *
 * 输入: -123
 * 输出: -321
 *
 *
 * 示例 3:
 *
 * 输入: 120
 * 输出: 21
 *
 *
 * 注意:
 *
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−2^31,  2^31 − 1]。请根据这个假设，如果反转后整数溢出那么就返回
 * 0。
 *
 */

// @lc code=start
function reverse(x: number): number {
  if (x >= -9 && x <= 9) return x;

  const MAX_WARN = ~~((2 ** 31 - 1) / 10);
  const MIN_WARN = ~~(-(2 ** 31) / 10);

  let rev = 0;

  while (x !== 0) {
    const temp = x % 10;
    x = ~~(x / 10);
    if (rev > MAX_WARN || (rev === MAX_WARN && temp > 7)) {
      return 0;
    }
    if (rev < MIN_WARN || (rev === MIN_WARN && temp < -8)) {
      return 0;
    }
    rev = rev * 10 + temp;
  }

  return rev;
}
// @lc code=end

export default reverse;
