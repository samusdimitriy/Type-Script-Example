interface IPerson {
  name?: string;
  age: number;
}

class Person implements IPerson {
  constructor(public age: number) {}
}
