type Callback = (...args: (ListNode | null)[]) => ListNode | null;

export class ListNode<T = number> {
  constructor(public val: T | number = 0, public next: ListNode | null = null) {}
}
export class DoublyListNode extends ListNode {
  constructor(
    public val: number = 0,
    public next: DoublyListNode | null = null,
    public prev: DoublyListNode | null = null,
  ) {
    super(val, next);
  }
}

export const createLinkedList = (...args: number[]): ListNode | null => {
  if (args[0] == null) return null;

  const head = new ListNode(args.shift()!);

  args.reduce((prt, val) => {
    prt.next = new ListNode(val);
    return prt.next;
  }, head);

  return head;
};

export const linkedListToArray = (head: ListNode | null): number[] => {
  if (!head) return [];
  if (hasCycle(head)) throw new Error('Found cycle in the List!');

  const array: number[] = [];
  let prt: ListNode | null = head;

  while (prt) {
    array.push(prt.val);
    prt = prt.next;
  }

  return array;
};

const printLinkedList = (head: ListNode | null): void => {
  if (!head) return;
  const array = linkedListToArray(head);
  console.info(array);
};

/**
 * 打印出参数，以及测试函数返回的结果
 * @param callback 测试的目标函数
 * @param rest 多个链表实例参数
 */
export const codeRunner = (callback: Callback, ...rest: (ListNode | null)[]): void => {
  rest.forEach((linkedList) => {
    printLinkedList(linkedList);
  });

  printLinkedList(callback(...rest));
};

/**
 * 循环链表制造函数
 * @param head 目标链表
 * @param pos 循环起始点（从 0 开始）
 */
export const cycleMaker = (head: ListNode | null, pos: number = 0): ListNode | null => {
  if (!head) return null;
  if (pos < 0) return head;

  let count: number = 0;
  let prt: ListNode = head;
  let tail: ListNode = head;

  while (tail.next) {
    tail = tail.next;
    if (count !== pos) {
      prt = prt.next!;
      count += 1;
    }
  }

  if (count === pos) tail.next = prt;

  return head;
};

export const hasCycle = (head: ListNode): boolean => {
  if (!head.next) return false;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head.next;

  while (slow !== fast) {
    if (!slow || !fast) return false;
    slow = slow.next;
    fast = fast.next?.next || null;
  }

  return true;
};
