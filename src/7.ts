type Person = {
  name: string;
};

type AdditionFields = {
  age: number;
};

function merge<T, U>(objA: T, objB: U) {
  return { ...objA, ...objB };
}

const merged = merge<Person, AdditionFields>({ name: "Alisa" }, { age: 28 });

merged.name;

export {};
