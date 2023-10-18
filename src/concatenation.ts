interface Animal {
  name: string;
}

interface Dog extends Animal {
  bark: string;
}

class MyDog implements Dog {
  name = "Fido";
  bark = "Woof!";
}

export {};
