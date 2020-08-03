/*
 * @lc app=leetcode.cn id=389 lang=typescript
 *
 * [389] 找不同
 *
 * https://leetcode-cn.com/problems/find-the-difference/description/
 *
 * algorithms
 * Easy (62.31%)
 * Likes:    143
 * Dislikes: 0
 * Total Accepted:    31.5K
 * Total Submissions: 50.6K
 * Testcase Example:  '"abcd"\n"abcde"'
 *
 * 给定两个字符串 s 和 t，它们只包含小写字母。
 *
 * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
 *
 * 请找出在 t 中被添加的字母。
 *
 *
 *
 * 示例:
 *
 * 输入：
 * s = "abcd"
 * t = "abcde"
 *
 * 输出：
 * e
 *
 * 解释：
 * 'e' 是那个被添加的字母。
 *
 *
 */

// @lc code=start
function findTheDifference(s: string, t: string): string {
  const map: number[] = [];
  const len = t.length;

  for (let i = 0; i < len - 1; i++) {
    const c = s.charCodeAt(i) - 97;
    if (map[c]) map[c]++;
    else map[c] = 1;
  }
  for (let j = 0; j < len; j++) {
    const n = t.charCodeAt(j) - 97;
    if (!map[n]) return t[j];
    map[n]--;
  }

  return '';
}
// @lc code=end

export default findTheDifference;
