class BSTNode {
  left: BSTNode | null = null;
  right: BSTNode | null = null;

  constructor(public value: number) {}
}

class BST {
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
}

// const tree = new BST();
// tree.insert(234);
// tree.insert(2);
// tree.insert(345);
// tree.insert(403);
// tree.insert(1023);
// tree.insert(786);
// console.log(tree.contains(403));
