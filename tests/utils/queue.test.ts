import 'module-alias/register';

import { Queue } from '@utils';

describe('数据结构测试 · 队列', () => {
  test('创建一个队列', () => {
    const queue = new Queue();

    expect(queue.toString()).toEqual('{}');
    expect(queue).toBeInstanceOf(Queue);
    expect(queue.size()).toEqual(0);
    expect(queue.isEmpty()).toEqual(true);
    expect(queue.peek()).not.toBeDefined();
  });

  test('打印出所有队列元素', () => {
    const queue = new Queue();
    for (let i = 0; i < 4; i++) {
      queue.enqueue(i);
    }
    const string = `${queue}`;

    expect(string).toEqual('{ 0, 1, 2, 3 }');
  });

  test('向队尾添加元素', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    expect(queue.toString()).toEqual('{ 1, 2, 3 }');
    expect(queue.size()).toEqual(3);
    expect(queue.isEmpty()).toEqual(false);
    expect(queue.peek()).toEqual(1);
  });

  test('移除队队首元素', () => {
    const queue = new Queue();
    for (let i = 0; i < 5; i++) {
      queue.enqueue(i);
    }

    const peek = queue.peek();
    const item = queue.dequeue();

    expect(queue.toString()).toEqual('{ 1, 2, 3, 4 }');
    expect(item).toEqual(0);
    expect(item).toEqual(peek);
    expect(queue.size()).toEqual(4);
    expect(queue.isEmpty()).toEqual(false);
  });

  test('清空队列', () => {
    const queue = new Queue();
    for (let i = 0; i < 20; i++) {
      queue.enqueue(i);
    }
    const size = queue.size();
    queue.clear();

    expect(queue.toString()).toEqual('{}');
    expect(size).toEqual(20);
    expect(queue.isEmpty()).toEqual(true);
  });
});
