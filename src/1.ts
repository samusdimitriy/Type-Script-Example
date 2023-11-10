import { IPerson, IPilot } from "./type";

class Pilot implements IPerson, IPilot {
  constructor(public name: string, public age: number) {
    if (this.age < 28) {
      throw new Error("Too young to be a pilot");
    }
  }

  greet(phrase: string): void {
    console.log(phrase + " " + this.name);
  }

  flyMessage(): void {
    console.log("The plane is ready to fly, fasten your seatbelt");
  }

  setAutopilot(): void {
    console.log("Autopilot is on");
  }
}

const pilot = new Pilot("John", 30);

pilot.greet("Hello");
pilot.flyMessage();

export { Pilot };
