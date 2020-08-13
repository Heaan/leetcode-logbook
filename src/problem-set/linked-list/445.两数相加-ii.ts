/*
 * @lc app=leetcode.cn id=445 lang=typescript
 *
 * [445] 两数相加 II
 *
 * https://leetcode-cn.com/problems/add-two-numbers-ii/description/
 *
 * algorithms
 * Medium (57.82%)
 * Likes:    250
 * Dislikes: 0
 * Total Accepted:    46.9K
 * Total Submissions: 81K
 * Testcase Example:  '[7,2,4,3]\n[5,6,4]'
 *
 * 给你两个 非空 链表来代表两个非负整数。数字最高位位于链表开始位置。它们的每个节点只存储一位数字。将这两数相加会返回一个新的链表。
 *
 * 你可以假设除了数字 0 之外，这两个数字都不会以零开头。
 *
 *
 *
 * 进阶：
 *
 * 如果输入链表不能修改该如何处理？换句话说，你不能对列表中的节点进行翻转。
 *
 *
 *
 * 示例：
 *
 * 输入：(7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 8 -> 0 -> 7
 *
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const s1: number[] = [];
  const s2: number[] = [];
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
  while (s1.length || s2.length) {
    if (val >= 10) val = 1;
    else val = 0;
    const v1 = s1.pop() ?? 0;
    const v2 = s2.pop() ?? 0;
    val += v1 + v2;
    head = new ListNode(val % 10, head);
  }
  if (val >= 10) head = new ListNode(1, head);

  return head;
}
// @lc code=end

export default addTwoNumbers;
