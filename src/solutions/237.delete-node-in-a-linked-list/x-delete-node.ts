import { ListNode } from '@utils';

const xDeleteNode = (node: ListNode): void => {
  let prt: ListNode | null = node;

  while (prt?.next) {
    prt.val = prt.next.val;
    if (!prt.next.next) prt.next = null;
    prt = prt.next;
  }
};

export default xDeleteNode;
