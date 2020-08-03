/*
 * @lc app=leetcode.cn id=204 lang=typescript
 *
 * [204] 计数质数
 *
 * https://leetcode-cn.com/problems/count-primes/description/
 *
 * algorithms
 * Easy (34.44%)
 * Likes:    397
 * Dislikes: 0
 * Total Accepted:    68K
 * Total Submissions: 197K
 * Testcase Example:  '10'
 *
 * 统计所有小于非负整数 n 的质数的数量。
 *
 * 示例:
 *
 * 输入: 10
 * 输出: 4
 * 解释: 小于 10 的质数一共有 4 个, 它们是 2, 3, 5, 7 。
 *
 *
 */

// @lc code=start
function countPrimes(n: number): number {
  if (n === 0 || n === 1) return 0;
  const isPrimes = new Array(n).fill(true);

  for (let i = 2; i * i < n; i++) {
    if (isPrimes[i]) {
      for (let j = i * i; j < n; j += i) {
        isPrimes[j] = false;
      }
    }
  }

  return isPrimes.filter((p) => p).length - 2;
}
// @lc code=end
