const input = document.querySelector("input");

if (input) {
  (input as HTMLInputElement).value = "initial value";
}

type Person = {
  name: string;
  [x: string]: string;
};

const user: Person = {
  name: "John",
  surname: "Doe",
  country: "USA",
};
