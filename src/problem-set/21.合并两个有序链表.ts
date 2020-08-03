/*
 * @lc app=leetcode.cn id=21 lang=typescript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (63.52%)
 * Likes:    1167
 * Dislikes: 0
 * Total Accepted:    323.9K
 * Total Submissions: 509.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 *
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
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

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 == null || l2 == null) return l1 == null ? l2 : l1;

  let preHead: ListNode | null;
  if (l1.val < l2.val) {
    preHead = l1;
    l1 = l1.next;
  } else {
    preHead = l2;
    l2 = l2.next;
  }
  let pre = preHead;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      pre.next = l1;
      l1 = l1.next;
    } else {
      pre.next = l2;
      l2 = l2.next;
    }
    pre = pre.next;
  }

  pre.next = l1 == null ? l2 : l1;

  return preHead;
}
// @lc code=end

export default mergeTwoLists;
