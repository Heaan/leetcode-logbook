// TODO
class XNumArray {
  private dp: number[][] = [];
  private nums: number[];
  private size: number;

  constructor(nums: number[]) {
    this.nums = nums;
    this.size = nums.length;
    for (let n = 0; n < this.size; n++) {
      this.dp[n] = [];
    }
  }

  sumRange(i: number, j: number): number {
    if (i >= this.size || j >= this.size) return 0;
    if (i > j) return 0;
    if (this.dp[i][j] != null) return this.dp[i][j];
    return this.nums[j] + this.sumRange(i, j - 1);
  }
}

export default XNumArray;
