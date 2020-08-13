import 'module-alias/register';
import { ListNode, createLinkedList, linkedListToArray, cycleMaker } from '@utils';
import { getTailOf } from '../test-helper';

describe('函数 createLinkedList() 创建以给定参数为值的链表', () => {
  test('创建一个只有一个节点，且值为 0 的链表', () => {
    const head = createLinkedList(0);

    expect(head).toBeDefined();
    expect(head).toBeInstanceOf(ListNode);
    expect(head?.val).toEqual(0);
    expect(head?.next).toBeNull();
  });

  test('创建一个有 3 个节点的链表', () => {
    const head = createLinkedList(0, 1, 2);
    const next = head?.next;

    expect(next).not.toBeNull();
    expect(next).toBeInstanceOf(ListNode);
    expect(next?.val).toEqual(1);
    expect(next?.next).not.toBeNull();
    expect(next?.next?.val).toEqual(2);
  });
});

describe('函数 linkedListToArray() 把给定的链表转换为数组', () => {
  test('把链表 ( 0 ) 转换为数组', () => {
    const head = createLinkedList(0);
    const array = linkedListToArray(head);

    expect(array).toBeInstanceOf(Array);
    expect(array).toStrictEqual([0]);
  });

  test('把链表 (2 -> 4 -> 3) 转换为数组', () => {
    const head = createLinkedList(2, 4, 3);
    const array = linkedListToArray(head);

    expect(array).toStrictEqual([2, 4, 3]);
  });
});

describe.only('函数 cycleMaker() 根据给定的链表和定位参数，构造环形链表', () => {
  test('把链表 (1 -> 2 -> 3 -> 4) 转换成环形链表，尾部连接到第一个节点', () => {
    const head = createLinkedList(1, 2, 3, 4);
    const tail = getTailOf(head);
    cycleMaker(head);

    expect(tail?.val).toEqual(4);
    expect(tail?.next?.val).toEqual(1);
  });

  test('当定位参数为 -1 时', () => {
    const head = createLinkedList(1, 2, 3);
    const tail = getTailOf(head);
    cycleMaker(head, -1);

    expect(tail?.next).toBeNull();
  });

  test('当定位参数为 3 时，尾部连接到链表第四给元素', () => {
    const head = createLinkedList(1, 2, 3, 4, 5);
    const tail = getTailOf(head);
    cycleMaker(head, 3);

    expect(tail?.next?.val).toEqual(4);
  });

  test('尾部连接到链表最后一个元素', () => {
    const head = createLinkedList(1, 2, 3, 4);
    const tail = getTailOf(head);
    cycleMaker(head, 3);

    expect(tail?.next?.val).toEqual(4);
  });

  test('当给定的定位参数超过链表长度时，应不返回环形链表', () => {
    const head = createLinkedList(1, 2, 3);
    const tail = getTailOf(head);
    cycleMaker(head, 5);

    expect(tail?.next).toBeNull();
  });

  test('当输入: head = [1], pos = -1 时，应不形成环形链表', () => {
    const head = createLinkedList(1);
    const tail = getTailOf(head);
    cycleMaker(head, -1);

    expect(tail?.next).toBeNull();
  });
});
