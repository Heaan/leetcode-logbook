import 'module-alias/register';
import { ListNode } from '@utils';

const xAddTwoNumbers = (l1: ListNode | null, l2: ListNode | null): ListNode | null => {
  if (!l1 || !l2) return l1 ? l1 : l2;

  const ret = new ListNode();
  let p: ListNode = ret;

  while (l1 || l2) {
    let v1: number = l1?.val ?? 0;
    let v2: number = l2?.val ?? 0;
    let t: number = v1 + v2 + p.val;

    p.val = t % 10;
    t = ~~(t / 10);

    l1 = l1?.next ?? null;
    l2 = l2?.next ?? null;

    if (l1 != null || l2 != null || t > 0) {
      p.next = new ListNode(t);
      p = p.next;
    }
  }

  return ret;
};

export default xAddTwoNumbers;
