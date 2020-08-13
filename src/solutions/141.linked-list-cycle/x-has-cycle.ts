import { ListNode } from '@utils';

const xHasCycle = (head: ListNode | null): boolean => {
  if (!head) return false;

  let fast: ListNode | null = head.next;
  let slow: ListNode | null = head;

  while (slow && fast) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast?.next?.next || null;
  }

  return false;
};

export default xHasCycle;
