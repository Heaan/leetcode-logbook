type CallbackType = (value: number) => void;

export class TreeNode {
  constructor(
    public val: number = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

/**
 * 先序遍历
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const preOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root != null) {
    callback(root.val);
    preOrderTraverse(root.left, callback);
    preOrderTraverse(root.right, callback);
  }
};

/**
 * 中序遍历
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const inOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root != null) {
    inOrderTraverse(root.left, callback);
    callback(root.val);
    inOrderTraverse(root.right, callback);
  }
};

/**
 * 后序遍历
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const postOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root != null) {
    postOrderTraverse(root.left, callback);
    postOrderTraverse(root.right, callback);
    callback(root.val);
  }
};

/**
 * 层序遍历
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const levelOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root != null) {
    const queue: TreeNode[] = [];
    queue.push(root);

    while (queue.length) {
      const node = queue.shift();
      if (node) {
        callback(node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
  }
};

/**
 * 把目标数组转化为树
 * 迭代实现
 * @param arr 目标数组
 */
export const binaryTreeBuilderIterator = (arr: (number | null)[]): TreeNode | null => {
  const queue: (TreeNode | null)[] = [];
  const val = arr.shift();
  const root = val != null ? new TreeNode(val) : null;

  queue.push(root);

  while (queue.length && arr.length) {
    const node = queue.shift();
    if (node != null) {
      const lef = arr.shift();
      const rig = arr.shift();
      node.left = lef != null ? new TreeNode(lef) : null;
      node.right = rig != null ? new TreeNode(rig) : null;
      queue.push(node.left, node.right);
    }
  }

  return root;
};

const grow = (arr: (number | null)[], children: (TreeNode | null)[]): void => {
  const bro: (TreeNode | null)[] = [];

  while (children.length && arr.length) {
    const node = children.shift();
    if (node != null) {
      const p = arr.shift();
      const q = arr.shift();
      node.left = p != null ? new TreeNode(p) : null;
      node.right = q != null ? new TreeNode(q) : null;
      bro.push(node.left, node.right);
    }
  }

  if (arr.length) grow(arr, bro);
};

/**
 * 把目标数组转化为树
 * 递归实现
 * @param arr 目标函数
 */
const binaryTreeBuilderRecursion = (arr: (number | null)[]): TreeNode | null => {
  const val = arr.shift();
  const root = val != null ? new TreeNode(val) : null;
  grow(arr, [root]);
  return root;
};

/**
 * 从参数构建树
 * @param args 参数数组
 */
export const createBinaryTree = (...args: (number | null)[]): TreeNode | null => {
  const root = binaryTreeBuilderRecursion(args);
  return root;
};

export const binaryTreeToArray = (root: TreeNode | null): (number | null)[] => {
  if (!root) return [null];

  const array: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let size = queue.length;
    while (size-- > 0) {
      const node = queue.shift();
      array.push(node?.val ?? null);
      if (node?.left || node?.right) {
        queue.push(node.left, node.right);
      }
    }
  }

  return array;
};

// const tree = createBinaryTree(1, 2, null, 3, null, 4, null, 5);
// inOrderTraverse(tree, console.info);
// console.info(binaryTreeToArray(tree));
