class KeyValuePair<TKey, TValue> {
  constructor(private key: TKey, private value: TValue) {}

  getKey(): TKey {
    return this.key;
  }

  getValue(): TValue {
    return this.value;
  }
}

const pair1 = new KeyValuePair("name", "First");
console.log(`${pair1.getKey()}: ${pair1.getValue()}`);

const pair2 = new KeyValuePair(1, "Second");
console.log(`${pair2.getKey()}: ${pair2.getValue()}`);
