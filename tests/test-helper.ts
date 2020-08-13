import { ListNode } from '@utils';

export const getTailOf = (head: ListNode | null): ListNode | null => {
  if (!head) return null;

  let tail: ListNode = head;
  while (tail.next) {
    tail = tail.next;
  }
  return tail;
};
