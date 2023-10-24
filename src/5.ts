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

export default users;
