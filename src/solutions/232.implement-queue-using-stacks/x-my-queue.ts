import { Stack } from '@utils';

class XMyQueue {
  private stack = new Stack();
  constructor() {}

  push(x: number): void {
    if (!this.empty()) {
      const temp = new Stack();
      while (!this.empty()) {
        temp.push(this.stack.pop()!);
      }
      this.stack.push(x);
      while (!temp.isEmpty()) {
        this.stack.push(temp.pop()!);
      }
    } else this.stack.push(x);
  }

  pop(): number | undefined {
    return this.stack.pop();
  }

  peek(): number | undefined {
    return this.stack.peek();
  }

  empty(): boolean {
    return this.stack.isEmpty();
  }
}

export default XMyQueue;
