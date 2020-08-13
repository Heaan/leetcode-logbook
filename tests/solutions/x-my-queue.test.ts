import 'module-alias/register';

import { MyQueue } from '@solutions';

describe('题目：232.用栈实现队列', () => {
  test('用例输入: [[],[1],[2],[],[],[]]', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    const peek = queue.peek();
    const pop = queue.pop();
    const empty = queue.empty();

    expect(peek).toEqual(1);
    expect(pop).toEqual(peek);
    expect(empty).toEqual(false);
  });
});
