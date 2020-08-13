import { ListNode } from '@utils';

const xReverseBetween = (head: ListNode | null, m: number, n: number): ListNode | null => {
  if (!head || !head.next) return head;
  if (m > n) return head;

  const senti = new ListNode();
  let ptr: ListNode | null = senti;
  let rev: ListNode | null = null;
  let curr: ListNode | null = head;
  let tail: ListNode | null = null;
  let count: number = 0;

  while (curr) {
    count += 1;
    const temp: ListNode | null = curr.next;
    if (count < m) {
      ptr.next = curr;
      ptr = ptr.next;
    } else if (count > n) {
      if (tail) tail.next = curr;
      break;
    } else {
      if (count === m) tail = curr;
      curr.next = rev;
      rev = curr;
    }
    curr = temp;
  }
  ptr.next = rev;

  return senti.next;
};

export default xReverseBetween;
