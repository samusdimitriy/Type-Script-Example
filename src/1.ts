type ComplexType = string | number;

function combine(a: ComplexType, b: ComplexType) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

export {};
