export type CallbackType<T = number> = (...args: T[]) => any;

export class TreeNode<T = number> {
  constructor(
    public val: number | T = 0,
    public left: TreeNode | null = null,
    public right: TreeNode | null = null,
  ) {}
}

/**
 * 先序遍历(指针·栈·迭代)
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const preOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root) {
    const stack: TreeNode[] = [];
    let prt: TreeNode | null = root;

    while (prt || stack.length) {
      if (!prt) prt = stack.pop()!;
      callback(prt.val);
      if (prt.right) stack.push(prt.right);
      prt = prt.left;
    }
  }
};

/**
 * 中序遍历(指针·栈·迭代)
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const inOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root) {
    const stack: TreeNode[] = [];
    let prt: TreeNode | null = root;

    while (prt || stack.length) {
      if (!prt) {
        prt = stack.pop()!;
        callback(prt.val);
        prt = prt.right;
      }
      if (prt) {
        stack.push(prt);
        prt = prt.left;
      }
    }
  }
};

/**
 * 后序遍历(双指针·栈·迭代)
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const postOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root) {
    const stack = [root];
    let prt: TreeNode = root;

    while (stack.length) {
      const peek = stack.length - 1;
      const top = stack[peek];
      if (top.left && top.left !== prt && top.right !== prt) {
        stack.push(top.left);
      } else if (top.right && top.right !== prt) {
        stack.push(top.right);
      } else {
        callback(stack.pop()!.val);
        prt = top;
      }
    }
  }
};

/**
 * 层序遍历(队列·迭代)
 * @param root 树的根节点
 * @param callback 回调函数
 */
export const levelOrderTraverse = (root: TreeNode | null, callback: CallbackType): void => {
  if (root) {
    const queue = [root];

    while (queue.length) {
      const node = queue.shift()!;
      callback(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
  }
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
export const binaryTreeBuilderRecursion = (arr: (number | null)[]): TreeNode | null => {
  const val = arr.shift();
  const root = val != null ? new TreeNode(val) : null;
  grow(arr, [root]);
  return root;
};

/**
 * 把目标数组转化为树(队列·迭代)
 * @param arr 目标数组
 */
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

/**
 * 根据参数输入的值构建二叉树
 * @param args 参数数组
 */
export const createBinaryTree = (...args: (number | null)[]): TreeNode | null => {
  const root = binaryTreeBuilder(args);
  return root;
};

/**
 * 把二叉树转化为数组
 * @param root 目标树的根节点
 */
export const binaryTreeToArray = (root: TreeNode | null): (number | null)[] => {
  if (!root) return [null];

  const array: (number | null)[] = [];
  const queue: (TreeNode | null)[] = [root];

  while (queue.length) {
    let size = queue.length;
    while (size--) {
      const node = queue.shift();
      array.push(node?.val ?? null);
      if (node?.left || node?.right) {
        queue.push(node.left);
        // 过滤数组末尾的 null
        if (node.right || node.left?.left || node.left?.right) {
          queue.push(node.right);
        }
      }
    }
  }

  return array;
};

export const deepCopy = <T>(target: T): any => {
  if (target instanceof Object) {
    if (target instanceof String) {
      const str = target.valueOf();
      return new String(str);
    }
    if (target instanceof Number) {
      const num = target.valueOf();
      return new Number(num);
    }
    if (target instanceof Boolean) {
      const bool = target.valueOf();
      return new Boolean(bool);
    }
    if (target instanceof Array) {
      const array = target.map((item) => deepCopy(item));
      return array;
    }
    let obj = {};
    // for (const key in target) {
    //   obj[key] = deepCopy(target[key]);
    // }
    return obj;
  }

  return target;
};

/**
 * 根据给定的根节点，返回目标树深拷贝的副本
 * @param root 目标树的根节点
 */
export const createBinaryTreeCopy = (root: TreeNode | null): TreeNode | null => {
  if (!root) return null;

  const copy = new TreeNode(deepCopy(root.val));
  copy.left = createBinaryTreeCopy(root.left);
  copy.right = createBinaryTreeCopy(root.right);

  return copy;
};
