/*
 * @lc app=leetcode.cn id=447 lang=typescript
 *
 * [447] 回旋镖的数量
 *
 * https://leetcode-cn.com/problems/number-of-boomerangs/description/
 *
 * algorithms
 * Easy (57.78%)
 * Likes:    100
 * Dislikes: 0
 * Total Accepted:    13.7K
 * Total Submissions: 23.7K
 * Testcase Example:  '[[0,0],[1,0],[2,0]]'
 *
 * 给定平面上 n 对不同的点，“回旋镖” 是由点表示的元组 (i, j, k) ，其中 i 和 j 之间的距离和 i 和 k
 * 之间的距离相等（需要考虑元组的顺序）。
 *
 * 找到所有回旋镖的数量。你可以假设 n 最大为 500，所有点的坐标在闭区间 [-10000, 10000] 中。
 *
 * 示例:
 *
 *
 * 输入:
 * [[0,0],[1,0],[2,0]]
 *
 * 输出:
 * 2
 *
 * 解释:
 * 两个回旋镖为 [[1,0],[0,0],[2,0]] 和 [[1,0],[2,0],[0,0]]
 *
 *
 */

// @lc code=start
function distanceBetween(v: number[], w: number[]): number {
  const x = Math.abs(w[0] - v[0]);
  const y = Math.abs(w[1] - v[1]);
  return x ** 2 + y ** 2;
}

function totalOf(n: number): number {
  // if (n < 2) return 1;
  // return totalOf(n - 1) + n;
  let ret: number = 0;
  for (let i = 1; i <= n; i++) {
    ret += i;
  }
  return ret;
}

function numberOfBoomerangs(points: number[][]): number {
  const map: Map<number, number[]> = new Map();
  const size = points.length;
  let count = 0;

  for (let i = 0; i < size; i++) {
    for (let j = i + 1; j < size; j++) {
      const dist = distanceBetween(points[i], points[j]);
      const vets = map.get(dist);
      if (vets != null) {
        vets.push(i, j);
      } else {
        map.set(dist, [i, j]);
      }
    }
    for (let vets of map.values()) {
      if (vets.length > 2 && vets.includes(i)) {
        const num = vets.reduce((acc, cur) => {
          if (cur === i) acc++;
          return acc;
        }, 0);
        if (num > 1) {
          count += 2 * totalOf(num - 1);
        }
      }
    }
  }

  return count;
}
// @lc code=end

export default numberOfBoomerangs;
