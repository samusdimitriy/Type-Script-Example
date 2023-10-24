"use strict";
function isDog(animal) {
    return "bark" in animal;
}
function letAnimalTalk(animal) {
    if (isDog(animal)) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
//# sourceMappingURL=4.js.map