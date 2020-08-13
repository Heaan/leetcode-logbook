const climbStairs = (n: number): number => {
  let cur = 2,
    pre = 1;

  if (n < 3) return n === 2 ? cur : pre;

  for (let i = 2; i < n; i++) {
    [pre, cur] = [cur, pre + cur];
  }

  return cur;
};

export default climbStairs;
