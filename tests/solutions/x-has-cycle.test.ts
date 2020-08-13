import 'module-alias/register';
import { createLinkedList, cycleMaker } from '@utils';

import { hasCycle } from '@solutions';

describe('题目: 141.环形链表', () => {
  test('用例输入: head = [3,2,0,-4], pos = 1', () => {
    const head = createLinkedList(3, 2, 0, -4);
    cycleMaker(head, 1);
    const result = hasCycle(head);

    expect(result).toEqual(true);
  });

  test('用例输入: head = [1,2], pos = 0', () => {
    const head = createLinkedList(1, 2);
    cycleMaker(head);
    const result = hasCycle(head);

    expect(result).toEqual(true);
  });

  test('用例输入: head = [1], pos = -1', () => {
    const head = createLinkedList(1);
    cycleMaker(head, -1);
    const result = hasCycle(head);

    expect(result).toEqual(false);
  });

  test('用例输入: head = [], pos = -1', () => {
    const head = createLinkedList();
    cycleMaker(head, -1);
    const result = hasCycle(head);

    expect(result).toEqual(false);
  });
});
