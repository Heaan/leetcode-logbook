const xMaxSubArray = (nums: number[]): number => {
  const len = nums.length;

  let dp: number = 0;
  let max: number = -(2 ** 32);

  for (let i = 0; i < len; i++) {
    dp = dp + nums[i] > nums[i] ? dp + nums[i] : nums[i];
    max = dp > max ? dp : max;
  }

  return max;
};

export default xMaxSubArray;
