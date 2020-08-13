import { Queue } from '@utils';

class XMyStack {
  private queue = new Queue();
  private peek: number | undefined;
  constructor() {}

  push(x: number): void {
    this.queue.enqueue(x);
    this.peek = x;
  }

  pop(): number | undefined {
    if (this.empty()) return undefined;
    if (this.queue.size() === 1) return this.queue.dequeue()!;

    const temp = new Queue();
    while (this.queue.size() > 1) {
      temp.enqueue(this.queue.dequeue()!);
    }
    const result = this.queue.dequeue()!;
    this.queue = temp;
    return result;
  }

  top(): number | undefined {
    return this.peek;
  }

  empty(): boolean {
    return this.queue.isEmpty();
  }
}

export default XMyStack;
