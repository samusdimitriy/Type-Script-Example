interface State {
  proceedToNext(order: Order): void;
  toString(): string;
}

class Order {
  private state: State;

  constructor() {
    this.state = new PendingState();
  }

  public proceesToNext() {
    this.state.proceedToNext(this);
  }

  public setState(state: State) {
    this.state = state;
  }

  public toString(): string {
    return this.state.toString();
  }
}

class PendingState implements State {
  public proceedToNext(order: Order): void {
    console.log("pending -> shipping");
    order.setState(new ShippingState());
  }

  public toString(): string {
    return "pending";
  }
}

class ShippingState implements State {
  public proceedToNext(order: Order): void {
    console.log("shipping -> delivered");
    order.setState(new DeliveredState());
  }

  public toString(): string {
    return "shipping";
  }
}

class DeliveredState implements State {
  public proceedToNext(order: Order): void {
    console.log("delivered");
  }

  public toString(): string {
    return "delivered";
  }
}

const order = new Order();

console.log(order.toString()); //
order.proceesToNext();

console.log(order.toString()); //

order.proceesToNext();

console.log(order.toString()); //
