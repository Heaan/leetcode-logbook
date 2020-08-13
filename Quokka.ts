// Quokka Temporary File

/* LinkedList Helper */
class ListNode {
  constructor(public val: number = 0, public next: ListNode | null = null) {}
}
const createLinkedList = (...arg: number[]): ListNode | null => {
  if (!arg.length) return null;
  const head = new ListNode(arg.shift());
  arg.reduce((pointer, value) => {
    pointer.next = new ListNode(value);
    return pointer.next;
  }, head);
  return head;
};
const linkedListToArray = (head: ListNode | null): number[] => {
  if (!head) return [];
  const array: number[] = [];
  let prt: ListNode | null = head;
  while (prt) {
    array.push(prt.val);
    prt = prt.next;
  }
  return array;
};
/* BinaryTree Helper */
class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}
const binaryTreeBuilder = (arr: (number | null)[]): TreeNode | null => {
  if (arr[0] == null) return null;
  const root = new TreeNode(arr.shift()!);
  const queue = [root];
  while (queue.length && arr.length) {
    const node = queue.shift()!;
    const lef = arr.shift();
    const rig = arr.shift();
    if (lef) {
      node.left = new TreeNode(lef);
      queue.push(node.left);
    }
    if (rig) {
      node.right = new TreeNode(rig);
      queue.push(node.right);
    }
  }
  return root;
};
const createBinaryTree = (...args: (number | null)[]): TreeNode | null => {
  const root = binaryTreeBuilder(args);
  return root;
};
const binaryTreeToArray = (root: TreeNode | null): (number | null)[] => {
  if (!root) return [];
  const array: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];
  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      array.push(node?.val ?? null);
      if (node?.left || node?.right) {
        queue.push(node.left);
        if (node.right || node.left?.left || node.left?.right) {
          queue.push(node.right);
        }
      }
    }
  }
  return array;
};

/* --------------------------------------------------------------------------------------------- */
