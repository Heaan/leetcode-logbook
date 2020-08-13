const xRob = (nums: number[]): number => {
  if (!nums || !nums.length) return 0;

  const n = nums.length;

  if (n === 1) return nums[0];

  const dp: number[] = [];
  dp[0] = nums[0];
  dp[1] = nums[0] > nums[1] ? nums[0] : nums[1];

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
  }

  return dp[n - 1];
};

export default xRob;
