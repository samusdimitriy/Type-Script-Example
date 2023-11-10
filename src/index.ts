class UseStatic {
  private static const = 0;

  constructor() {
    UseStatic.const++;
  }

  public static itStaticMethod() {
    console.log("Run static method");
  }

  public showCount() {
    console.log(`Count: ${UseStatic.const}`);
  }
}

const obj1 = new UseStatic();
const obj2 = new UseStatic();
const obj3 = new UseStatic();

obj1.showCount();
obj2.showCount();
obj3.showCount();

UseStatic.itStaticMethod();
