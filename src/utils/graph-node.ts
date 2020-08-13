export class Node<T = number> {
  constructor(public val: T | number = 0, public neighbors: Node[] = []) {}
}
