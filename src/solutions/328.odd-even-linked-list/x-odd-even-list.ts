import { ListNode } from '@utils';

const xOddEvenList = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  const even = head.next;
  let pre: ListNode = head;
  let tail: ListNode | null = even;
  let cur: ListNode | null = head.next;
  let count: number = 1;

  while (cur) {
    if (!count) {
      pre.next = cur;
      tail!.next = cur.next;

      tail = tail!.next;
      pre = pre.next;

      count = 2;
    }
    cur = cur.next;
    count -= 1;
  }

  pre.next = even;

  return head;
};

export default xOddEvenList;
