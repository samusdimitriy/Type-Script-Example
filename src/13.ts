type User = {
  id: number;
  name: string;
  email: string;
};

let alice: User = {
  id: 1,
  name: "Alice",
  email: "alice@gmail.com",
};

alice.name = "Alice Wonderland";

let aliceReadOnly: Readonly<User> = {
  id: 1,
  name: "Alice",
  email: "alice@gmail.com",
};

aliceReadOnly.name = "Alice Wonderland"; // Error

const arr: Readonly<number[]> = [1, 2, 3, 4, 5];

arr.push(6); // Error
