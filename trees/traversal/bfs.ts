import { BST, BSTNode } from '../bst/bst';

class BFS {
  constructor(private tree: BST) {}

  traverse(): BSTNode[] {
    const nodes = [];
    const queue: BSTNode[] = [];
    let node = this.tree.root;

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      nodes.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return nodes;
  }
}

// const tree = new BST();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);

// const bfs = new BFS(tree);

// console.log(bfs.traverse());
