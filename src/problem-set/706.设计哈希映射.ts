/*
 * @lc app=leetcode.cn id=706 lang=typescript
 *
 * [706] 设计哈希映射
 *
 * https://leetcode-cn.com/problems/design-hashmap/description/
 *
 * algorithms
 * Easy (57.43%)
 * Likes:    66
 * Dislikes: 0
 * Total Accepted:    15K
 * Total Submissions: 26.1K
 * Testcase Example:  '["MyHashMap","put","put","get","get","put","get", "remove", "get"]\n' +
  '[[],[1,1],[2,2],[1],[3],[2,1],[2],[2],[2]]'
 *
 * 不使用任何内建的哈希表库设计一个哈希映射
 *
 * 具体地说，你的设计应该包含以下的功能
 *
 *
 * put(key, value)：向哈希映射中插入(键,值)的数值对。如果键对应的值已经存在，更新这个值。
 * get(key)：返回给定的键所对应的值，如果映射中不包含这个键，返回-1。
 * remove(key)：如果映射中存在这个键，删除这个数值对。
 *
 *
 *
 * 示例：
 *
 * MyHashMap hashMap = new MyHashMap();
 * hashMap.put(1, 1);          
 * hashMap.put(2, 2);        
 * hashMap.get(1);            // 返回 1
 * hashMap.get(3);            // 返回 -1 (未找到)
 * hashMap.put(2, 1);         // 更新已有的值
 * hashMap.get(2);            // 返回 1
 * hashMap.remove(2);         // 删除键为2的数据
 * hashMap.get(2);            // 返回 -1 (未找到)
 *
 *
 *
 * 注意：
 *
 *
 * 所有的值都在 [0, 1000000]的范围内。
 * 操作的总数目在[1, 10000]范围内。
 * 不要使用内建的哈希库。
 *
 *
 */

// @lc code=start
class MyHashMap {
  private map: { [key: number]: { key: number; value: number } } = {};
  constructor() {}

  private hashCode(key: number) {
    const mapKey = `${key}`;
    let hash = 5381;
    for (let i = 0; i < mapKey.length; i++) {
      hash = hash * 33 + mapKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  put(key: number, value: number): void {
    const hash = this.hashCode(key);
    this.map[hash] = { key, value };
  }

  get(key: number): number {
    const hash = this.hashCode(key);
    if (this.map[hash]) {
      const { value } = this.map[hash];
      return value;
    }
    return -1;
  }

  remove(key: number): void {
    const hash = this.hashCode(key);
    if (this.map[hash]) delete this.map[hash];
  }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
// @lc code=end
