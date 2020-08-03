/*
 * @lc app=leetcode.cn id=350 lang=typescript
 *
 * [350] 两个数组的交集 II
 *
 * https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/description/
 *
 * algorithms
 * Easy (52.07%)
 * Likes:    361
 * Dislikes: 0
 * Total Accepted:    127.5K
 * Total Submissions: 244.7K
 * Testcase Example:  '[1,2,2,1]\n[2,2]'
 *
 * 给定两个数组，编写一个函数来计算它们的交集。
 *
 *
 *
 * 示例 1：
 *
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2,2]
 *
 *
 * 示例 2:
 *
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[4,9]
 *
 *
 *
 * 说明：
 *
 *
 * 输出结果中每个元素出现的次数，应与元素在两个数组中出现次数的最小值一致。
 * 我们可以不考虑输出结果的顺序。
 *
 *
 * 进阶：
 *
 *
 * 如果给定的数组已经排好序呢？你将如何优化你的算法？
 * 如果 nums1 的大小比 nums2 小很多，哪种方法更优？
 * 如果 nums2 的元素存储在磁盘上，磁盘内存是有限的，并且你不能一次加载所有的元素到内存中，你该怎么办？
 *
 *
 */

// @lc code=start
function intersect(nums1: number[], nums2: number[]): number[] {
  const arr: number[] = [];
  const map: Map<number, number> = new Map();
  const [less, more] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];

  for (let num of less) {
    const count = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else map.set(num, 1);
  }

  for (let num of more) {
    const count = map.get(num);
    if (count) {
      arr.push(num);
      map.set(num, count - 1);
    }
  }

  return arr;
}
// @lc code=end

export default intersect;
