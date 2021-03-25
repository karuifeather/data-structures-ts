export class MaxBH {
  constructor(public store: number[]) {}

  private swap(arr: number[], i: number, j: number): void {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }

  private bubbleUp(): void {
    const heap = this.store;

    let newLeafIndex = heap.length - 1;
    let parentIndex = Math.floor((newLeafIndex - 1) / 2);

    while (heap[parentIndex] < heap[newLeafIndex]) {
      this.swap(heap, parentIndex, newLeafIndex);
      newLeafIndex = parentIndex;
      parentIndex = Math.floor((newLeafIndex - 1) / 2);
    }
  }

  private bubbleDown(): void {
    const store = this.store;

    let parentNodeIndex = 0;

    while (true) {
      const parent = store[parentNodeIndex];
      const leftChildIndex = 2 * parentNodeIndex + 1;
      const rightChildIndex = 2 * parentNodeIndex + 2;

      let leftChild: number, rightChild: number;
      let swapIndex: number | null = null;

      if (leftChildIndex < store.length) {
        leftChild = store[leftChildIndex];
        if (leftChild > parent) swapIndex = leftChildIndex;
      }

      if (rightChildIndex < store.length) {
        rightChild = store[rightChildIndex];
        if (
          (!swapIndex && rightChild > parent) ||
          (swapIndex && rightChild > leftChild)
        )
          swapIndex = rightChildIndex;
      }

      if (!swapIndex) break;

      this.swap(store, parentNodeIndex, swapIndex);
      parentNodeIndex = swapIndex;
    }
  }

  insert(value: number): void {
    this.store.push(value);
    this.bubbleUp();
  }

  extractMax(): number {
    const store = this.store;

    if (store.length === 0) return;

    this.swap(store, 0, store.length - 1);
    const max = store.pop();

    this.bubbleDown();

    return max;
  }

  maxHeapify(values: number[]): number[] {
    const heap = new MaxBH([]);
    for (let value of values) {
      heap.insert(value);
    }
    return heap.store;
  }

  heapSort(values: number[]) {
    values = this.maxHeapify(values);
    let sorted: number[] = [];

    for (let i = values.length - 1; i >= 1; i--) {
      this.swap(values, 0, i);
      sorted = values.slice(i).concat(sorted);
      values = this.maxHeapify(values.slice(0, i));
    }

    return values.concat(sorted);
  }
}

// const heap = new MaxBH([41, 39, 33, 18, 27, 12]);

// console.log(heap.store);
// console.log(heap.extractMax());
// console.log(heap.insert(99));
// console.log(heap.store);
