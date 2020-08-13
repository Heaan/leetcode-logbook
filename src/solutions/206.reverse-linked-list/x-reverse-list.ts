import { ListNode } from '@utils';

const xReverseList = (head: ListNode | null): ListNode | null => {
  if (!head || !head.next) return head;
  const node = xReverseList(head.next);
  head.next.next = head;
  head.next = null;
  return node;
};

export default xReverseList;
