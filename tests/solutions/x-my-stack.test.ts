import 'module-alias/register';

import { MyStack } from '@solutions';

describe('题目：225.用队列实现栈', () => {
  test('用例输入: [[],[1],[2],[],[],[]]', () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    const top = stack.top();
    const pop = stack.pop();
    const empty = stack.empty();

    expect(top).toEqual(pop);
    expect(pop).toEqual(2);
    expect(empty).toEqual(false);
  });
});
