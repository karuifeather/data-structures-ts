type Data = string | number;

class LinkNode {
  prev: LinkNode | null = null;
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

  print(): number {
    const arr = [];
    if (!this.head) return null;

    let current = this.head;

    while (current) {
      arr.push(current.data);
      current = current.next;
    }

    console.log(arr);
  }

  push(value: Data): LinkedList {
    const newNode = new LinkNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
    return this;
  }

  pop(): LinkNode {
    if (!this.head) {
      return null;
    }

    const oldTail = this.tail;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }

    this.length--;
    return oldTail;
  }

  shift(): LinkNode {
    if (!this.head) return null;

    const oldHead = this.head;

    if (this.length === 1) {
      this.head = this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
      oldHead.next = null;
    }

    this.length--;

    return oldHead;
  }

  unshift(value: Data): LinkedList {
    const newHead = new LinkNode(value);

    if (!this.head) {
      this.head = this.tail = newHead;
    }

    if (this.length === 0) {
      this.head = this.tail = newHead;
    } else {
      this.head.prev = newHead;
      newHead.next = this.head;
      this.head = newHead;
    }

    this.length++;
    return this;
  }

  get(index: number): LinkNode {
    if (index < 0 || index >= this.length) return null;

    let current: LinkNode;
    let midpoint = Math.floor(this.length / 2);

    if (index <= midpoint) current = this.head;
    else current = this.tail;

    if (current.prev) {
      let i = this.length - 1;

      while (i !== index) {
        current = current.prev;
        i--;
      }

      return current;
    }

    if (current.next) {
      let i = 0;

      while (i !== index) {
        current = current.next;
        i++;
      }

      return current;
    }
  }

  set(value: Data, index: number): boolean {
    const node = this.get(index);

    if (node) {
      node.data = value;
      return true;
    }

    return false;
  }

  insert(value: Data, index: number): boolean {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return !!this.unshift(value);
    if (index === this.length) return !!this.push(value);

    const node = new LinkNode(value);
    const pre = this.get(index - 1);

    // Linking the next node with node
    node.next = pre.next;
    node.next.prev = node;

    // Linking the pre node with node
    pre.next = node;
    node.prev = pre;

    this.length++;
    return true;
  }

  remove(index: number): LinkNode {
    if (index < 0 || index >= this.length) return null;

    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const node = this.get(index);

    // Get previous and next nodes
    const pre = node.prev;
    const next = node.next;

    // Severing ties with node
    pre.next = next;
    next.prev = pre;

    // Cleaning up
    node.prev = node.next = null;

    this.length--;
    return node;
  }
}

// const list = new LinkedList();

// list.push('Hello');
// list.push('I know you!!');
// list.push(3);
// list.push(4);

// list.print();
// console.log(list.insert('Who are you?', 2));
// list.print();

// console.log(list.remove(2));

// list.print();
