import 'module-alias/register';
import {
  CallbackType,
  TreeNode,
  createBinaryTree,
  preOrderTraverse,
  inOrderTraverse,
  postOrderTraverse,
  levelOrderTraverse,
  binaryTreeToArray,
} from '@utils';

describe('函数 createBinaryTree() 根据输入的参数数列创建二叉树', () => {
  test('当缺少参数，或者接收 null 作为第一个参数时', () => {
    const root_1 = createBinaryTree();
    const root_2 = createBinaryTree(null, 0, 1, 2);
    expect(root_1).toBeNull();
    expect(root_2).toBeNull();
  });

  test('创建一棵只有根节点，且值为 0 的二叉树', () => {
    const root = createBinaryTree(0);
    expect(root).toBeDefined();
    expect(root).toBeInstanceOf(TreeNode);
    expect(root?.val).toEqual(0);
    expect(root?.left).toBeNull();
    expect(root?.right).toBeNull();
  });

  test('创建一棵有左右子节点的二叉树', () => {
    const root = createBinaryTree(1, 2, 3);

    const left = root?.left;
    const right = root?.right;

    expect(left).not.toBeNull();
    expect(left).toBeInstanceOf(TreeNode);
    expect(left?.val).toEqual(2);

    expect(right).not.toBeNull();
    expect(left).toBeInstanceOf(TreeNode);
    expect(right?.val).toEqual(3);
  });

  test('创建只有左子节点的二叉树', () => {
    const root = createBinaryTree(1, 2);

    expect(root?.left).not.toBeNull();
    expect(root?.left?.val).toEqual(2);
    expect(root?.right).toBeNull();
  });

  test('创建只有右子节点的二叉树', () => {
    const root = createBinaryTree(1, null, 2);

    expect(root?.left).toBeNull();
    expect(root?.right).not.toBeNull();
    expect(root?.right?.val).toEqual(2);
  });

  test('创建一棵有左右子节点，但只有左孙子节点的二叉树', () => {
    const root = createBinaryTree(0, 1, 2, 3, null, 4);
    const left = root?.left;
    const right = root?.right;

    expect(left?.left).not.toBeNull();
    expect(left?.left).toBeInstanceOf(TreeNode);
    expect(left?.left?.val).toEqual(3);
    expect(left?.right).toBeNull();

    expect(right?.left).not.toBeNull();
    expect(right?.left).toBeInstanceOf(TreeNode);
    expect(right?.left?.val).toEqual(4);
    expect(right?.right).toBeNull();
  });

  test('创建只有右边的二叉树', () => {
    const root = createBinaryTree(1, null, 2, null, 3, null, 4);

    expect(root?.left).toBeNull();
    expect(root?.right).not.toBeNull();
    expect(root?.right?.left).toBeNull();
    expect(root?.right?.right).not.toBeNull();
    expect(root?.right?.right?.left).toBeNull();
    expect(root?.right?.right?.right).not.toBeNull();
  });
});

describe('二叉树的先序、中序、后序以及层次遍历', () => {
  let arr: number[];
  let len: number;
  let root: TreeNode | null;
  let result: number[];
  let callback: CallbackType;

  beforeEach(() => {
    arr = [0, 1, 2, 3, 4];
    len = arr.length;
    root = createBinaryTree(...arr);
    result = [];
    callback = result.push.bind(result);
  });

  test('先序遍历二叉树', () => {
    const aim = [0, 1, 3, 4, 2];
    preOrderTraverse(root, callback);

    expect(result).toHaveLength(len);
    expect(result).toStrictEqual(aim);
  });

  test('中序遍历二叉树', () => {
    const aim = [3, 1, 4, 0, 2];
    inOrderTraverse(root, callback);
    expect(result).toStrictEqual(aim);
  });

  test('后序遍历二叉树', () => {
    const aim = [3, 4, 1, 2, 0];
    postOrderTraverse(root, callback);

    expect(result).toStrictEqual(aim);
  });

  test('层次遍历二叉树', () => {
    const aim = [0, 1, 2, 3, 4];
    levelOrderTraverse(root, callback);

    expect(result).toStrictEqual(aim);
  });
});

describe('函数 binaryTreeToArray() 把二叉树按层次转换为数组输出，且保留关键的 null 节点', () => {
  test('当参数为 null 时', () => {
    const root = createBinaryTree(null);
    const array = binaryTreeToArray(root);

    expect(array).toBeInstanceOf(Array);
    expect(array).toHaveLength(1);
    expect(array[0]).toBeNull();
  });

  test('只有根节点的二叉树', () => {
    const root = createBinaryTree(0);
    const array = binaryTreeToArray(root);

    expect(array).toHaveLength(1);
    expect(array).toContain(0);
  });

  test('当输入的根节点只有右子节点时', () => {
    const root = createBinaryTree(1, null, 2);
    const array = binaryTreeToArray(root);

    expect(array).toHaveLength(3);
    expect(array[1]).toBeNull();
    expect(array[2]).toEqual(2);
  });

  test('当输入的二叉树只有左子树时', () => {
    const root = createBinaryTree(0, 1, null, 2, null, 3, null, 4);
    const array = binaryTreeToArray(root);

    expect(array).toHaveLength(8);
    expect(array[7]).toEqual(4);
    expect(array).toStrictEqual([0, 1, null, 2, null, 3, null, 4]);
  });

  test('当输入是一个满二叉树时', () => {
    const root = createBinaryTree(0, 1, 2, 3, 4, 5, 6);
    const array = binaryTreeToArray(root);

    expect(array).toHaveLength(7);
    expect(array[6]).toEqual(6);
  });
});
