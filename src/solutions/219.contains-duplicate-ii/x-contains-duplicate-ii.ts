export const xContainsNearbyDuplicate = (nums: number[], k: number): boolean => {
  if (k === 0) return false;

  const len = nums.length;
  const map: Map<number, number[]> = new Map();

  for (let i = 0; i < len; i++) {
    if (map.has(nums[i])) {
      let [near, min] = map.get(nums[i]) as number[];
      min = min === 0 ? i - near : Math.min(min, i - near);
      map.set(nums[i], [i, min]);
    } else map.set(nums[i], [i, 0]);
  }
  for (let [, min] of map.values()) {
    if (min !== 0 && min <= k) return true;
  }

  return false;
};

const res = xContainsNearbyDuplicate([1, 1], 1);
res;
