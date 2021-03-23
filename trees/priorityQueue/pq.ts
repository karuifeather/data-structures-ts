type Data = number | string;

class PQNode {
  constructor(public val: Data | null, public priority: number) {}
}

export class PriorityQueue {
  store: PQNode[] = [];

  private swap(arr: PQNode[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  private bubbleUp(): void {
    const heap = this.store;

    let newLeafIndex = heap.length - 1;
    if (newLeafIndex === 0) return;
    let parentIndex = Math.floor((newLeafIndex - 1) / 2);

    while (parentIndex >= 0) {
      const parent = heap[parentIndex];
      const leaf = heap[newLeafIndex];
      console.log(parent, leaf);

      if (parent && parent.priority > leaf.priority) {
        console.log('swapping');
        this.swap(heap, parentIndex, newLeafIndex);
        newLeafIndex = parentIndex;
        parentIndex = Math.floor((newLeafIndex - 1) / 2);
        console.log('ne wparent insedz', parentIndex);
      } else break;
    }
  }

  private bubbleDown(): void {
    const store = this.store;

    let parentNodeIndex = 0;

    while (true) {
      const parent = store[parentNodeIndex].priority;
      const leftChildIndex = 2 * parentNodeIndex + 1;
      const rightChildIndex = 2 * parentNodeIndex + 2;

      let leftChild: number, rightChild: number;
      let swapIndex: number | null = null;

      if (leftChildIndex < store.length) {
        leftChild = store[leftChildIndex].priority;
        if (leftChild < parent) swapIndex = leftChildIndex;
      }

      if (rightChildIndex < store.length) {
        rightChild = store[rightChildIndex].priority;
        if (
          (!swapIndex && rightChild < parent) ||
          (swapIndex && rightChild < leftChild)
        )
          swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this.swap(store, parentNodeIndex, swapIndex);
      parentNodeIndex = swapIndex;
    }
  }

  enqueue(value: Data, priority: number): void {
    const node = new PQNode(value, priority);
    this.store.push(node);
    this.bubbleUp();
  }

  dequeue(): Data {
    const store = this.store;

    if (store.length === 0) return;

    this.swap(store, 0, store.length - 1);
    const max = store.pop();

    this.bubbleDown();

    return max.val;
  }
}

const er = new PriorityQueue();

er.enqueue('cold', 5);
er.enqueue('gunshot', 0);
er.enqueue('fever', 2);
console.log(er.dequeue());
console.log(er.dequeue());
console.log(er.dequeue());

console.log(er);
