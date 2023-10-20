type Cat = {
  meow: () => void;
};

type Dog = {
  bark: () => void;
};

function isDog(animal: Dog | Cat): animal is Dog {
  return "bark" in animal;
}

function letAnimalTalk(animal: Dog | Cat) {
  if (isDog(animal)) {
    animal.bark();
  } else {
    animal.meow();
  }
}
