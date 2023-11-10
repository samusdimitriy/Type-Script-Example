import { IPerson, IPilot } from "./type";
import { Pilot } from "./1";

abstract class Plane {
  protected pilot?: IPilot;

  public sitInPlane(pilot: IPilot): void {
    this.pilot = pilot;
  }

  public abstract startEngine(): boolean;
}

class Boeing extends Plane {
  public startEngine(): boolean {
    if (!this.pilot) {
      throw new Error("No pilot");
    }

    console.log("Starting engine");

    this.pilot.flyMessage();
    return true;
  }
}

const boeing = new Boeing();
const pilot = new Pilot("John", 40);

pilot.greet("Hello");

boeing.sitInPlane(pilot);

export { Boeing };
