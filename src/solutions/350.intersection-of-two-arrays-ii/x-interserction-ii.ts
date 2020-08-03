export const numMapCount = (nums: number[]): Map<number, number> => {
  const map: Map<number, number> = new Map();
  for (let num of nums) {
    const count: number | undefined = map.get(num);
    if (count) {
      map.set(num, count + 1);
    } else map.set(num, 1);
  }
  return map;
};

const xIntersectII = (nums1: number[], nums2: number[]): number[] => {
  const arr = [];
  const map1 = numMapCount(nums1);
  const map2 = numMapCount(nums2);

  for (let key of map1.keys()) {
    if (map2.has(key)) {
      let count = Math.min(map1.get(key) as number, map2.get(key) as number);
      while (count-- !== 0) {
        arr.push(key);
      }
    }
  }

  return arr;
};

console.info(xIntersectII([1, 1, 2, 3, 3], [3, 3, 2, 2, 1]));
