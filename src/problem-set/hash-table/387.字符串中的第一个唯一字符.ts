/*
 * @lc app=leetcode.cn id=387 lang=typescript
 *
 * [387] 字符串中的第一个唯一字符
 *
 * https://leetcode-cn.com/problems/first-unique-character-in-a-string/description/
 *
 * algorithms
 * Easy (45.91%)
 * Likes:    242
 * Dislikes: 0
 * Total Accepted:    88.7K
 * Total Submissions: 192.9K
 * Testcase Example:  '"leetcode"'
 *
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 *
 *
 *
 * 示例：
 *
 * s = "leetcode"
 * 返回 0
 *
 * s = "loveleetcode"
 * 返回 2
 *
 *
 *
 *
 * 提示：你可以假定该字符串只包含小写字母。
 *
 */

// @lc code=start
function firstUniqChar(s: string): number {
  const len = s.length;
  const map: number[] = new Array(26);

  for (const c of s) {
    const n = c.charCodeAt(0) - 97;
    if (map[n]) map[n]++;
    else map[n] = 1;
  }
  for (let i = 0; i < len; i++) {
    const n = s.charCodeAt(i) - 97;
    if (map[n] === 1) return i;
  }

  return -1;
}
// @lc code=end

export default firstUniqChar;
