interface Coffee {
  cost(): number;
  description(): string;
}

class SimpleCoffee implements Coffee {
  cost(): number {
    return 10;
  }

  description(): string {
    return "Simple coffee";
  }
}

class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost() {
    return this.coffee.cost();
  }

  description(): string {
    return this.coffee.description();
  }
}

class MilkDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 2;
  }

  description(): string {
    return super.description() + ", milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost(): number {
    return super.cost() + 1;
  }

  description(): string {
    return super.description() + ", sugar";
  }
}

let coffee: Coffee = new SimpleCoffee();
coffee = new MilkDecorator(coffee);
coffee = new SugarDecorator(coffee);

console.log(`${coffee.description()} - ${coffee.cost()} dollars`);
