class LinkNode {
  next: LinkNode | null = null;

  constructor(public data: number) {}
}

class LinkedList {
  head: LinkNode | null = null;
  tail: LinkNode | null = null;
  length: number = 0;

  push(value: number): LinkedList {
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

  unshift(value: number): LinkedList {
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

  set(value: number, index: number): boolean {
    const foundNode = this.get(index);

    if (!foundNode) return false;

    foundNode.data = value;

    return true;
  }

  insert(value: number, index: number): boolean {
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
}

const list = new LinkedList();
list.push(2);
list.push(3);
// list.unshift(2);
// list.unshift(3);

console.log(list);
console.log(list.insert(1001, 0));
console.log(list);
