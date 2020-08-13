/*
 * @lc app=leetcode.cn id=232 lang=typescript
 *
 * [232] 用栈实现队列
 *
 * https://leetcode-cn.com/problems/implement-queue-using-stacks/description/
 *
 * algorithms
 * Easy (64.71%)
 * Likes:    211
 * Dislikes: 0
 * Total Accepted:    57.3K
 * Total Submissions: 88.5K
 * Testcase Example:  '["MyQueue","push","push","peek","pop","empty"]\n[[],[1],[2],[],[],[]]'
 *
 * 使用栈实现队列的下列操作：
 *
 *
 * push(x) -- 将一个元素放入队列的尾部。
 * pop() -- 从队列首部移除元素。
 * peek() -- 返回队列首部的元素。
 * empty() -- 返回队列是否为空。
 *
 *
 *
 *
 * 示例:
 *
 * MyQueue queue = new MyQueue();
 *
 * queue.push(1);
 * queue.push(2);
 * queue.peek();  // 返回 1
 * queue.pop();   // 返回 1
 * queue.empty(); // 返回 false
 *
 *
 *
 * 说明:
 *
 *
 * 你只能使用标准的栈操作 -- 也就是只有 push to top, peek/pop from top, size, 和 is empty
 * 操作是合法的。
 * 你所使用的语言也许不支持栈。你可以使用 list 或者 deque（双端队列）来模拟一个栈，只要是标准的栈操作即可。
 * 假设所有操作都是有效的 （例如，一个空的队列不会调用 pop 或者 peek 操作）。
 *
 *
 */

// @lc code=start
class MyQueue {
  private stack = new Array<number>();
  private helper = new Array<number>();
  private front: number | undefined;
  constructor() {}

  push(x: number): void {
    if (!this.stack.length) {
      this.front = x;
    }
    this.stack.push(x);
  }

  pop(): number | undefined {
    if (!this.helper.length) {
      while (this.stack.length) {
        this.helper.push(this.stack.pop()!);
      }
    }
    return this.helper.pop();
  }

  peek(): number | undefined {
    if (this.helper.length) {
      const peek = this.helper.length - 1;
      return this.helper[peek];
    }
    return this.front;
  }

  empty(): boolean {
    return this.stack.length + this.helper.length === 0;
  }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

export default MyQueue;
