import { BST, BSTNode } from '../bst/bst';

class DFS {
  constructor(private tree: BST) {}

  preOrder(): BSTNode[] {
    const nodes: BSTNode[] = [];
    const node = this.tree.root;

    const traverse = (node: BSTNode): void => {
      nodes.push(node);

      node.left && traverse(node.left);
      node.right && traverse(node.right);
    };

    traverse(node);

    return nodes;
  }

  postOrder(): BSTNode[] {
    const nodes: BSTNode[] = [];
    const node = this.tree.root;

    const traverse = (node: BSTNode): void => {
      node.left && traverse(node.left);
      node.right && traverse(node.right);

      nodes.push(node);
    };

    traverse(node);

    return nodes;
  }

  inOrder(): BSTNode[] {
    const nodes: BSTNode[] = [];
    const node = this.tree.root;

    const traverse = (node: BSTNode): void => {
      node.left && traverse(node.left);
      nodes.push(node);
      node.right && traverse(node.right);
    };

    traverse(node);

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

// const dfs = new DFS(tree);

// console.log(dfs.preOrder());
// console.log(dfs.postOrder());
// console.log(dfs.inOrder());
