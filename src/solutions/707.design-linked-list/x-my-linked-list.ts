import { ListNode } from '@utils';

class XMyLinkedList {
  private size: number = 0;
  private head: ListNode = new ListNode();
  constructor() {}

  private getPrevOf(index: number): ListNode | null {
    if (!index) return this.head;
    let prev: ListNode | null = this.head;
    for (let i = 0; i < index; i++) {
      prev = prev?.next || null;
    }
    return prev;
  }

  get(index: number): number {
    const prev = this.getPrevOf(index);
    if (prev?.next) return prev.next.val;
    return -1;
  }

  addAtHead(val: number): void {
    this.addAtIndex(0, val);
  }

  addAtTail(val: number): void {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(index: number, val: number): void {
    index = index < 0 ? 0 : index;
    if (index <= this.size) {
      const prev = this.getPrevOf(index);
      if (prev) {
        const node = new ListNode(val);
        node.next = prev.next;
        prev.next = node;
        this.size += 1;
      }
    }
  }

  deleteAtIndex(index: number): void {
    if (index >= 0 && index < this.size) {
      const prev = this.getPrevOf(index);
      if (prev?.next) {
        prev.next = prev.next.next;
        this.size -= 1;
      }
    }
  }
}
export default XMyLinkedList;
