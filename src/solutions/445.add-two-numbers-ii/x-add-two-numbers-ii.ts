import { ListNode, Stack } from '@utils';

const xAddTwoNumbers = (l1: ListNode, l2: ListNode): ListNode | null => {
  const s1 = new Stack();
  const s2 = new Stack();

  let p1: ListNode | null = l1;
  let p2: ListNode | null = l2;
  while (p1 || p2) {
    if (p1) {
      s1.push(p1.val);
      p1 = p1.next;
    }
    if (p2) {
      s2.push(p2.val);
      p2 = p2.next;
    }
  }

  let head: ListNode | null = null;
  let val = 0;
  while (!s1.isEmpty() || !s2.isEmpty()) {
    if (val >= 10) val = 1;
    else val = 0;

    const v1 = s1.pop() || 0;
    const v2 = s2.pop() || 0;
    val += v1 + v2;

    head = new ListNode(val % 10, head);
  }
  if (val >= 10) head = new ListNode(1, head);

  return head;
};

export default xAddTwoNumbers;
