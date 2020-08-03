export function removeElement(nums: number[], val: number): number {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    if (nums[i] === val) {
      for (let j = i; j < len - 1; j++) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
      i--;
      len--;
    }
  }
  return len;
}

const nums = [1, 2, 4, 2, 5, 2, 6, 3];
const len = removeElement(nums, 2);

console.info(nums.slice(0, len));
