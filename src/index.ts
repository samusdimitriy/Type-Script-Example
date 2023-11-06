class House {
  constructor(public readonly address: { street: string; number: number }) {}
}

const house = new House({ street: "Main", number: 123 });

house.address.number = 43; // pochemu tak mozhno?
