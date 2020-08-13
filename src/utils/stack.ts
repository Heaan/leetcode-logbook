class Stack<T = number> {
  private count: number = 0;
  private items: { [index: number]: T } = {};

  constructor() {}

  size() {
    return this.count;
  }

  isEmpty() {
    return this.size() === 0;
  }

  push(element: T) {
    this.items[this.count++] = element;
  }

  pop() {
    if (this.isEmpty()) return undefined;
    this.count -= 1;
    const temp = this.items[this.count];
    delete this.items[this.count];
    return temp;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) return '{}';
    let string = `{ ${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      string = `${string}, ${this.items[i]}`;
    }
    string = `${string} }`;
    return string;
  }
}

export default Stack;
