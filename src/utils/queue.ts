class Queue<T = number> {
  private count: number = 0;
  private top: number = 0;
  private items: { [index: number]: T } = {};

  constructor() {}

  size() {
    return this.count - this.top;
  }

  isEmpty() {
    return this.size() === 0;
  }

  enqueue(element: T) {
    this.items[this.count++] = element;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;
    const temp = this.items[this.top++];
    delete this.items[this.top - 1];
    return temp;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.top];
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.top = 0;
  }

  toString() {
    if (this.isEmpty()) return '{}';
    let string = `{ ${this.items[this.top]}`;
    for (let i = this.top + 1; i < this.count; i++) {
      string = `${string}, ${this.items[i]}`;
    }
    string = `${string} }`;
    return string;
  }
}

export default Queue;
