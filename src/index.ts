type User = {
  id: string;
  name: string;
  email: string;
};

type Users = {
  [id: string]: User;
};

let users: Users = {};

let user: User = {
  id: "1",
  name: "John",
  email: "john@example.com",
};

users[user.id] = user;

console.log(users);

type MyType = { [key: string]: number };
let obj: MyType = {
  one: 1,
  two: 2,
  three: "three",
};

export default users;
