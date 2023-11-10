import { IPerson, IPilot } from "./type";
import { Boeing } from "./Boeing";

class Terrorist implements IPilot {
  bluff(phrase: string): void {
    console.log(phrase);
  }

  flyMessage(): void {
    console.log("Наші вимоги - 9 мільйонів, інакше ми вб'ємо всіх заручників.");
  }
}

const boeing = new Boeing();
const pilot = new Terrorist();

pilot.bluff("Ви захопили цей літак!");

boeing.startEngine();

export { };