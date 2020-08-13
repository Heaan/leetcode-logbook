import 'module-alias/register';

import { MyLinkedList } from '@solutions';

describe('题目：707.设计链表', () => {
  describe('用例输入: [[],[1],[3],[1,2],[1],[1],[1]]', () => {
    const linkedList = new MyLinkedList();
    beforeAll(() => {
      linkedList.addAtHead(1);
      linkedList.addAtTail(3);
      linkedList.addAtIndex(1, 2);
    });

    test('测试添加链表元素', () => {
      const value_0 = linkedList.get(0);
      const value_1 = linkedList.get(1);
      const value_2 = linkedList.get(2);

      expect(value_0).toEqual(1);
      expect(value_1).toEqual(2);
      expect(value_2).toEqual(3);
    });
    test('测试删除链表元素', () => {
      linkedList.deleteAtIndex(1);
      const value = linkedList.get(1);

      expect(value).toEqual(3);
    });
  });

  describe('用例输入: [[],[5],[1],[2],[3],[4],[5],[0]]', () => {
    const linkedList = new MyLinkedList();
    beforeAll(() => {
      linkedList.addAtHead(5);
      linkedList.addAtTail(1);
      linkedList.addAtTail(5);
      linkedList.addAtIndex(2, 2);
      linkedList.addAtIndex(3, 3);
      linkedList.addAtIndex(4, 4);
      linkedList.addAtTail(0);
    });

    test('测试链表是否存在元素', () => {
      const array: number[] = [];
      for (let i = 0; i < 7; i++) {
        const item = linkedList.get(i);
        array.push(item);
      }

      expect(array).toStrictEqual([5, 1, 2, 3, 4, 5, 0]);
    });

    test('测试链表能否删除元素', () => {
      linkedList.deleteAtIndex(0);
      linkedList.deleteAtIndex(5);
      const last = linkedList.get(4);
      const array: number[] = [];
      for (let i = 0; i < 5; i++) {
        const item = linkedList.get(i);
        array.push(item);
      }

      expect(last).toEqual(5);
      expect(array).toStrictEqual([1, 2, 3, 4, 5]);
    });
  });

  describe('用例输入: [[],[7],[2],[1],[3,0],[2],[6],[4],[4],[4],[5,0],[6]]', () => {
    const linkedList = new MyLinkedList();
    beforeAll(() => {
      linkedList.addAtHead(7);
      linkedList.addAtHead(2);
      linkedList.addAtHead(1);
      linkedList.addAtIndex(3, 0);
      linkedList.deleteAtIndex(2);
      linkedList.addAtHead(6);
      linkedList.addAtTail(4);
    });

    test('获取在索引 4 位置的节点值', () => {
      const value = linkedList.get(4);

      expect(value).toEqual(4);
    });

    test('添加元素', () => {
      linkedList.addAtHead(4);
      linkedList.addAtIndex(5, 0);
      linkedList.addAtHead(6);
      const array: number[] = [];

      for (let i = 0; i < 8; i++) {
        const item = linkedList.get(i);
        array.push(item);
      }

      expect(array).toStrictEqual([6, 4, 6, 1, 2, 0, 0, 4]);
    });
  });
});
