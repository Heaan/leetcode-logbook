/**
 * 参考了 最长公共子序列问题 的解答
 * @param s 待判断的字符串
 * @param t 目标字符串
 */
export const xIsSubsequence = (s: string, t: string): boolean => {
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
};

const result = xIsSubsequence('abc', 'addbdscc');
console.info(result);
