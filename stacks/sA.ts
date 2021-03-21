type StackData = string | number;

class StackWithArray {
  private data: Array<StackData> = [];

  get list(): StackData[] {
    return this.data;
  }

  add(value: StackData): StackData[] {
    this.data.push(value);
    return this.data;
  }

  remove(): StackData | null {
    const popped = this.data.pop();

    if (popped) return popped;

    return null;
  }
}
