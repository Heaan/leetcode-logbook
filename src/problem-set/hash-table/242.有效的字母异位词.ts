/*
 * @lc app=leetcode.cn id=242 lang=typescript
 *
 * [242] 有效的字母异位词
 *
 * https://leetcode-cn.com/problems/valid-anagram/description/
 *
 * algorithms
 * Easy (60.66%)
 * Likes:    222
 * Dislikes: 0
 * Total Accepted:    120.5K
 * Total Submissions: 198.4K
 * Testcase Example:  '"anagram"\n"nagaram"'
 *
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 示例 1:
 *
 * 输入: s = "anagram", t = "nagaram"
 * 输出: true
 *
 *
 * 示例 2:
 *
 * 输入: s = "rat", t = "car"
 * 输出: false
 *
 * 说明:
 * 你可以假设字符串只包含小写字母。
 *
 * 进阶:
 * 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
 *
 */

// @lc code=start
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  const map: number[] = new Array(26).fill(0);

  for (let c of s) {
    const n = c.charCodeAt(0) - 97;
    map[n]++;
  }
  for (let c of t) {
    const n = c.charCodeAt(0) - 97;
    map[n]--;
    if (map[n] < 0) return false;
  }
  return true;
}
// @lc code=end

export default isAnagram;
