interface ITest {
  readonly name: string;
}

const person: ITest = {
  name: "John",
};

person.name = "Bob";
