/*
 * @lc app=leetcode.cn id=392 lang=typescript
 *
 * [392] 判断子序列
 *
 * https://leetcode-cn.com/problems/is-subsequence/description/
 *
 * algorithms
 * Easy (48.94%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    70.2K
 * Total Submissions: 139.8K
 * Testcase Example:  '"abc"\n"ahbgdc"'
 *
 * 给定字符串 s 和 t ，判断 s 是否为 t 的子序列。
 *
 * 你可以认为 s 和 t 中仅包含英文小写字母。字符串 t 可能会很长（长度 ~= 500,000），而 s 是个短字符串（长度 <=100）。
 *
 *
 * 字符串的一个子序列是原始字符串删除一些（也可以不删除）字符而不改变剩余字符相对位置形成的新字符串。（例如，"ace"是"abcde"的一个子序列，而"aec"不是）。
 *
 * 示例 1:
 * s = "abc", t = "ahbgdc"
 *
 * 返回 true.
 *
 * 示例 2:
 * s = "axc", t = "ahbgdc"
 *
 * 返回 false.
 *
 * 后续挑战 :
 *
 * 如果有大量输入的 S，称作S1, S2, ... , Sk 其中 k >= 10亿，你需要依次检查它们是否为 T
 * 的子序列。在这种情况下，你会怎样改变代码？
 *
 * 致谢:
 *
 * 特别感谢 @pbrother 添加此问题并且创建所有测试用例。
 *
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  const lS = s.length;
  const lT = t.length;
  const m: number[][] = [];

  for (let i = 0; i <= lS; i++) {
    m[i] = [];
    for (let j = 0; j <= lT; j++) {
      m[i][j] = 0;
    }
  }

  for (let i = 1; i <= lS; i++) {
    for (let j = 1; j <= lT; j++) {
      if (s[i - 1] === t[j - 1]) {
        m[i][j] = m[i - 1][j - 1] + 1;
      } else {
        const top = m[i - 1][j];
        const left = m[i][j - 1];
        m[i][j] = top > left ? top : left;
      }
    }
  }

  return m[lS][lT] === lS;
}
// @lc code=end

export default isSubsequence;
