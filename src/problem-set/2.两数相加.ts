/*
 * @lc app=leetcode.cn id=2 lang=typescript
 *
 * [2] 两数相加
 *
 * https://leetcode-cn.com/problems/add-two-numbers/description/
 *
 * algorithms
 * Medium (37.85%)
 * Likes:    4648
 * Dislikes: 0
 * Total Accepted:    491.3K
 * Total Submissions: 1.3M
 * Testcase Example:  '[2,4,3]\n[5,6,4]'
 *
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 *
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 *
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 *
 * 示例：
 *
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
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
  if (l1 == null || l2 == null) return l1 == null ? l2 : l1;

  const ret = new ListNode();
  let p: ListNode = ret;

  while (l1 != null || l2 != null) {
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
}
// @lc code=end

export default addTwoNumbers;
