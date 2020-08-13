import 'module-alias/register';
import { createLinkedList } from '@utils';

import { addTwoNumbers } from '@solutions';

describe('题目：2.两数相加', () => {
  test('用例输入: (2 -> 4 -> 3) + (5 -> 6 -> 4)', () => {
    const l1 = createLinkedList(2, 4, 3);
    const l2 = createLinkedList(5, 6, 4);
    const aws = createLinkedList(7, 0, 8);
    const result = addTwoNumbers(l1, l2);

    expect(result).toStrictEqual(aws);
  });

  test('用例输入: (9 -> 9) + (1)', () => {
    const l1 = createLinkedList(9, 9);
    const l2 = createLinkedList(1);
    const aws = createLinkedList(0, 0, 1);

    const result = addTwoNumbers(l1, l2);

    expect(result).toStrictEqual(aws);
  });
});
