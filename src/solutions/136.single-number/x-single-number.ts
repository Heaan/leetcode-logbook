/**
 * 单身数字问题
 * 利用 异或 位运算
 * @param nums 目标数组
 */
export const xSingleNumber = (nums: number[]): number => {
  let ret = 0;

  for (let num of nums) ret ^= num;

  return ret;
};

console.info(xSingleNumber([4, 4, 5, 5, 6]));
