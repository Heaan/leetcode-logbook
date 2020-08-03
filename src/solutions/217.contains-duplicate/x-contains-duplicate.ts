export const xContainsDuplicate = (nums: number[]): boolean => {
  const set: Set<number> = new Set();
  for (let num of nums) {
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

xContainsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]);
