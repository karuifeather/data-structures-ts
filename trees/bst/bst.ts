export class BSTNode {
  left: BSTNode | null = null;
  right: BSTNode | null = null;

  constructor(public value: number) {}
}

export class BST {
  root: BSTNode | null = null;

  insert(value: number): this | undefined {
    const node = new BSTNode(value);

    if (!this.root) {
      this.root = node;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value === value) return undefined;

      if (value < current.value) {
        if (!current.left) {
          current.left = new BSTNode(value);
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = new BSTNode(value);
          break;
        }
        current = current.right;
      }
    }

    return this;
  }

  contains(value: number): boolean | undefined {
    if (!this.root) return undefined;

    let current: BSTNode | null = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    return found;
  }

  find(value: number): BSTNode {
    if (!this.root) return undefined;

    let current: BSTNode | null = this.root;
    let found = false;

    while (current && !found) {
      if (value < current.value) current = current.left;
      else if (value > current.value) current = current.right;
      else found = true;
    }

    return current;
  }

  private dealWith(node: BSTNode, parent: BSTNode, children: number): void {
    if (children === 0) {
      if (node.value > parent.value) parent.right = null;
      else if (node.value < parent.value) parent.left = null;
    }

    if (children === 1) {
      let childIsOnTheLeft: boolean;

      if (node.left) childIsOnTheLeft = true;

      if (node.value > parent.value) {
        if (childIsOnTheLeft) parent.right = node.left;
        else parent.right = node.right;
      } else if (node.value < parent.value) {
        if (childIsOnTheLeft) parent.left = node.left;
        else parent.left = node.right;
      }
    }

    if (children === 2) {
      // Do something
    }

    return;
  }

  remove(value: number): BSTNode {
    if (!this.root) return undefined;

    let targetNode: BSTNode | null = this.root;
    let parent: BSTNode;
    let found = false;

    while (targetNode && !found) {
      if (value < targetNode.value) {
        parent = targetNode;
        targetNode = targetNode.left;
      } else if (value > targetNode.value) {
        parent = targetNode;
        targetNode = targetNode.right;
      } else {
        found = true;
      }
    }

    if (!found) return;

    if (targetNode.left && targetNode.right) {
      this.dealWith(targetNode, parent, 2);
    } else if (targetNode.left || targetNode.right) {
      this.dealWith(targetNode, parent, 1);
    } else this.dealWith(targetNode, parent, 0);

    targetNode.left = targetNode.right = null;
    return targetNode;
  }

  inOrder(): BSTNode[] {
    const nodes: BSTNode[] = [];
    const node = this.root;

    const traverse = (node: BSTNode): void => {
      nodes.push(node);
      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };

    traverse(node);

    return nodes;
  }
}

const tree = new BST();
tree.insert(60);
tree.insert(28);
tree.insert(82);
tree.insert(12);
tree.insert(46);
tree.insert(75);
tree.insert(95);
tree.insert(15);
tree.insert(58);
tree.insert(87);
// tree.insert(403);
// tree.insert(1023);
// tree.insert(786);
console.log(tree.inOrder());

console.log(tree.remove(12));
console.log(tree.inOrder());
