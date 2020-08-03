import 'module-alias/register';
import { ListNode, createLinkedList, codeRunner } from '@utils';

export xMergeTwoLists = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (l1 == null || l2 == null) return l1 == null ? l2 : l1;

  let pre: ListNode | null, curr: ListNode | null, com: ListNode | null;

  [pre, curr] = l1.val < l2.val ? [l1, l2] : [l2, l1];

  const result = pre;

  while (curr != null) {
    com = curr;
    curr = curr.next;
    while (pre.next != null) {
      if (com.val < pre.next.val) {
        com.next = pre.next;
        pre.next = com;
        pre = com;
        break;
      }
      pre = pre.next;
    }
    if (pre.next == null && com != null) {
      pre.next = com;
      break;
    }
  }

  return result;
};

const l1 = createLinkedList(1, 3, 4);
const l2 = createLinkedList(1, 3, 4);

codeRunner(xMergeTwoLists, l1, l2);
