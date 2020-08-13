import 'module-alias/register';
import { createLinkedList, ListNode } from '@utils';

import { removeNthFromEnd } from '@solutions';

describe('题目：19.删除链表的倒数第 n 个节点', () => {
  let head: ListNode | null;

  beforeEach(() => {
    head = createLinkedList(1, 2, 3, 4, 5);
  });

  test('用例输入: (1->2->3->4->5), n=2', () => {
    const result = removeNthFromEnd(head, 2);
    const expected = createLinkedList(1, 2, 3, 5);

    expect(result).toStrictEqual(expected);
  });

  test('用例输入: (1->2->3->4->5), n=1', () => {
    const result = removeNthFromEnd(head, 1);
    const expected = createLinkedList(1, 2, 3, 4);

    expect(result).toStrictEqual(expected);
  });

  test('用例输入: (1->2->3->4->5), n=5', () => {
    const result = removeNthFromEnd(head, 5);
    const expected = createLinkedList(2, 3, 4, 5);

    expect(result).toStrictEqual(expected);
  });
});

describe('题目：19.删除链表的倒数第 n 个节点，特殊用例', () => {
  test('用例输入: (1->2), n=2', () => {
    const head = createLinkedList(1, 2);
    const expected = createLinkedList(2);
    const result = removeNthFromEnd(head, 2);

    expect(result).toStrictEqual(expected);
  });

  test('用例输入: (1), n=1', () => {
    const head = createLinkedList(1);
    const result = removeNthFromEnd(head, 1);

    expect(result).toBeNull();
  });
});
