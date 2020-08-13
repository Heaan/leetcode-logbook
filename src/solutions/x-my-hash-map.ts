class XMyHashMap {
  private map: { [hash: number]: { [key: number]: number } } = {};
  constructor() {}

  private hashCode(key: number) {
    const mapKey = `${key}`;
    let hash = 5381;
    for (let i = 0; i < mapKey.length; i++) {
      hash = hash * 33 + mapKey.charCodeAt(i);
    }
    return hash % 1013;
  }

  put(key: number, value: number): void {
    const hash = this.hashCode(key);
    if (this.map[hash]) {
      const pair = this.map[hash];
      pair[key] = value;
    } else {
      this.map[hash] = { [key]: value };
    }
  }

  get(key: number): number {
    const hash = this.hashCode(key);
    const pair = this.map[hash];
    if (pair && pair[key] != null) return pair[key];
    return -1;
  }

  remove(key: number): void {
    const hash = this.hashCode(key);
    const pair = this.map[hash];
    if (pair && pair[key] != null) delete pair[key];
  }
}

export default XMyHashMap;
