import 'module-alias/register';
import { createLinkedList, linkedListToArray } from '@utils';

import { reverseBetween } from '@solutions';

describe('题目：92.反转链表II', () => {
  test('用例输入: [], m=0, n=0', () => {
    const head = createLinkedList();
    const res = reverseBetween(head, 0, 0);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(0);
    expect(arr).toStrictEqual([]);
  });

  test('用例输入: [0], m=1, n=1', () => {
    const head = createLinkedList(0);
    const res = reverseBetween(head, 1, 1);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(1);
    expect(arr).toStrictEqual(arr);
  });

  test('用例输入: [4,3,2,1], m=1, n=4', () => {
    const head = createLinkedList(4, 3, 2, 1);
    const res = reverseBetween(head, 1, 4);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(4);
    expect(arr).toStrictEqual([1, 2, 3, 4]);
  });

  test('用例输入: [4,3,2,1], m=4, n=1', () => {
    const head = createLinkedList(4, 3, 2, 1);
    const res = reverseBetween(head, 4, 1);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(4);
    expect(arr).toStrictEqual([4, 3, 2, 1]);
  });

  test('用例输入: [1,6,5,4,3,2,7], m=2, n=6', () => {
    const head = createLinkedList(1, 6, 5, 4, 3, 2, 7);
    const res = reverseBetween(head, 2, 6);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(7);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('用例输入: [1,6,5,4,3,2,7], m=6, n=2', () => {
    const head = createLinkedList(1, 6, 5, 4, 3, 2, 7);
    const res = reverseBetween(head, 6, 2);
    const arr = linkedListToArray(res);

    expect(arr).toHaveLength(7);
    expect(arr).toStrictEqual([1, 6, 5, 4, 3, 2, 7]);
  });
});
