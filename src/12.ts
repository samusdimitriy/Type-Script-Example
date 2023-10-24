type User = {
  id: number;
  name: string;
  email: string;
  registered: boolean;
};

function createUser(data: Partial<User>): User {
  const defaultUser: User = {
    id: Date.now(),
    name: "",
    email: "",
    registered: false,
  };

  return { ...defaultUser, ...data };
}

const newUser = createUser({ name: "Max", email: "max@gmail.com" });

console.log(newUser); // { id: 1609140780782, name: 'Max', email: 'max@gmail', registered: false }
