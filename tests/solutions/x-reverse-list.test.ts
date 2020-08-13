import 'module-alias/register';
import { createLinkedList, linkedListToArray } from '@utils';

import { reverseList } from '@solutions';

describe('题目：206.反转链表', () => {
  test('用例输入: []', () => {
    const head = createLinkedList();
    const res = reverseList(head);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(0);
    expect(arr).toStrictEqual([]);
  });

  test('用例输入: [1]', () => {
    const head = createLinkedList(1);
    const res = reverseList(head);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(1);
    expect(arr).toStrictEqual([1]);
  });

  test('用例输入: [5, 4, 3, 2, 1]', () => {
    const head = createLinkedList(5, 4, 3, 2, 1);
    const res = reverseList(head);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(5);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5]);
  });
});
