export xTwoSum = (nums: number[], target: number): number[] => {
  const len = nums.length;
  for (let i = 0; i < len; i += 1) {
    for (let j = i + 1; j < len; j += 1) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
};

console.info(xTwoSum([2, 7, 11, 15], 9));
