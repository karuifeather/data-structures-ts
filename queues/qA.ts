type QueueData = string | number;

class QueueWithArray {
  private data: Array<QueueData> = [];

  get list(): QueueData[] {
    return this.data;
  }

  add(value: QueueData): QueueData[] {
    this.data.push(value);
    return this.data;
  }

  remove(): QueueData | null {
    const popped = this.data.shift();

    if (popped) return popped;

    return null;
  }
}
