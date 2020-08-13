/*
 * @lc app=leetcode.cn id=1042 lang=typescript
 *
 * [1042] 不邻接植花
 *
 * https://leetcode-cn.com/problems/flower-planting-with-no-adjacent/description/
 *
 * algorithms
 * Easy (50.34%)
 * Likes:    62
 * Dislikes: 0
 * Total Accepted:    6.7K
 * Total Submissions: 13.3K
 * Testcase Example:  '3\n[[1,2],[2,3],[3,1]]'
 *
 * 有 N 个花园，按从 1 到 N 标记。在每个花园中，你打算种下四种花之一。
 *
 * paths[i] = [x, y] 描述了花园 x 到花园 y 的双向路径。
 *
 * 另外，没有花园有 3 条以上的路径可以进入或者离开。
 *
 * 你需要为每个花园选择一种花，使得通过路径相连的任何两个花园中的花的种类互不相同。
 *
 * 以数组形式返回选择的方案作为答案 answer，其中 answer[i] 为在第 (i+1) 个花园中种植的花的种类。花的种类用  1, 2, 3, 4
 * 表示。保证存在答案。
 *
 *
 *
 * 示例 1：
 *
 * 输入：N = 3, paths = [[1,2],[2,3],[3,1]]
 * 输出：[1,2,3]
 *
 *
 * 示例 2：
 *
 * 输入：N = 4, paths = [[1,2],[3,4]]
 * 输出：[1,2,1,2]
 *
 *
 * 示例 3：
 *
 * 输入：N = 4, paths = [[1,2],[2,3],[3,4],[4,1],[1,3],[2,4]]
 * 输出：[1,2,3,4]
 *
 *
 *
 *
 * 提示：
 *
 *
 * 1 <= N <= 10000
 * 0 <= paths.size <= 20000
 * 不存在花园有 4 条或者更多路径可以进入或离开。
 * 保证存在答案。
 *
 *
 */

// @lc code=start
function gardenNoAdj(N: number, paths: number[][]): number[] {
  const res: number[] = new Array(N).fill(1);
  const dp: number[][] = [];
  for (let n = 0; n < N; n++) {
    dp[n] = [];
  }

  for (let p = 0; p < paths.length; p++) {
    const [i, j] = paths[p];
    dp[i - 1][j - 1] = dp[j - 1][i - 1] = 1;
  }

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (dp[i][j] && res[i] === res[j]) res[j] += 1;
    }
  }

  return res;
}
// @lc code=end

export default gardenNoAdj;
