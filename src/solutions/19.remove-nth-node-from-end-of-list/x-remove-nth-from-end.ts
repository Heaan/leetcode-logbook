import { ListNode } from '@utils';

const xRemoveNthFromEnd = (head: ListNode | null, n: number): ListNode | null => {
  if (!head) return null;

  let pre: ListNode | null = head;
  let curr: ListNode | null = head;
  let count: number = 0;

  while (curr) {
    if (count > n) pre = pre!.next;
    curr = curr.next;
    count += 1;
  }

  if (count === n) head = head.next;
  else pre!.next = pre?.next?.next ?? null;

  return head;
};

export default xRemoveNthFromEnd;
