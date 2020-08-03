export const xIntersection = (nums1: number[], nums2: number[]) => {
  const [less, more] = nums1.length < nums2.length ? [nums1, nums2] : [nums2, nums1];
  const arr: Array<number> = new Array();
  for (let num of less) {
    if (more.includes(num)) arr.push(num);
  }
  return arr;
};

console.info(xIntersection([1, 2, 2, 1], [2, 2]));
