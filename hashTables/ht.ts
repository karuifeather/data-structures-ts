class HashTable {
  private keyMap: Array<any>;

  constructor(private size = 53) {
    this.keyMap = new Array(size);
  }

  private _hash(key: string) {
    let total = 0;
    let PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key: string, value: any) {
    const index = this._hash(key);

    if (!this.keyMap[index]) this.keyMap[index] = [[key, value]];
    else this.keyMap[index].push([key, value]);
  }

  get(key: string): any {
    const index = this._hash(key);

    if (!this.keyMap[index]) return undefined;

    for (let item of this.keyMap[index]) {
      if (item[0] === key) {
        return item[1];
      }
    }

    return undefined;
  }

  keys(): any[] {
    const keys = [];

    for (let item of this.keyMap) {
      if (!item) continue;

      for (let pair of item) {
        keys.push(pair[0]);
      }
    }

    return keys;
  }

  values(): any[] {
    const values = [];

    for (let item of this.keyMap) {
      if (!item) continue;
      for (let pair of item) {
        const value = pair[1];
        if (values.indexOf(value) === -1) values.push(value);
      }
    }

    return values;
  }
}

// const ht = new HashTable();

// ht.set('name', 'Aashaya Aryal');
// ht.set('age', 21);
// console.log(ht.get('name'));
// console.log(ht.get('age'));
// console.log(ht.keys());
// console.log(ht.values());
