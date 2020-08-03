/*
 * @lc app=leetcode.cn id=409 lang=typescript
 *
 * [409] 最长回文串
 *
 * https://leetcode-cn.com/problems/longest-palindrome/description/
 *
 * algorithms
 * Easy (55.09%)
 * Likes:    206
 * Dislikes: 0
 * Total Accepted:    54.8K
 * Total Submissions: 99.5K
 * Testcase Example:  '"abccccdd"'
 *
 * 给定一个包含大写字母和小写字母的字符串，找到通过这些字母构造成的最长的回文串。
 *
 * 在构造过程中，请注意区分大小写。比如 "Aa" 不能当做一个回文字符串。
 *
 * 注意:
 * 假设字符串的长度不会超过 1010。
 *
 * 示例 1:
 *
 *
 * 输入:
 * "abccccdd"
 *
 * 输出:
 * 7
 *
 * 解释:
 * 我们可以构造的最长的回文串是"dccaccd", 它的长度是 7。
 *
 *
 */

// @lc code=start
function longestPalindrome(s: string): number {
  const map: number[] = [];
  const len = s.length;
  for (let i = 0; i < len; i++) {
    const c = s.charCodeAt(i) - 65;
    if (map[c]) map[c]++;
    else map[c] = 1;
  }
  const num = map.reduce((acc, cur) => {
    acc += cur & 1;
    return acc;
  }, 0);

  return len - num + +(num > 0);
}
// @lc code=end

export default longestPalindrome;
