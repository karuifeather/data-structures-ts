type QD = string | number;

class QN {
  next: QN | null = null;

  constructor(public data: QD) {}
}

class Queue {
  first: QN | null = null;
  last: QN | null = null;
  size = 0;

  enqueue(value: QD): number {
    const node = new QN(value);

    if (!this.last) {
      this.first = this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }

    return ++this.size;
  }

  dequeue(): QD | null {
    if (!this.first) return null;

    const popped = this.first;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;

    this.size--;
    popped.next = null;
    return popped.data;
  }
}

// const q = new Queue();

// q.enqueue(1);
// q.enqueue(2);
// q.enqueue(3);

// console.log(q);

// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q);
