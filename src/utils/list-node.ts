type Callback = (...args: (ListNode | null)[]) => ListNode | null;

export class ListNode {
  public val: number;

  public next: ListNode | null;

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val;
    this.next = next;
  }
}

const printLinkedList = (linkedList: ListNode | null): void => {
  if (linkedList == null) return;

  const retArr: number[] = [];
  let pointer: ListNode | null = linkedList;

  while (pointer != null) {
    retArr.push(pointer.val);
    pointer = pointer.next;
  }

  console.info(retArr);
};

export const codeRunner = (callback: Callback, ...rest: (ListNode | null)[]): void => {
  rest.forEach((linkedList) => {
    printLinkedList(linkedList);
  });

  printLinkedList(callback(...rest));
};

export const createLinkedList = (...arg: number[]): ListNode => {
  const linkedList = new ListNode(arg.shift());

  arg.reduce((pointer, value) => {
    pointer.next = new ListNode(value);
    return pointer.next;
  }, linkedList);

  return linkedList;
};
