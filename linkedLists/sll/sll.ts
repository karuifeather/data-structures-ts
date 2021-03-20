type Data = string | number;

class LinkNode {
  next: LinkNode | null = null;

  constructor(public data: Data) {}
}

class LinkedList {
  private head: LinkNode | null = null;
  private tail: LinkNode | null = null;
  private length: number = 0;

  get len(): number {
    return this.length;
  }

  push(value: Data): LinkedList {
    const newNode = new LinkNode(value);

    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;

    return this;
  }

  pop(): LinkNode {
    if (!this.head) {
      return;
    }

    let current = this.head;

    while (current) {
      if (!current.next) break;

      current = current.next;
    }

    const oldTail = this.tail;
    this.tail = current;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) this.head = this.tail = null;
    return oldTail;
  }

  shift(): LinkNode {
    if (!this.head) return;

    const oldHead = this.head; //soon-to-be-oldHead technically

    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) this.tail = null;
    return oldHead;
  }

  unshift(value: Data): LinkedList {
    const newHead = new LinkNode(value);

    if (!this.head) {
      this.head = this.tail = newHead;
    } else {
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(index: number): LinkNode | null {
    if (index < 0 || index >= this.length) return null;
    if (!this.head) return null;

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex !== index) {
      currentIndex++;
      current = current.next;
    }

    return current;
  }

  set(value: Data, index: number): boolean {
    const foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.data = value;

    return true;
  }

  insert(value: Data, index: number): boolean {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const newNode = new LinkNode(value);
    const prev = this.get(index - 1);

    newNode.next = prev.next;
    prev.next = newNode;
    this.length++;

    return true;
  }

  remove(index: number): LinkNode {
    if (index < 0 || index >= this.length) return null;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    const pre = this.get(index - 1);
    let targetNode = pre.next;

    pre.next = targetNode.next;
    this.length--;

    return targetNode;
  }

  reverse(): LinkedList {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev: LinkNode | null = null;
    let next: LinkNode | null;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }

  print(): number {
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

const list = new LinkedList();
list.push(10);
list.push(20);
list.push(30);
list.push(40);
list.push('Hi');

console.log(list.print());
console.log(list.reverse());
console.log(list.print());
