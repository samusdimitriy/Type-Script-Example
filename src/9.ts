type Person = {
  name: string;
  age: number;
  location: string;
};

type PersonKeys = keyof Person;

function getPersonInfo(person: Person, key: PersonKeys) {
  return person[key];
}

const john: Person = {
  name: "John",
  age: 25,
  location: "London",
};

console.log(getPersonInfo(john, "name"));
console.log(getPersonInfo(john, "age"));

function extractValue<T extends object, U extends keyof T>(obj: T, key: U) {
  return obj[key];
}

extractValue({ name: "John", age: 25 }, "name");
