type Length = {
  length: number;
};

function getLength<T extends Length>(str: T) {
  return str.length;
}

getLength("Hello World");
getLength([1, 2, 3]);
getLength(100);

function arrayLogger<T extends Array<string>>(array: T): void {
  array.forEach((item) => console.log(item));
}

arrayLogger(["Hello", "World"]);
arrayLogger([1, 2, 3]);
