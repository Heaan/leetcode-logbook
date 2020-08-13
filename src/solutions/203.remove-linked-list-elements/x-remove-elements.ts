import { ListNode } from '@utils';

/**
 * 移除链表中的元素(哨兵节点)
 * @param head 操作的链表
 * @param val 目标元素的值
 */
const xRemoveElements = (head: ListNode | null, val: number): ListNode | null => {
  if (!head) return null;

  const senti = new ListNode(0, head);
  let prt: ListNode | null = senti;

  while (prt) {
    if (prt.next?.val === val) {
      prt.next = prt.next.next ?? null;
    } else prt = prt.next;
  }

  return senti.next;
};

export default xRemoveElements;
