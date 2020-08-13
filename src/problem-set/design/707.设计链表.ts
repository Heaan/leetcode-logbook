/*
 * @lc app=leetcode.cn id=707 lang=typescript
 *
 * [707] 设计链表
 *
 * https://leetcode-cn.com/problems/design-linked-list/description/
 *
 * algorithms
 * Medium (28.03%)
 * Likes:    160
 * Dislikes: 0
 * Total Accepted:    25.8K
 * Total Submissions: 91.9K
 * Testcase Example:  '["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"]\r\n' +
  '[[],[1],[3],[1,2],[1],[1],[1]]\r'
 *
 * 设计链表的实现。您可以选择使用单链表或双链表。单链表中的节点应该具有两个属性：val 和 next。val 是当前节点的值，next
 * 是指向下一个节点的指针/引用。如果要使用双向链表，则还需要一个属性 prev 以指示链表中的上一个节点。假设链表中的所有节点都是 0-index 的。
 *
 * 在链表类中实现这些功能：
 *
 *
 * get(index)：获取链表中第 index 个节点的值。如果索引无效，则返回-1。
 * addAtHead(val)：在链表的第一个元素之前添加一个值为 val 的节点。插入后，新节点将成为链表的第一个节点。
 * addAtTail(val)：将值为 val 的节点追加到链表的最后一个元素。
 * addAtIndex(index,val)：在链表中的第 index 个节点之前添加值为 val  的节点。如果 index
 * 等于链表的长度，则该节点将附加到链表的末尾。如果 index 大于链表长度，则不会插入节点。如果index小于0，则在头部插入节点。
 * deleteAtIndex(index)：如果索引 index 有效，则删除链表中的第 index 个节点。
 *
 *
 *
 *
 * 示例：
 *
 * MyLinkedList linkedList = new MyLinkedList();
 * linkedList.addAtHead(1);
 * linkedList.addAtTail(3);
 * linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
 * linkedList.get(1);            //返回2
 * linkedList.deleteAtIndex(1);  //现在链表是1-> 3
 * linkedList.get(1);            //返回3
 *
 *
 *
 *
 * 提示：
 *
 *
 * 所有val值都在 [1, 1000] 之内。
 * 操作次数将在  [1, 1000] 之内。
 * 请不要使用内置的 LinkedList 库。
 *
 *
 */
// @lc code=start
class DoublyListNode {
  constructor(
    public val: number = 0,
    public next: DoublyListNode | null = null,
    public prev: DoublyListNode | null = null,
  ) {}
}

class MyLinkedList {
  private size: number = 0;
  private head: DoublyListNode = new DoublyListNode();
  private tail: DoublyListNode = new DoublyListNode();
  constructor() {
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  private getNodeOf(index: number): DoublyListNode | null {
    if (index >= 0 && index < this.size) {
      if (!index) return this.head.next;
      if (index === this.size - 1) return this.tail.prev;
      let node: DoublyListNode;
      if (index + 1 < this.size - index) {
        node = this.head;
        const stop = index + 1;
        for (let i = 0; i < stop; i++) {
          node = node.next!;
        }
      } else {
        node = this.tail;
        const stop = this.size - index;
        for (let i = 0; i < stop; i++) {
          node = node.prev!;
        }
      }
      return node;
    }

    return null;
  }

  private insert(prev: DoublyListNode, node: DoublyListNode, succ: DoublyListNode) {
    prev.next = node;
    node.next = succ;
    succ.prev = node;
    node.prev = prev;
    this.size += 1;
  }

  private remove(node: DoublyListNode) {
    const prev = node.prev!;
    const succ = node.next!;
    prev.next = succ;
    succ.prev = prev;
    this.size -= 1;
  }

  get(index: number): number {
    if (index < 0 || index >= this.size) return -1;
    const node = this.getNodeOf(index)!;
    return node.val;
  }

  addAtHead(val: number): void {
    const node = new DoublyListNode(val);
    const prev = this.head;
    const succ = prev.next!;
    this.insert(prev, node, succ);
  }

  addAtTail(val: number): void {
    const node = new DoublyListNode(val);
    const succ = this.tail;
    const prev = succ.prev!;
    this.insert(prev, node, succ);
  }

  addAtIndex(index: number, val: number): void {
    index = index < 0 ? 0 : index;
    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.size) {
      this.addAtTail(val);
    } else if (index < this.size) {
      const node = new DoublyListNode(val);
      const succ = this.getNodeOf(index)!;
      const prev = succ.prev!;
      this.insert(prev, node, succ);
    }
  }

  deleteAtIndex(index: number): void {
    if (index >= 0 && index < this.size) {
      const node = this.getNodeOf(index)!;
      this.remove(node);
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
// @lc code=end

export default MyLinkedList;
