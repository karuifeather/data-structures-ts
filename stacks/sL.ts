type Value = string | number;

class StackNode {
  next: StackNode | null = null;

  constructor(public data: Value) {}
}

/**
 * Remember: Stack implemented using SLL
 * are done backwards because we want that
 * constant time.
 */

class Stack {
  first: StackNode | null = null;
  last: StackNode | null = null;
  size = 0;

  push(value: Value): number {
    const node = new StackNode(value);

    if (!this.first) {
      this.first = this.last = node;
    } else {
      node.next = this.first;
      this.first = node;
    }

    return ++this.size;
  }

  pop(): Value | null {
    if (!this.first) return null;

    const popped = this.first;

    if (this.size === 1) this.first = this.last = null;
    else this.first = this.first.next;

    this.size--;

    return popped.data;
  }
}

// const stack = new Stack();

// stack.push(2);
// stack.push(1000);

// stack.push('Hi');
// stack.pop();
