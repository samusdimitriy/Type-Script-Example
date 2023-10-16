import { concatenation } from "./concatenation";

const button = document.querySelector("button")!;
const input = document.querySelector("button")!;

if (button && input) {
  button.addEventListener("click", () => {
    concatenation(input.value, "Hello");
  });
}
