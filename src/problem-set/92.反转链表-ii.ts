/*
 * @lc app=leetcode.cn id=92 lang=typescript
 *
 * [92] 反转链表 II
 *
 * https://leetcode-cn.com/problems/reverse-linked-list-ii/description/
 *
 * algorithms
 * Medium (50.95%)
 * Likes:    461
 * Dislikes: 0
 * Total Accepted:    66.4K
 * Total Submissions: 130.2K
 * Testcase Example:  '[1,2,3,4,5]\n2\n4'
 *
 * 反转从位置 m 到 n 的链表。请使用一趟扫描完成反转。
 *
 * 说明:
 * 1 ≤ m ≤ n ≤ 链表长度。
 *
 * 示例:
 *
 * 输入: 1->2->3->4->5->NULL, m = 2, n = 4
 * 输出: 1->4->3->2->5->NULL
 *
 */
import { ListNode } from '@utils';
// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseBetween(head: ListNode | null, m: number, n: number): ListNode | null {
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
}
// @lc code=end
